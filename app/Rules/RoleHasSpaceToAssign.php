<?php

namespace BristolSU\Module\AssignRoles\Rules;

use BristolSU\ControlDB\Contracts\Repositories\Role;
use BristolSU\Module\AssignRoles\Support\PositionSettingRetrieval;
use BristolSU\Support\Authentication\Contracts\Authentication;
use Illuminate\Contracts\Validation\Rule;

/**
 * Does the role given have space to assign?
 * 
 * This is not the case if the role should only have a single user, and it already has a user
 * 
 * @package BristolSU\Module\AssignRoles\Rules
 */
class RoleHasSpaceToAssign implements Rule
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
     * @var Role
     */
    private $roleRepository;

    public function __construct(Authentication $authentication, PositionSettingRetrieval $positionSettingRetrieval, Role $roleRepository)
    {
        $this->positionSettingRetrieval = $positionSettingRetrieval;
        $this->authentication = $authentication;
        $this->roleRepository = $roleRepository;
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
        if(in_array($value, $settings['only_one_user'])) {
            return $this->roleRepository->getById($value)->users()->count() === 0;
        }
        return true;
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
        return 'A user is already assigned to this role';
    }
}