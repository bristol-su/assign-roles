<?php

namespace BristolSU\Module\Tests\AssignRoles\Http\Controllers\ParticipantApi;

use BristolSU\ControlDB\Contracts\Repositories\Pivots\UserRole;
use BristolSU\ControlDB\Models\DataRole;
use BristolSU\ControlDB\Models\Group;
use BristolSU\ControlDB\Models\Position;
use BristolSU\ControlDB\Models\Role;
use BristolSU\Module\AssignRoles\Http\Controllers\ParticipantApi\RoleController;
use BristolSU\Module\AssignRoles\Support\PositionSettingRetrieval;
use BristolSU\Module\Tests\AssignRoles\TestCase;
use BristolSU\Support\Logic\Contracts\Audience\LogicAudience;
use BristolSU\Support\Logic\Facade\LogicTester;
use BristolSU\Support\Logic\Logic;
use BristolSU\Support\ModuleInstance\Settings\ModuleInstanceSetting;
use BristolSU\Support\Testing\FakesLogicTesters;
use Prophecy\Argument;

class RoleControllerTest extends TestCase
{
    use FakesLogicTesters;
    
    /** @test */
    public function index_returns_a_403_if_permission_not_owned(){
        $this->revokePermissionTo('assign-roles.role.index');
        $response = $this->getJson($this->userApiUrl('/role'));
        $response->assertStatus(403);
    }
    
    /** @test */
    public function index_returns_all_roles_through_a_group_if_no_logic_group_in_settings(){
        $this->bypassAuthorization();
        
        ModuleInstanceSetting::create([
            'key' => 'logic_group',
            'value' => null,
            'module_instance_id' => $this->getModuleInstance()->id()
        ]);
        
        $roles = [
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()])
        ];
        $rolesNotInGroup = [
            $this->newRole(),
            $this->newRole(),
            $this->newRole(),
            $this->newRole(),
            $this->newRole(),
        ];
        
        $response = $this->getJson($this->userApiUrl('/role'));
        $response->assertStatus(200);
        foreach($roles as $role) {
            $response->assertJsonFragment([
                'id' => $role->id(),
                'position_id' => (string) $role->positionId()
            ]);
        }
        foreach($rolesNotInGroup as $role) {
            $response->assertJsonMissing([
                'id' => $role->id(),
                'position_id' => (string) $role->positionId()
            ]);
        }
    }
    
    /** @test */
    public function index_returns_all_roles_through_a_group_that_are_also_in_the_logic_group(){
        $this->bypassAuthorization();

        $logicGroup = factory(Logic::class)->create();
        
        ModuleInstanceSetting::create([
            'key' => 'logic_group',
            'value' => $logicGroup->id,
            'module_instance_id' => $this->getModuleInstance()->id()
        ]);
        
        $rolesInLogicGroup = [
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()])
        ];
        $rolesNotInLogicGroup = [
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()]),
            $this->newRole(['group_id' => $this->getControlGroup()])
        ];
        $rolesNotInGroup = [
            $this->newRole(),
            $this->newRole(),
            $this->newRole(),
            $this->newRole(),
            $this->newRole(),
        ];
        
        $this->logicTester()
            ->forLogic($logicGroup)
            ->pass(null, $this->getControlGroup(), $rolesInLogicGroup[0])
            ->pass(null, $this->getControlGroup(), $rolesInLogicGroup[1])
            ->pass(null, $this->getControlGroup(), $rolesInLogicGroup[2])
            ->pass(null, $this->getControlGroup(), $rolesInLogicGroup[3])
            ->pass(null, $this->getControlGroup(), $rolesInLogicGroup[4])
            ->pass(null, $this->getControlGroup(), $rolesInLogicGroup[5])
            ->fail(null, $this->getControlGroup(), $rolesNotInLogicGroup[0])
            ->fail(null, $this->getControlGroup(), $rolesNotInLogicGroup[1])
            ->fail(null, $this->getControlGroup(), $rolesNotInLogicGroup[2])
            ->fail(null, $this->getControlGroup(), $rolesNotInLogicGroup[3])
            ->fail(null, $this->getControlGroup(), $rolesNotInLogicGroup[4])
            ->fail(null, $this->getControlGroup(), $rolesNotInLogicGroup[5])
            ->fail(null, $rolesNotInGroup[0]->group(), $rolesNotInGroup[0])
            ->fail(null, $rolesNotInGroup[1]->group(), $rolesNotInGroup[1])
            ->fail(null, $rolesNotInGroup[2]->group(), $rolesNotInGroup[2])
            ->fail(null, $rolesNotInGroup[3]->group(), $rolesNotInGroup[3])
            ->fail(null, $rolesNotInGroup[4]->group(), $rolesNotInGroup[4])
            ->otherwise(true);

        $this->app->when(RoleController::class)
            ->needs(\BristolSU\Support\Logic\Contracts\LogicTester::class)
            ->give(function() {
                return $this->logicTester();
            });
        
//        $logicAudience = $this->prophesize(LogicAudience::class);
//        $logicAudience->roleAudience(Argument::that(function($arg) use ($logicGroup) {
//            return $arg instanceof Logic && $arg->is($logicGroup);
//        }))->shouldBeCalled()->willReturn(collect($rolesInLogicGroup));
//        $this->instance(LogicAudience::class, $logicAudience->reveal());
//        
        
        
        $response = $this->getJson($this->userApiUrl('/role'));
        $response->assertStatus(200);
        foreach($rolesInLogicGroup as $role) {
            $response->assertJsonFragment([
                'id' => $role->id(),
                'position_id' => (string) $role->positionId()
            ]);
        }
        foreach($rolesNotInGroup as $role) {
            $response->assertJsonMissing([
                'id' => $role->id(),
                'position_id' => (string) $role->positionId()
            ]);
        }
        foreach($rolesNotInLogicGroup as $role) {
            $response->assertJsonMissing([
                'id' => $role->id(),
                'position_id' => (string) $role->positionId()
            ]);
        }
    }
    
    /** @test */
    public function store_creates_a_new_role()
    {
        $this->givePermissionTo('assign-roles.role.store');
        
        $position = factory(Position::class)->create();
        
        $attributes = [
            'position_id' => $position->id(),
            'role_name' => 'Role Name 1',
            'email' => 'example@example.com'
        ];
        
        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->willReturn([
            'allowed' => [$position->id()],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());
        
        $response = $this->postJson($this->userApiUrl('role'), $attributes);
        $response->assertStatus(201);
        
        $this->assertDatabaseHas('control_roles', [
            'position_id' => $position->id()
        ]);
        $this->assertDatabaseHas('control_data_role', [
            'role_name' => 'Role Name 1',
            'email' => 'example@example.com'
        ]);
    }


    /** @test */
    public function store_can_create_a_role_without_an_email(){
        $this->givePermissionTo('assign-roles.role.store');

        $position = factory(Position::class)->create();

        $attributes = [
            'position_id' => $position->id(),
            'role_name' => 'Role Name 1',
        ];

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->willReturn([
            'allowed' => [$position->id()],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());

        $response = $this->postJson($this->userApiUrl('role'), $attributes);
        $response->assertStatus(201);

        $this->assertDatabaseHas('control_roles', [
            'position_id' => $position->id()
        ]);
        $this->assertDatabaseHas('control_data_role', [
            'role_name' => 'Role Name 1',
            'email' => null
        ]);
    }

    /** @test */
    public function store_returns_the_role(){
        $this->givePermissionTo('assign-roles.role.store');

        $position = factory(Position::class)->create();

        $attributes = [
            'position_id' => $position->id(),
            'role_name' => 'Role Name 1',
            'email' => 'example@example.com'
        ];

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->willReturn([
            'allowed' => [$position->id()],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());

        $response = $this->postJson($this->userApiUrl('role'), $attributes);
        $response->assertStatus(201);

        $this->assertCount(1, Role::all());
        $role = Role::all()->first();
        
        $response->assertJson([
            'id' => $role->id(),
            'data_provider_id' => (string) $role->dataProviderId()
        ]);
        
    }

    /** @test */
    public function store_creates_a_role_belonging_to_the_group(){
        $this->givePermissionTo('assign-roles.role.store');

        $position = factory(Position::class)->create();

        $attributes = [
            'position_id' => $position->id(),
            'role_name' => 'Role Name 1',
            'email' => 'example@example.com'
        ];

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->willReturn([
            'allowed' => [$position->id()],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());

        $response = $this->postJson($this->userApiUrl('role'), $attributes);
        $response->assertStatus(201);

        $this->assertDatabaseHas('control_roles', [
            'position_id' => $position->id(),
            'group_id' => $this->getControlGroup()->id()
        ]);
    }
    
    /** @test */
    public function store_creates_a_new_role_if_only_one_role_exists_but_no_roles_exist(){
        $this->givePermissionTo('assign-roles.role.store');

        $position = factory(Position::class)->create();

        $attributes = [
            'position_id' => $position->id(),
            'role_name' => 'Role Name 1',
            'email' => 'example@example.com'
        ];

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->willReturn([
            'allowed' => [$position->id()],
            'only_one_role' => [$position->id()],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());

        $response = $this->postJson($this->userApiUrl('role'), $attributes);
        $response->assertStatus(201);

        $this->assertDatabaseHas('control_roles', [
            'position_id' => $position->id()
        ]);
        $this->assertDatabaseHas('control_data_role', [
            'role_name' => 'Role Name 1',
            'email' => 'example@example.com'
        ]);
    }

    /** @test */
    public function store_returns_a_403_if_the_permission_is_not_owned(){
        $this->revokePermissionTo('assign-roles.role.store');

        $position = factory(Position::class)->create();

        $attributes = [
            'position_id' => $position->id(),
            'role_name' => 'Role Name 1',
            'email' => 'example@example.com'
        ];

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->willReturn([
            'allowed' => [$position->id()],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());

        $response = $this->postJson($this->userApiUrl('role'), $attributes);
        $response->assertStatus(403);
    }

    /** @test */
    public function store_returns_a_422_if_only_one_role_exists_and_one_role_already_exists(){
        $this->givePermissionTo('assign-roles.role.store');

        $position = factory(Position::class)->create();
        $role1 = $this->newRole(['position_id' => $position->id(), 'group_id' => $this->getControlGroup()->id()]);
        
        $attributes = [
            'position_id' => $position->id(),
            'role_name' => 'Role Name 1',
            'email' => 'example@example.com'
        ];

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->willReturn([
            'allowed' => [$position->id()],
            'only_one_role' => [$position->id()],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());

        $response = $this->postJson($this->userApiUrl('role'), $attributes);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['position_id' => 'The position has already been used in another role']);
    }

    /** @test */
    public function store_returns_a_201_if_only_one_role_exists_and_one_role_already_exists_but_from_a_different_group(){
        $this->givePermissionTo('assign-roles.role.store');

        $position = factory(Position::class)->create();
        $role1 = $this->newRole(['position_id' => $position->id()]);

        $attributes = [
            'position_id' => $position->id(),
            'role_name' => 'Role Name 1',
            'email' => 'example@example.com'
        ];

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->willReturn([
            'allowed' => [$position->id()],
            'only_one_role' => [$position->id()],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());

        $response = $this->postJson($this->userApiUrl('role'), $attributes);
        $response->assertStatus(201);
    }

    /** @test */
    public function store_returns_a_422_if_the_position_is_not_in_allowed(){
        $this->givePermissionTo('assign-roles.role.store');

        $position = factory(Position::class)->create();
        
        $attributes = [
            'position_id' => $position->id(),
            'role_name' => 'Role Name 1',
            'email' => 'example@example.com'
        ];

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->willReturn([
            'allowed' => [],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());

        $response = $this->postJson($this->userApiUrl('role'), $attributes);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['position_id' => 'The position is not available to use']);

        $this->assertDatabaseMissing('control_roles', [
            'position_id' => $position->id()
        ]);
    }
    
    /** @test */
    public function store_returns_a_422_if_the_position_id_is_not_given(){
        $this->givePermissionTo('assign-roles.role.store');

        $attributes = [
            'role_name' => 'Role Name 1',
            'email' => 'example@example.com'
        ];

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->willReturn([
            'allowed' => [],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());

        $response = $this->postJson($this->userApiUrl('role'), $attributes);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['position_id' => 'The position id field is required']);

    }
    
    /** @test */
    public function store_returns_a_422_if_the_email_is_not_an_email(){
        $this->givePermissionTo('assign-roles.role.store');

        $position = factory(Position::class)->create();

        $attributes = [
            'position_id' => $position->id(),
            'role_name' => 'Role Name 1',
            'email' => 'exampleNOTANEMAIL'
        ];

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->willReturn([
            'allowed' => [$position->id()],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());

        $response = $this->postJson($this->userApiUrl('role'), $attributes);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['email' => 'The email must be a valid email address']);
    }
    
    /** @test */
    public function destroy_deletes_a_role(){
        $this->givePermissionTo('assign-roles.role.delete');
        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);

        $this->assertDatabaseHas('control_roles', [
            'id' => $role->id()
        ]);
        
        $response = $this->deleteJson($this->userApiUrl('/role/' . $role->id()));
        $response->assertStatus(200);
        
        $this->assertSoftDeleted('control_roles', [
            'id' => $role->id()
        ]);
    }
    
    /** @test */
    public function destroy_returns_a_422_if_the_role_does_not_belong_to_the_group(){
        $this->bypassAuthorization();
        $role = $this->newRole();

        $response = $this->deleteJson($this->userApiUrl('/role/' . $role->id()));
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['role' => 'The role does not belong to your group']);
    }
    
    /** @test */
    public function destroy_returns_a_422_if_the_role_has_users_assigned(){
        $this->bypassAuthorization();
        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);
        $user1 = $this->newUser();
        $user2 = $this->newUser();
        app(UserRole::class)->addUserToRole($user1, $role);
        app(UserRole::class)->addUserToRole($user2, $role);
        
        $response = $this->deleteJson($this->userApiUrl('/role/' . $role->id()));
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['role' => 'The role still has users assigned']);
    }
    
    /** @test */
    public function destroy_returns_a_403_if_the_permission_is_not_owned(){
        $this->revokePermissionTo('assign-roles.role.delete');
        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);

        $response = $this->deleteJson($this->userApiUrl('/role/' . $role->id()));
        $response->assertStatus(403);
    }
    
    /** @test */
    public function update_updates_a_role(){
        $this->givePermissionTo('assign-roles.role.update');
        $dataRole = factory(DataRole::class)->create([
            'role_name' => 'OldName', 'email' => 'OldEmail@example.com'
        ]);
        $role = $this->newRole(['data_provider_id' => $dataRole->id(), 'group_id' => $this->getControlGroup()->id()]);
        
        $response = $this->patchJson($this->userApiUrl('/role/' . $role->id()), [
            'role_name' => 'NewName', 'email' => 'NewEmail@example.com'
        ]);
        $response->assertStatus(200);
        $this->assertDatabaseHas('control_data_role', [
            'role_name' => 'NewName', 'email' => 'NewEmail@example.com'
        ]);
    }
    
    /** @test */
    public function update_can_update_just_the_role_name(){
        $this->bypassAuthorization();
        $dataRole = factory(DataRole::class)->create([
            'role_name' => 'OldName', 'email' => 'OldEmail@example.com'
        ]);
        $role = $this->newRole(['data_provider_id' => $dataRole->id(), 'group_id' => $this->getControlGroup()->id()]);

        $response = $this->patchJson($this->userApiUrl('/role/' . $role->id()), [
            'role_name' => 'NewName'
        ]);
        $response->assertStatus(200);
        $this->assertDatabaseHas('control_data_role', [
            'role_name' => 'NewName', 'email' => 'OldEmail@example.com'
        ]);
    }
    
    /** @test */
    public function update_can_update_just_the_role_email(){
        $this->givePermissionTo('assign-roles.role.update');
        $dataRole = factory(DataRole::class)->create([
            'role_name' => 'OldName', 'email' => 'OldEmail@example.com'
        ]);
        $role = $this->newRole(['data_provider_id' => $dataRole->id(), 'group_id' => $this->getControlGroup()->id()]);

        $response = $this->patchJson($this->userApiUrl('/role/' . $role->id()), [
            'email' => 'NewEmail@example.com'
        ]);
        $response->assertStatus(200);
        $this->assertDatabaseHas('control_data_role', [
            'role_name' => 'OldName', 'email' => 'NewEmail@example.com'
        ]);
    }

    /** @test */
    public function update_returns_the_new_role(){
        $this->givePermissionTo('assign-roles.role.update');
        $dataRole = factory(DataRole::class)->create([
            'role_name' => 'OldName', 'email' => 'OldEmail@example.com'
        ]);
        $role = $this->newRole(['data_provider_id' => $dataRole->id(), 'group_id' => $this->getControlGroup()->id()]);

        $response = $this->patchJson($this->userApiUrl('/role/' . $role->id()), [
            'role_name' => 'NewName', 'email' => 'NewEmail@example.com'
        ]);
        $response->assertStatus(200);
        $response->assertJsonFragment([
            'role_name' => 'NewName', 'email' => 'NewEmail@example.com'
        ]);
        $response->assertJsonMissing([
            'role_name' => 'OldName', 'email' => 'OldEmail@example.com'
        ]);
    }

    /** @test */
    public function update_does_not_update_the_position_id(){
        $this->givePermissionTo('assign-roles.role.update');
        $position = factory(Position::class)->create();
        $newPosition = factory(Position::class)->create();
        
        $role = $this->newRole(['group_id' => $this->getControlGroup()->id(), 'position_id' => $position->id()]);

        $response = $this->patchJson($this->userApiUrl('/role/' . $role->id()), [
            'position_id' => $newPosition->id()
        ]);
        $response->assertStatus(200);
        $this->assertDatabaseHas('control_roles', [
            'position_id' => $position->id()
        ]);
        $this->assertDatabaseMissing('control_roles', [
            'position_id' => $newPosition->id()
        ]);
    }

    /** @test */
    public function update_returns_a_422_if_the_role_does_not_belong_to_the_group(){
        $this->givePermissionTo('assign-roles.role.update');
        $role = $this->newRole();

        $response = $this->patchJson($this->userApiUrl('/role/' . $role->id()), [
            'role_name' => 'NewName', 'email' => 'NewEmail@example.com'
        ]);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['role' => 'The role does not belong to your group']);
    }

    /** @test */
    public function update_returns_a_422_if_the_email_is_not_valid(){
        $this->givePermissionTo('assign-roles.role.update');
        $dataRole = factory(DataRole::class)->create([
            'role_name' => 'OldName', 'email' => 'OldEmail@example.com'
        ]);
        $role = $this->newRole(['data_provider_id' => $dataRole->id(), 'group_id' => $this->getControlGroup()->id()]);

        $response = $this->patchJson($this->userApiUrl('/role/' . $role->id()), [
            'role_name' => 'NewName', 'email' => 'NewEmailNOTANEMAIL'
        ]);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['email' => 'The email must be a valid email address']);

    }
    
    
}