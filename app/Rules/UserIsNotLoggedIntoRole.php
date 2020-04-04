<?php

namespace BristolSU\Module\AssignRoles\Rules;

use BristolSU\Support\Authentication\Contracts\Authentication;
use Illuminate\Contracts\Validation\Rule;

class UserIsNotLoggedIntoRole implements Rule
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
        return $this->authentication->getRole() === null || 
            $this->authentication->getRole()->id() !== (int) $value;
    }

    /**
     * @inheritDoc
     */
    public function message()
    {
        return 'You cannot unassign a role you are logged in as';
    }
}