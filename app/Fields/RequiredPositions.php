<?php

namespace BristolSU\Module\AssignRoles\Fields;

use FormSchema\Schema\Field;

class RequiredPositions extends Field
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
        return 'p-assign-roles-required-positions';
    }

    /**
     * @param array $logic
     * @return RequiredPositions
     */
    public function setLogic(array $logic): RequiredPositions
    {
        $this->logic = $logic;
        return $this;
    }

    /**
     * @param array $positions
     * @return RequiredPositions
     */
    public function setPositions(array $positions): RequiredPositions
    {
        $this->positions = $positions;
        return $this;
    }

}
