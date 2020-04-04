<?php

namespace BristolSU\Module\AssignRoles\Http\Controllers\ParticipantApi;

use BristolSU\ControlDB\Contracts\Models\Role;
use BristolSU\ControlDB\Contracts\Models\User;
use BristolSU\ControlDB\Contracts\Repositories\Pivots\UserRole;
use BristolSU\Module\AssignRoles\Events\UserAssigned;
use BristolSU\Module\AssignRoles\Http\Controllers\Controller;
use BristolSU\Module\AssignRoles\Http\Requests\ParticipantApi\AssignController\DestroyRequest;
use BristolSU\Module\AssignRoles\Http\Requests\ParticipantApi\AssignController\UpdateRequest;
use BristolSU\Support\Activity\Activity;
use BristolSU\Support\Authentication\Contracts\Authentication;
use BristolSU\Support\ModuleInstance\ModuleInstance;

class AssignController extends Controller
{

    public function update(Activity $activity, ModuleInstance $moduleInstance, int $roleId, int $userId, UpdateRequest $request, UserRole $userRole)
    {
        $this->authorize('assign');
        
        $userRole->addUserToRole(
            $user = app(\BristolSU\ControlDB\Contracts\Repositories\User::class)->getById($userId),
            $role = app(\BristolSU\ControlDB\Contracts\Repositories\Role::class)->getById($roleId)
        );
        
        event(new UserAssigned($user, $role));
        
    }

    public function destroy(Activity $activity, ModuleInstance $moduleInstance, int $roleId, int $userId, DestroyRequest $request, UserRole $userRole)
    {
        $this->authorize('unassign');
        
        $userRole->removeUserFromRole(
            app(\BristolSU\ControlDB\Contracts\Repositories\User::class)->getById($userId),
            app(\BristolSU\ControlDB\Contracts\Repositories\Role::class)->getById($roleId)
        );
    }
    
    
    
}