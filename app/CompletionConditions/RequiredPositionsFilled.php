<?php

namespace BristolSU\Module\AssignRoles\CompletionConditions;

use BristolSU\ControlDB\Contracts\Models\Group;
use BristolSU\ControlDB\Contracts\Models\Role;
use BristolSU\ControlDB\Contracts\Repositories\Position;
use BristolSU\ControlDB\Contracts\Repositories\Role as RoleRepository;
use BristolSU\Module\AssignRoles\Fields\RequiredPositions;
use BristolSU\Module\AssignRoles\Support\RequiredSettingRetrieval;
use BristolSU\Module\AssignRoles\Support\SettingRetrievalException;
use BristolSU\Support\ActivityInstance\ActivityInstance;
use BristolSU\Support\Completion\Contracts\CompletionCondition;
use BristolSU\Support\Logic\Audience\Audience;
use BristolSU\Support\Logic\Contracts\LogicRepository;
use BristolSU\Support\Logic\Facade\LogicTester;
use BristolSU\Support\ModuleInstance\Contracts\ModuleInstance;
use FormSchema\Generator\Field;
use FormSchema\Schema\Form;
use Illuminate\Support\Facades\Log;

class RequiredPositionsFilled extends CompletionCondition
{

    /**
     * @var RoleRepository
     */
    private $roleRepository;

    public function __construct(string $moduleAlias, RoleRepository $roleRepository)
    {
        parent::__construct($moduleAlias);
        $this->roleRepository = $roleRepository;
    }

    /**
     * @inheritDoc
     */
    public function isComplete($settings, ActivityInstance $activityInstance, ModuleInstance $moduleInstance): bool
    {
        try {
            $remainingPositions = $this->positionsStillToFill($settings, $activityInstance, $moduleInstance);
        } catch (SettingRetrievalException $e) {
            return false;
        }

       return count($remainingPositions) === 0;
    }

    public function percentage($settings, ActivityInstance $activityInstance, ModuleInstance $moduleInstance): int
    {
        $group = $this->getGroup($activityInstance);
        try {
            $requiredPositions = $this->getRequiredPositions($settings, $group, $moduleInstance);
            $remainingPositions = $this->positionsStillToFill($settings, $activityInstance, $moduleInstance);
        } catch (SettingRetrievalException $e) {
            return false;
        }

        if(count($requiredPositions) === 0) {
            return 100;
        }

        $filled = count($requiredPositions) - count($remainingPositions);

        $percentage = (int) round(($filled/count($requiredPositions)) * 100, 0);

        if($percentage > 100) {
            return 100;
        }
        return $percentage;
    }

    protected function positionsStillToFill($settings, ActivityInstance $activityInstance, ModuleInstance $moduleInstance)
    {
        $group = $this->getGroup($activityInstance);
        $roles = $this->rolesThroughGroup($group, $moduleInstance)->filter(function(Role $role) {
            return $role->users()->count() > 0;
        });

        return collect($this->getRequiredPositions($settings, $group, $moduleInstance))->filter(function(int $positionId) use ($roles) {
            return $roles->filter(function(Role $role) use ($positionId) {
                return $role->positionId() === $positionId;
            })->count() === 0;
        });
    }

    /**
     * @inheritDoc
     */
    public function options(): Form
    {
        return \FormSchema\Generator\Form::make()->withField(
            Field::make(RequiredPositions::class, 'required')
                ->setLabel('Required Positions')->setRequired(true)
                ->setValue([])->setHint('Define which positions are required')
                ->setTooltip('Define the positions that are required for any given logic group')
                ->setLogic($this->getLogic()->toArray())
                ->setPositions($this->getPositions()->toArray())
        )->getSchema();
    }

    /**
     * @inheritDoc
     */
    public function name(): string
    {
        return 'Required Positions are filled';
    }

    /**
     * @inheritDoc
     */
    public function description(): string
    {
        return 'Positions that are marked as required for a group have been filled';
    }

    /**
     * @inheritDoc
     */
    public function alias(): string
    {
        return 'required_positions_are_filled';
    }

    private function getLogic()
    {
        try {
            return collect(app(LogicRepository::class)->all());
        } catch (\Exception $e) {
            return collect();
        }
    }

    private function getPositions()
    {
        try {
            return collect(app(Position::class)->all());
        } catch (\Exception $e) {
            return collect();
        }
    }

    /**
     * Get the group from an activity instance
     *
     * @param ActivityInstance $activityInstance
     * @return Group|\BristolSU\ControlDB\Models\Group
     */
    private function getGroup(ActivityInstance $activityInstance)
    {
        if($activityInstance->resource_type === 'group') {
            return $activityInstance->participant();
        }
        return $activityInstance->participant()->group();
    }

    private function getRequiredPositions(array $settings, Group $group, ModuleInstance $moduleInstance)
    {
        return app(RequiredSettingRetrieval::class)->getSettings($group, $settings, $moduleInstance);
    }

    private function rolesThroughGroup(Group $group, ModuleInstance $moduleInstance)
    {
        $roles = $group->roles();
        if($this->logicGroupId($moduleInstance) !== null) {
            $logicGroup = app(LogicRepository::class)->getById($this->logicGroupId($moduleInstance));
            return Audience::getRolesInLogicGroup($logicGroup)
                ->filter(function(\BristolSU\ControlDB\Contracts\Models\Role $role) use ($group) {
                    return $role->groupId() === $group->id();
                })->values();
        }
        return $roles;
    }

    private function logicGroupId(ModuleInstance $moduleInstance)
    {
        $id = $moduleInstance->setting('logic_group', null);
        if($id === null) {
            return null;
        }
        return (int) $id;
    }

}
