<?php

namespace BristolSU\Module\AssignRoles\Rules;

use BristolSU\ControlDB\Contracts\Repositories\Role;
use Illuminate\Contracts\Validation\Rule;

class RoleHasNoUsersAssigned implements Rule
{

    /**
     * @var Role
     */
    private $roleRepository;

    public function __construct(Role $roleRepository)
    {
        $this->roleRepository = $roleRepository;
    }

    /**
     * @inheritDoc
     */
    public function passes($attribute, $value)
    {
        $role = $this->roleRepository->getById($value);
        return $role->users()->count() === 0;
    }

    /**
     * @inheritDoc
     */
    public function message()
    {
        return 'The role still has users assigned';
    }
}