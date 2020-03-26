<?php

namespace BristolSU\Module\AssignRoles\Http\Requests\ParticipantApi\RoleController;

use BristolSU\Module\AssignRoles\Rules\RoleBelongsToGroup;
use BristolSU\Module\AssignRoles\Rules\RoleHasNoUsersAssigned;
use Illuminate\Contracts\Validation\Factory;
use Illuminate\Foundation\Http\FormRequest;

class DestroyRequest extends FormRequest
{

    public function validator(Factory $validationFactory)
    {
        return $validationFactory->make(
            ['role' => $this->route('role')],
            [
                'role' => ['required', app(RoleBelongsToGroup::class), app(RoleHasNoUsersAssigned::class)]
            ]
        );
    }
    
}