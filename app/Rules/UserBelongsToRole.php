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
        \Log::info('About  to check roles');
        \Log::info(sprintf('Useer #%u has role %u?', $value, $this->roleId));
        \Log::info(sprintf('User has %u roles'), $this->userRepository->getById($value)->roles()->count());
        \Log::info(sprintf('Those roles are %s.', $this->userRepository->getById($value)->roles()->map(fn(Role $role) => $role->id())->join(', ')));
        return $this->userRepository->getById($value)->roles()->filter(function(Role $role) {
            \Log::info(sprintf('Checking role id %u to ensure they have role %u', $role->id(), $this->roleId));
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
