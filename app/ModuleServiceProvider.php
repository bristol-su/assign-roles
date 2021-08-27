<?php

namespace BristolSU\Module\AssignRoles;

use BristolSU\ControlDB\Contracts\Repositories\Position;
use BristolSU\Module\AssignRoles\CompletionConditions\RequiredPositionsFilled;
use BristolSU\Module\AssignRoles\Events\RoleCreated;
use BristolSU\Module\AssignRoles\Events\UserAssigned;
use BristolSU\Module\AssignRoles\Fields\PositionSettings;
use BristolSU\Support\Completion\Contracts\CompletionConditionManager;
use BristolSU\Support\Logic\Contracts\LogicRepository;
use BristolSU\Support\Logic\Logic;
use BristolSU\Support\Module\ModuleServiceProvider as ServiceProvider;
use FormSchema\Generator\Field;
use FormSchema\Generator\Group;
use FormSchema\Schema\Form;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Route;

class ModuleServiceProvider extends ServiceProvider
{

    protected $permissions = [
        'view-page' => [
            'name' => 'View Participant Page',
            'description' => 'View the main page of the module.',
            'admin' => false
        ],
        'admin.view-page' => [
            'name' => 'View Admin Page',
            'description' => 'View the administrator page of the module.',
            'admin' => true
        ],

        'assign' => [
            'name' => 'Assign a Role',
            'description' => 'Assign a role to a member of the group',
            'admin' => false
        ],
        'unassign' => [
            'name' => 'Unassign a Role',
            'description' => 'Unassign a user from a role',
            'admin' => false
        ],
        'see-members' => [
            'name' => 'See Member Lists',
            'description' => 'See a list of members that can be assigned roles',
            'admin' => false
        ],

        'role.index' => [
            'name' => 'See all roles',
            'description' => 'See a list of all existing roles for their group',
            'admin' => false
        ],
        'role.store' => [
            'name' => 'Create a role',
            'description' => 'Create a new role according to the settings',
            'admin' => false
        ],
        'role.delete' => [
            'name' => 'Delete a Role',
            'description' => 'Delete a role if no users are assigned to it',
            'admin' => false
        ],
        'role.update' => [
            'name' => 'Update a Role',
            'description' => 'Change the name and email of an existing role',
            'admin' => false
        ],


    ];

    protected $events = [
        RoleCreated::class => [
            'name' => 'Role Created',
            'description' => 'When a new role is created'
        ],
        UserAssigned::class => [
            'name' => 'User Assigned',
            'description' => 'When a user is assigned to a role'
        ],
    ];

    protected $commands = [

    ];

    public function alias(): string
    {
        return 'assign-roles';
    }

    public function namespace()
    {
        return null;
    }

    public function baseDirectory()
    {
        return __DIR__ . '/..';
    }

    public function boot()
    {
        parent::boot();
        $this->registerGlobalScript('modules/assign-roles/js/components.js');

        app(CompletionConditionManager::class)->register('assign-roles', 'required_positions_are_filled', RequiredPositionsFilled::class);
    }

    public function register()
    {
        parent::register();
    }

    /**
     * @inheritDoc
     */
    public function settings(): Form
    {
        return \FormSchema\Generator\Form::make()->withGroup(
            Group::make('Page Layout')->withField(
                Field::textInput('title')->setLabel('Title')->setRequired(true)
                    ->setValue('Page Title')->setHint('The title of the page')
                    ->setTooltip('This title will be shown at the top of the page, to $this->setTooltip() users understand what the module is for')
            )->withField(
                Field::textInput('subtitle')->setLabel('Subtitle')->setRequired(true)
                    ->setValue('Page Subtitle')->setHint('The subtitle for the page')
                    ->setTooltip('This subtitle will be shown under the title, and should include more information for users')
            )->withField(
                Field::textInput('no_settings')->setLabel('No Settings Text')->setRequired(true)
                    ->setValue('No position settings found')->setHint('Text to show if no position settings are found for the group')
                    ->setTooltip('If no position settings are found matching the group, an error page will be loaded. Use this text to explain what went wrong and how the user can fix it.')
            )
        )->withGroup(
            Group::make()->withField(
                Field::make(PositionSettings::class, 'position_settings')
                    ->setLabel('Position Settings')->setRequired(true)
                    ->setValue([])->setHint('Define which positions can be assigned to whom')
                    ->setTooltip('Define the positions that may be used, positions which may only be held by one person and positions for which the assignee is not allowed any other positions')
                    ->setLogic($this->getLogic()->toArray())
                    ->setPositions($this->getPositions()->toArray())
            )->withField(
                Field::select('logic_group')->setLabel('Logic Group to show')
                    ->setRequired(false)->setValue(null)
                    ->setHint('The logic group to show the roles from')
                    ->setTooltip('The logic group the roles should be in. If given, only roles in this logic group will be shown.')
                    ->setSelectOptions($this->getLogic()->map(function(Logic $logic) {
                        return ['id' => $logic->id, 'value' => $logic->name];
                    })->toArray())
                    ->withNullOption('-- Show all roles --', null)
            )
        )->getSchema();
    }

    private function getLogic(): Collection
    {
        try {
            return collect(app(LogicRepository::class)->all());
        } catch (\Exception $e) {
            return collect();
        }
    }

    private function getPositions(): Collection
    {
        try {
            return collect(app(Position::class)->all());
        } catch (\Exception $e) {
            return collect();
        }
    }
}
