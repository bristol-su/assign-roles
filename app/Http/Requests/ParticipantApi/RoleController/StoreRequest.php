<?php

namespace BristolSU\Module\AssignRoles\Http\Requests\ParticipantApi\RoleController;

use BristolSU\Module\AssignRoles\Rules\PositionCanBeUsed;
use BristolSU\Module\AssignRoles\Rules\PositionIsAllowed;
use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{

    public function rules()
    {
        return [
            'position_id' => ['required', app(PositionIsAllowed::class),  app(PositionCanBeUsed::class)],
            'role_name' => ['required', 'string', 'max:255', 'min:3'],
            'email' => ['sometimes', 'nullable', 'email']
        ];
    }
    
}