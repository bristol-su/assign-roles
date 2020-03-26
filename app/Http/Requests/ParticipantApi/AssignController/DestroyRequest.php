<?php

namespace BristolSU\Module\AssignRoles\Http\Requests\ParticipantApi\AssignController;

use BristolSU\Module\AssignRoles\Rules\RoleBelongsToGroup;
use BristolSU\Module\AssignRoles\Rules\UserBelongsToRole;
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Foundation\Http\FormRequest;

class DestroyRequest extends FormRequest
{

    public function validator(ValidationFactory $factory) 
    {
        return $factory->make(
            ['role' => $this->route('role'), 'user' => $this->route('user')], 
            [
                'role' => ['required', app(RoleBelongsToGroup::class)],
                'user' => ['required', app(UserBelongsToRole::class, ['roleId' => $this->route('role')])]
            ]
        );
    }
    
}