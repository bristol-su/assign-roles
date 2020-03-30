<?php

namespace BristolSU\Module\AssignRoles\Rules;

use BristolSU\Module\AssignRoles\Support\PositionSettingRetrieval;
use BristolSU\Support\Authentication\Contracts\Authentication;
use Illuminate\Contracts\Validation\Rule;

class PositionIsAllowed implements Rule
{

    /**
     * @var PositionSettingRetrieval
     */
    private $positionSettingRetrieval;
    /**
     * @var Authentication
     */
    private $authentication;

    public function __construct(PositionSettingRetrieval $positionSettingRetrieval, Authentication $authentication)
    {
        $this->positionSettingRetrieval = $positionSettingRetrieval;
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
        
        return in_array($value, $settings['allowed']);
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
        return 'The position is not available to use';
    }
}