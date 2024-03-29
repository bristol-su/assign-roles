<?php

namespace BristolSU\Module\AssignRoles\Rules;

use BristolSU\ControlDB\Contracts\Models\Role;
use BristolSU\ControlDB\Contracts\Repositories\User;
use Illuminate\Contracts\Validation\Rule;

class UserBelongsToRole implements Rule
{

    /**
     * @var Role
     */
    private $role;
    /**
     * @var User
     */
    private $userRepository;
    /**
     * @var int
     */
    private $roleId;

    public function __construct(int $roleId, User $userRepository)
    {
        $this->roleId = $roleId;
        $this->userRepository = $userRepository;
    }

    /**
     * @inheritDoc
     */
    public function passes($attribute, $value)
    {
        return $this->userRepository->getById($value)->roles()->filter(function(Role $role) {
            return $role->id() === $this->roleId;
        })->count() > 0;
    }

    /**
     * @inheritDoc
     */
    public function message()
    {
        return 'The user does not belong to the role';
    }
}
