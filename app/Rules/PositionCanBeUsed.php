<?php

namespace BristolSU\Module\AssignRoles\Rules;

use BristolSU\ControlDB\Contracts\Repositories\Role;
use BristolSU\Module\AssignRoles\Support\PositionSettingRetrieval;
use BristolSU\Support\Authentication\Contracts\Authentication;
use Illuminate\Contracts\Validation\Rule;

class PositionCanBeUsed implements Rule
{

    /**
     * @var PositionSettingRetrieval
     */
    private $positionSettingRetrieval;
    /**
     * @var Role
     */
    private $roleRepository;
    /**
     * @var Authentication
     */
    private $authentication;

    public function __construct(PositionSettingRetrieval $positionSettingRetrieval, Role $roleRepository, Authentication $authentication)
    {
        $this->positionSettingRetrieval = $positionSettingRetrieval;
        $this->roleRepository = $roleRepository;
        $this->authentication = $authentication;
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
        if(in_array($value, $settings['only_one_role'])) {
            $roles = $this->roleRepository->allThroughGroup($this->group());
            return $roles->filter(function(\BristolSU\ControlDB\Contracts\Models\Role $role) use ($value) {
                return $role->positionId() === (int) $value;
            })->count() === 0;
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
        return 'The position has already been used in another role';
    }
}