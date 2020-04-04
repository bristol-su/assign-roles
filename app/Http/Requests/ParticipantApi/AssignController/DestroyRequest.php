<?php

namespace BristolSU\Module\AssignRoles\Http\Requests\ParticipantApi\AssignController;

use BristolSU\Module\AssignRoles\Rules\RoleBelongsToGroup;
use BristolSU\Module\AssignRoles\Rules\UserBelongsToRole;
use BristolSU\Module\AssignRoles\Rules\UserIsNotLoggedIntoRole;
use BristolSU\Support\Authentication\Contracts\Authentication;
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Contracts\Validation\Validator;
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

    public function withValidator(Validator $validator)
    {
        $validator->sometimes('role', app(UserIsNotLoggedIntoRole::class), function($input) {
            return app(Authentication::class)->getUser()->id() === (int) $this->route('user');
        });
    }

}