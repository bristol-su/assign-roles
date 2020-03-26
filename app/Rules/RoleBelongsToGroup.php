<?php

namespace BristolSU\Module\AssignRoles\Rules;

use BristolSU\ControlDB\Contracts\Repositories\Role as RoleRepository;
use BristolSU\Support\Authentication\Contracts\Authentication;
use Illuminate\Contracts\Validation\Rule;

/**
 * Test if a role belongs to a group
 * 
 * @package BristolSU\Module\AssignRoles\Rules
 */
class RoleBelongsToGroup implements Rule
{

    /**
     * @var RoleRepository
     */
    private $roleRepository;
    /**
     * @var Authentication
     */
    private $authentication;

    public function __construct(RoleRepository $roleRepository, Authentication $authentication)
    {
        $this->roleRepository = $roleRepository;
        $this->authentication = $authentication;
    }

    /**
     * @inheritDoc
     */
    public function passes($attribute, $value)
    {
        $role = $this->roleRepository->getById($value);
        return $this->group()->id() === $role->groupId();
    }

    protected function group()
    {
        return $this->authentication->getGroup();
    }

    /**
     * @inheritDoc
     */
    public function message()
    {
        return 'The role does not belong to your group';
    }
}