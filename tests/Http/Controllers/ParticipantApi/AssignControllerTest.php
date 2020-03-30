<?php

namespace BristolSU\Module\Tests\AssignRoles\Http\Controllers\ParticipantApi;

use BristolSU\ControlDB\Models\Group;
use BristolSU\ControlDB\Contracts\Repositories\Pivots\UserGroup;
use BristolSU\ControlDB\Contracts\Repositories\Pivots\UserRole;
use BristolSU\ControlDB\Models\Role;
use BristolSU\Module\AssignRoles\Support\PositionSettingRetrieval;
use BristolSU\Module\Tests\AssignRoles\TestCase;
use BristolSU\Support\Logic\Logic;
use BristolSU\Support\ModuleInstance\Settings\ModuleInstanceSetting;
use BristolSU\Support\Permissions\Facade\PermissionTester;
use Prophecy\Argument;

class AssignControllerTest extends TestCase
{

    /** @test */
    public function update_returns_a_422_if_the_role_does_not_belong_to_the_current_group(){
        $this->bypassAuthorization();
        PermissionTester::clearResolvedInstance(\BristolSU\Support\Permissions\Contracts\PermissionTester::class);
        
        $role = $this->newRole();
        $user = $this->newUser();
        app(UserGroup::class)->addUserToGroup($user, $this->getControlGroup());

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->shouldBeCalled()->willReturn([
            'logic_id' => factory(Logic::class)->create()->id,
            'allowed' => [],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());
        
        $response = $this->patchJson($this->userApiUrl(sprintf('/role/%s/user/%s', $role->id(), $user->id())));

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['role' => 'The role does not belong to your group']);
    }

    /** @test */
    public function update_returns_a_422_if_the_user_is_not_a_member_of_the_current_group(){
        $this->bypassAuthorization();
        PermissionTester::clearResolvedInstance(\BristolSU\Support\Permissions\Contracts\PermissionTester::class);

        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);
        $user = $this->newUser();

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->shouldBeCalled()->willReturn([
            'logic_id' => factory(Logic::class)->create()->id,
            'allowed' => [],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());
        
        $response = $this->patchJson($this->userApiUrl(sprintf('/role/%s/user/%s', $role->id(), $user->id())));
        
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['user' => 'The user is not a member of the group']);
    }
    
    /** @test */
    public function update_returns_a_422_if_the_role_should_only_have_one_user_and_it_already_has_one(){
        $this->bypassAuthorization();
        PermissionTester::clearResolvedInstance(\BristolSU\Support\Permissions\Contracts\PermissionTester::class);

        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);
        $user = $this->newUser();
        app(UserGroup::class)->addUserToGroup($user, $this->getControlGroup());

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->shouldBeCalled()->willReturn([
            'logic_id' => factory(Logic::class)->create()->id,
            'allowed' => [],
            'only_one_role' => [],
            'only_one_user' => [$role->id()],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());
        
        app(UserRole::class)->addUserToRole($this->newUser(), $role);

        $response = $this->patchJson($this->userApiUrl(sprintf('/role/%s/user/%s', $role->id(), $user->id())));

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['role' => 'A user is already assigned to this role']);
    }

    /** @test */
    public function update_returns_a_422_if_the_user_already_has_a_role_with_the_only_one_role_allowed_setting(){
        $this->bypassAuthorization();
        PermissionTester::clearResolvedInstance(\BristolSU\Support\Permissions\Contracts\PermissionTester::class);

        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);
        $user = $this->newUser();
        app(UserGroup::class)->addUserToGroup($user, $this->getControlGroup());

        $role2 = $this->newRole();
        app(UserRole::class)->addUserToRole($user, $role2);

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->shouldBeCalled()->willReturn([
            'logic_id' => factory(Logic::class)->create()->id,
            'allowed' => [],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => [$role2->id()]
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());
        
        $response = $this->patchJson($this->userApiUrl(sprintf('/role/%s/user/%s', $role->id(), $user->id())));

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['user' => 'The user is already in a role']);
    }

    /** @test */
    public function update_returns_a_403_if_the_permission_is_not_owned(){
        $this->revokePermissionTo('assign-roles.assign');
        PermissionTester::clearResolvedInstance(\BristolSU\Support\Permissions\Contracts\PermissionTester::class);

        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);
        $user = $this->newUser();
        app(UserGroup::class)->addUserToGroup($user, $this->getControlGroup());

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->shouldBeCalled()->willReturn([
            'logic_id' => factory(Logic::class)->create()->id,
            'allowed' => [],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());
        
        $response = $this->patchJson($this->userApiUrl(sprintf('/role/%s/user/%s', $role->id(), $user->id())));

        $response->assertStatus(403);
    }

    /** @test */
    public function update_returns_a_200_if_the_role_should_only_have_one_user_but_does_not_have_one(){
        $this->givePermissionTo('assign-roles.assign');
        PermissionTester::clearResolvedInstance(\BristolSU\Support\Permissions\Contracts\PermissionTester::class);

        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);
        $user = $this->newUser();
        app(UserGroup::class)->addUserToGroup($user, $this->getControlGroup());

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->shouldBeCalled()->willReturn([
            'logic_id' => factory(Logic::class)->create()->id,
            'allowed' => [],
            'only_one_role' => [],
            'only_one_user' => [$role->id()],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());
        
        $response = $this->patchJson($this->userApiUrl(sprintf('/role/%s/user/%s', $role->id(), $user->id())));

        $response->assertStatus(200);
    }

    /** @test */
    public function update_adds_the_user_to_the_role(){
        $this->givePermissionTo('assign-roles.assign');
        PermissionTester::clearResolvedInstance(\BristolSU\Support\Permissions\Contracts\PermissionTester::class);

        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);
        $user = $this->newUser();
        app(UserGroup::class)->addUserToGroup($user, $this->getControlGroup());

        $this->assertDatabaseMissing('control_role_user', [
            'user_id' => $user->id(),
            'role_id' => $role->id()
        ]);

        $positionSettingRetrieval = $this->prophesize(PositionSettingRetrieval::class);
        $positionSettingRetrieval->getSettings(Argument::that(function($arg) {
            return $arg instanceof Group && $arg->is($this->getControlGroup());
        }))->shouldBeCalled()->willReturn([
            'logic_id' => factory(Logic::class)->create()->id,
            'allowed' => [],
            'only_one_role' => [],
            'only_one_user' => [],
            'user_only_has_one_role' => []
        ]);
        $this->instance(PositionSettingRetrieval::class, $positionSettingRetrieval->reveal());
        
        $response = $this->patchJson($this->userApiUrl(sprintf('/role/%s/user/%s', $role->id(), $user->id())));

        $response->assertStatus(200);
        $this->assertDatabaseHas('control_role_user', [
            'user_id' => $user->id(),
            'role_id' => $role->id()
        ]);
    }
    
    
    
    
    
    
    /** @test */
    public function destroy_returns_a_422_if_the_role_does_not_belong_to_the_current_group(){
        $this->bypassAuthorization();
        PermissionTester::clearResolvedInstance(\BristolSU\Support\Permissions\Contracts\PermissionTester::class);

        $role = $this->newRole();
        $user = $this->newUser();
        app(UserRole::class)->addUserToRole($user, $role);
        
        $response = $this->deleteJson($this->userApiUrl(sprintf('/role/%s/user/%s', $role->id(), $user->id())));

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['role' => 'The role does not belong to your group']);   
    }
    
    /** @test */
    public function destroy_returns_a_422_if_the_user_does_not_belong_to_the_current_role(){
        $this->bypassAuthorization();
        PermissionTester::clearResolvedInstance(\BristolSU\Support\Permissions\Contracts\PermissionTester::class);

        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);
        $user = $this->newUser();

        $response = $this->deleteJson($this->userApiUrl(sprintf('/role/%s/user/%s', $role->id(), $user->id())));

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['user' => 'The user does not belong to the role']);
    }
    
    /** @test */
    public function destroy_returns_a_403_if_the_permission_is_not_owned(){
        $this->revokePermissionTo('assign-roles.unassign');
        PermissionTester::clearResolvedInstance(\BristolSU\Support\Permissions\Contracts\PermissionTester::class);

        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);
        $user = $this->newUser();
        app(UserRole::class)->addUserToRole($user, $role);

        $response = $this->deleteJson($this->userApiUrl(sprintf('/role/%s/user/%s', $role->id(), $user->id())));

        $response->assertStatus(403);
    }
    
    /** @test */
    public function destroy_removes_the_user_from_the_role(){
        $this->givePermissionTo('assign-roles.unassign');
        PermissionTester::clearResolvedInstance(\BristolSU\Support\Permissions\Contracts\PermissionTester::class);

        $role = $this->newRole(['group_id' => $this->getControlGroup()->id()]);
        $user = $this->newUser();
        app(UserRole::class)->addUserToRole($user, $role);

        $this->assertDatabaseHas('control_role_user', [
            'user_id' => $user->id(),
            'role_id' => $role->id(),
            'deleted_at' => null
        ]);
        
        $response = $this->deleteJson($this->userApiUrl(sprintf('/role/%s/user/%s', $role->id(), $user->id())));

        $response->assertStatus(200);
        $this->assertSoftDeleted('control_role_user', [
            'user_id' => $user->id(),
            'role_id' => $role->id()
        ]);

    }
}