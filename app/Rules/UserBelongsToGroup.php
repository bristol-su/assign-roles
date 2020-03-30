<?php

namespace BristolSU\Module\AssignRoles\Rules;

use BristolSU\ControlDB\Contracts\Models\Group;
use BristolSU\ControlDB\Contracts\Models\User;
use BristolSU\ControlDB\Contracts\Repositories\User as UserRepository;
use BristolSU\Support\Authentication\Contracts\Authentication;
use Illuminate\Contracts\Validation\Rule;

/**
 * Is the user a member of the group
 * 
 * @package BristolSU\Module\AssignRoles\Rules
 */
class UserBelongsToGroup implements Rule
{

    /**
     * @var Authentication
     */
    private $authentication;
    /**
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(Authentication $authentication, UserRepository $userRepository)
    {
        $this->authentication = $authentication;
        $this->userRepository = $userRepository;
    }

    /**
     * @inheritDoc
     */
    public function passes($attribute, $value)
    {
        $user = app(UserRepository::class)->getById((int) $value);
        $groupToMatch = $this->group();
        return $this->userRepository->getById($value)->groups()->filter(function(Group $group) use ($groupToMatch) {
            return $group->id() === $groupToMatch->id();
        })->count() > 0;
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
        return 'The user is not a member of the group';
    }
}