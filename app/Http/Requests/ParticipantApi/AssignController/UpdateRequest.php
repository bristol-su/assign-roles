<?php

namespace BristolSU\Module\AssignRoles\Http\Requests\ParticipantApi\AssignController;

use BristolSU\Module\AssignRoles\Rules\RoleBelongsToGroup;
use BristolSU\Module\AssignRoles\Rules\RoleHasSpaceToAssign;
use BristolSU\Module\AssignRoles\Rules\UserBelongsToGroup;
use BristolSU\Module\AssignRoles\Rules\UserIsAvailableToBeAssigned;
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{

    public function validator(ValidationFactory $factory)
    {
        return $factory->make(
            ['role' => $this->route('role'), 'user' => $this->route('user')],
            [
                'role' => ['required', app(RoleBelongsToGroup::class), app(RoleHasSpaceToAssign::class)],
                'user' => ['required', app(UserIsAvailableToBeAssigned::class)]
            ]
        );
    }

}
