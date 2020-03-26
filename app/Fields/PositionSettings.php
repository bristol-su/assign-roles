<?php

namespace BristolSU\Module\AssignRoles\Fields;

use FormSchema\Schema\Field;

class PositionSettings extends Field
{

    protected $type = 'assignRolesPositionSettings';

    protected $logic;
    
    protected $positions;
    
    /**
     * @inheritDoc
     */
    public function getAppendedAttributes(): array
    {
        return [
            'logic' => ($this->logic() ?? []),
            'positions' => ($this->positions() ?? [])
        ];
    }
}