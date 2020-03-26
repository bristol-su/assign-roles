<?php

namespace BristolSU\Module\AssignRoles\Http\Requests\ParticipantApi\RoleController;

use BristolSU\Module\AssignRoles\Rules\RoleBelongsToGroup;
use Illuminate\Contracts\Validation\Factory;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest  extends FormRequest
{

    public function validator(Factory $validationFactory)
    {
        return $validationFactory->make(
            array_merge(['role' => $this->route('role')], $this->all()),
            [
                'role' => ['required', app(RoleBelongsToGroup::class)],
                'role_name' => ['sometimes', 'string', 'min:3', 'max:255'],
                'email' => ['sometimes', 'email']
            ]
        );
    }

}