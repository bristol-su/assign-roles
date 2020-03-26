<?php

namespace BristolSU\Module\AssignRoles\Rules;

use BristolSU\ControlDB\Contracts\Models\User;
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

    public function __construct(Authentication $authentication)
    {
        $this->authentication = $authentication;
    }

    /**
     * @inheritDoc
     */
    public function passes($attribute, $value)
    {
        return $this->group()->members()->filter(function(User $user) use ($value) {
            return $user->id() === (int) $value;
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