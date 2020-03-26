<?php

namespace BristolSU\Module\AssignRoles\Events;

use BristolSU\ControlDB\Contracts\Models\Role;
use BristolSU\ControlDB\Contracts\Models\User;
use BristolSU\Support\Action\Contracts\TriggerableEvent;

class UserAssigned implements TriggerableEvent
{

    /**
     * @var User
     */
    private $user;
    /**
     * @var Role
     */
    private $role;

    public function __construct(User $user, Role $role)
    {
        $this->user = $user;
        $this->role = $role;
    }

    /**
     * @inheritDoc
     */
    public function getFields(): array
    {
        return [
            'role_id' => $this->role->id(),
            'position_id' => $this->role->positionId(),
            'position_name' => $this->role->position()->data()->name(),
            'role_name' => $this->role->data()->roleName(),
            'role_email' => $this->role->data()->email(),
            'user_id' => $this->user->id(),
            'user_first_name' => $this->user->data()->firstName(),
            'user_last_name' => $this->user->data()->lastName(),
            'user_preferred_name' => $this->user->data()->preferredName(),
            'user_email' => $this->user->data()->email()
        ];
    }

    /**
     * @inheritDoc
     */
    public static function getFieldMetaData(): array
    {
        return [
            'role_id' => [
                'label' => 'Role ID',
                'helptext' => 'ID of the role that was assigned to'
            ],
            'position_id' => [
                'label' => 'Position ID',
                'helptext' => 'ID of the position that was assigned to'
            ],
            'position_name' => [
                'label' => 'Position Name',
                'helptext' => 'Name of the position that was assigned to'
            ],
            'role_name' => [
                'label' => 'Role Name',
                'helptext' => 'Custom name for the role that was assigned to'
            ],
            'role_email' => [
                'label' => 'Role Email',
                'helptext' => 'Email of the role that was assigned to'
            ],
            'user_id' => [
                'label' => 'User ID',
                'helptext' => 'ID of the user that was assigned'
            ],
            'user_first_name' => [
                'label' => 'User First Name',
                'helptext' => 'First name of the user that was assigned'
            ],
            'user_last_name' => [
                'label' => 'User Last Name',
                'helptext' => 'Last name of the user that was assigned'
            ],
            'user_preferred_name' => [
                'label' => 'User Preferred Name',
                'helptext' => 'Preferred name of the user that was assigned'
            ],
            'user_email' => [
                'label' => 'User Email',
                'helptext' => 'Email of the user that was assigned'
            ]
        ];
    }
}