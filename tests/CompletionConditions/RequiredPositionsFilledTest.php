<?php

namespace BristolSU\Module\Tests\AssignRoles\CompletionConditions;

use BristolSU\ControlDB\Models\Group;
use BristolSU\ControlDB\Repositories\Role;
use BristolSU\Module\AssignRoles\CompletionConditions\RequiredPositionsFilled;
use BristolSU\Module\AssignRoles\Support\RequiredSettingRetrieval;
use BristolSU\Module\Tests\AssignRoles\TestCase;
use BristolSU\Support\ActivityInstance\ActivityInstance;
use BristolSU\Support\ModuleInstance\Contracts\ModuleInstance;
use Prophecy\Argument;

class RequiredPositionsFilledTest extends TestCase
{

    /** @test */
    public function isComplete_returns_false_if_the_roles_all_exist_but_some_are_not_filled()
    {
        $group = $this->newGroup();
        $activityInstance = ActivityInstance::factory()->create([
          'resource_type' => 'group', 'resource_id' => $group->id()
        ]);
        $role1 = $this->newRole(['group_id' => $group->id()]);
        $role2 = $this->newRole(['group_id' => $group->id()]);
        $role3 = $this->newRole(['group_id' => $group->id()]);
        $role4 = $this->newRole(['group_id' => $group->id()]);
        $role5 = $this->newRole(['group_id' => $group->id()]);
        $role6 = $this->newRole(['group_id' => $group->id()]);
        $role1->addUser($this->newUser());
        $role2->addUser($this->newUser());
        $role4->addUser($this->newUser());

        $requiredSettings = [
          $role1->positionId(),
          $role2->positionId(),
          $role3->positionId(),
          $role4->positionId(),
          $role5->positionId(),
          $role6->positionId()
        ];

        $requiredSettingRetrieval = $this->prophesize(RequiredSettingRetrieval::class);
        $requiredSettingRetrieval->getSettings(Argument::that(function ($arg) use ($group) {
            return $arg instanceof Group && $arg->is($group);
        }), ['test_settings'], Argument::that(function(ModuleInstance $moduleInstance) {
            return $moduleInstance->is($this->getModuleInstance());
        }))->willReturn($requiredSettings);
        $this->app->instance(RequiredSettingRetrieval::class, $requiredSettingRetrieval->reveal());

        $cc = new RequiredPositionsFilled('mod_alias', new Role);
        $this->assertFalse($cc->isComplete(['test_settings'], $activityInstance, $this->getModuleInstance()));
    }

    /** @test */
    public function isComplete_returns_true_if_the_roles_all_exist_and_all_are_filled()
    {
        $group = $this->newGroup();
        $activityInstance = ActivityInstance::factory()->create([
          'resource_type' => 'group', 'resource_id' => $group->id()
        ]);
        $role1 = $this->newRole(['group_id' => $group->id()]);
        $role2 = $this->newRole(['group_id' => $group->id()]);
        $role3 = $this->newRole(['group_id' => $group->id()]);
        $role4 = $this->newRole(['group_id' => $group->id()]);
        $role5 = $this->newRole(['group_id' => $group->id()]);
        $role6 = $this->newRole(['group_id' => $group->id()]);
        $role1->addUser($this->newUser());
        $role2->addUser($this->newUser());
        $role3->addUser($this->newUser());
        $role4->addUser($this->newUser());
        $role5->addUser($this->newUser());
        $role6->addUser($this->newUser());

        $requiredSettings = [
          $role1->positionId(),
          $role2->positionId(),
          $role3->positionId(),
          $role4->positionId(),
          $role5->positionId(),
          $role6->positionId()
        ];

        $requiredSettingRetrieval = $this->prophesize(RequiredSettingRetrieval::class);
        $requiredSettingRetrieval->getSettings(Argument::that(function ($arg) use ($group) {
            return $arg instanceof Group && $arg->is($group);
        }), ['test_settings'], Argument::that(function(ModuleInstance $moduleInstance) {
            return $moduleInstance->is($this->getModuleInstance());
        }))->willReturn($requiredSettings);
        $this->app->instance(RequiredSettingRetrieval::class, $requiredSettingRetrieval->reveal());

        $cc = new RequiredPositionsFilled('mod_alias', new Role);
        $cc->isComplete(['test_settings'], $activityInstance, $this->getModuleInstance());
        $this->assertTrue($cc->isComplete(['test_settings'], $activityInstance, $this->getModuleInstance()));
    }

}
