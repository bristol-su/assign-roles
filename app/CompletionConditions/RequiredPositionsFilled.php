<?php

namespace BristolSU\Module\AssignRoles\CompletionConditions;

use BristolSU\ControlDB\Contracts\Models\Group;
use BristolSU\ControlDB\Contracts\Models\Role;
use BristolSU\ControlDB\Contracts\Repositories\Position;
use BristolSU\Module\AssignRoles\Fields\RequiredPositions;
use BristolSU\Module\AssignRoles\Support\RequiredSettingRetrieval;
use BristolSU\Support\ActivityInstance\ActivityInstance;
use BristolSU\Support\Completion\Contracts\CompletionCondition;
use BristolSU\Support\Logic\Contracts\Audience\LogicAudience;
use BristolSU\Support\Logic\Contracts\LogicRepository;
use BristolSU\Support\Logic\Facade\LogicTester;
use BristolSU\Support\ModuleInstance\Contracts\ModuleInstance;
use FormSchema\Generator\Field;
use FormSchema\Schema\Form;

class RequiredPositionsFilled extends CompletionCondition
{

    /**
     * @inheritDoc
     */
    public function isComplete($settings, ActivityInstance $activityInstance, ModuleInstance $moduleInstance): bool
    {
       $remainingRoles = $this->rolesNeededtoFill($settings, $activityInstance, $moduleInstance);
       
       return count($remainingRoles) === 0;
    }
    
    public function percentage($settings, ActivityInstance $activityInstance, ModuleInstance $moduleInstance): int
    {
        if($activityInstance->resource_type === 'group') {
            $group = $activityInstance->participant();
        } else if($activityInstance->resource_type === 'role') {
            $group = $activityInstance->participant()->group();
        } else {
            return collect();
        }

        $requiredPositions = $this->getRequiredPositions($settings, $group);
        $remainingPositions = $this->rolesNeededtoFill($settings, $activityInstance, $moduleInstance);
        
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

    protected function rolesNeededtoFill($settings, ActivityInstance $activityInstance, ModuleInstance $moduleInstance)
    {
        if($activityInstance->resource_type === 'group') {
            $group = $activityInstance->participant();
        } else if($activityInstance->resource_type === 'role') {
            $group = $activityInstance->participant()->group();
        } else {
            return collect();
        }

        $requiredPositions = $this->getRequiredPositions($settings, $group);
        $roles = $group->roles();
        $logicGroupId = $moduleInstance->setting('logic_group', null);
        if($logicGroupId !== null) {
            $logic = app(LogicRepository::class)->getById($logicGroupId);
            
            $roles = $roles->filter(function(\BristolSU\ControlDB\Contracts\Models\Role $role) use ($logic) {
                return LogicTester::evaluate($logic, null, $role->group(), $role);
            })->values();
        }
        $roles = $roles->filter(function(Role $role) {
            return $role->users()->count() > 0;
        });
        
        return collect($requiredPositions)->filter(function(int $positionId) use ($roles) {
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
                ->label('Required Positions')->featured(true)->required(true)
                ->default([])->hint('Define which positions are required')
                ->help('Define the positions that are required for any given logic group')
                ->logic($this->getLogic())
                ->positions($this->getPositions())
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

    private function getRequiredPositions(array $settings, Group $group)
    {
        return app(RequiredSettingRetrieval::class)->getSettings($group, $settings);
    }
}