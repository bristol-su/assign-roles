<?php

namespace BristolSU\Module\AssignRoles\Fields;

use FormSchema\Schema\Field;

class PositionSettings extends Field
{

    protected array $logic = [];

    protected array $positions = [];

    /**
     * @inheritDoc
     */
    public function getAppendedAttributes(): array
    {
        return [
            'logic' => $this->logic,
            'positions' => $this->positions
        ];
    }

    public function getType(): string
    {
        return 'assignRolesPositionSettings';
    }

    /**
     * @param array $logic
     * @return PositionSettings
     */
    public function setLogic(array $logic): PositionSettings
    {
        $this->logic = $logic;
        return $this;
    }

    /**
     * @param array $positions
     * @return PositionSettings
     */
    public function setPositions(array $positions): PositionSettings
    {
        $this->positions = $positions;
        return $this;
    }
}
