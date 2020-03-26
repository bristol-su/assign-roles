<?php

namespace BristolSU\Module\AssignRoles\Fields;

use FormSchema\Schema\Field;

class RequiredPositions extends Field
{

    protected $type = 'assignRolesRequiredPositions';

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