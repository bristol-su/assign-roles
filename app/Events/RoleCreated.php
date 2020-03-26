<?php

namespace BristolSU\Module\AssignRoles\Events;

use BristolSU\ControlDB\Contracts\Models\Role;
use BristolSU\Support\Action\Contracts\TriggerableEvent;

class RoleCreated implements TriggerableEvent
{

    /**
     * @var Role
     */
    private $role;

    public function __construct(Role $role)
    {
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
            ]
        ];
    }
}