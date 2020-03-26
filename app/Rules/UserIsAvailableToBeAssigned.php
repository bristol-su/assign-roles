<?php

namespace BristolSU\Module\AssignRoles\Rules;

use BristolSU\ControlDB\Contracts\Models\Role;
use BristolSU\ControlDB\Contracts\Repositories\User;
use BristolSU\Module\AssignRoles\Support\PositionSettingRetrieval;
use BristolSU\Support\Authentication\Contracts\Authentication;
use Illuminate\Contracts\Validation\Rule;

/**
 * Is the user available to be assigned?
 * 
 * If the user belongs to a user, which has a position that is 'user only has one user', they will not be available
 */
class UserIsAvailableToBeAssigned implements Rule
{

    /**
     * @var PositionSettingRetrieval
     */
    private $positionSettingRetrieval;
    /**
     * @var Authentication
     */
    private $authentication;
    /**
     * @var User
     */
    private $userRepository;

    public function __construct(Authentication $authentication, PositionSettingRetrieval $positionSettingRetrieval, User $userRepository)
    {
        $this->positionSettingRetrieval = $positionSettingRetrieval;
        $this->authentication = $authentication;
        $this->userRepository = $userRepository;
    }

    /**
     * @inheritDoc
     */
    public function passes($attribute, $value)
    {
        try {
            $settings = $this->positionSettingRetrieval->getSettings($this->group());
        } catch (\Exception $e) {
            return false;
        }
        $user = $this->userRepository->getById($value);
        return $user->roles()->filter(function(Role $role) use ($settings) {
            return in_array($role->id(), $settings['user_only_has_one_role']);
        })->count() === 0;
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
        return 'The user is already in a role';
    }
}
