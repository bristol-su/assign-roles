<?php

namespace BristolSU\Module\AssignRoles\Support;

use BristolSU\ControlDB\Contracts\Models\Group;
use BristolSU\ControlDB\Contracts\Repositories\Position;
use BristolSU\Support\Logic\Contracts\Audience\LogicAudience;
use BristolSU\Support\Logic\Contracts\LogicRepository;
use Exception;

class PositionSettingRetrieval
{

    /**
     * @var LogicRepository
     */
    private $logicRepository;
    /**
     * @var LogicAudience
     */
    private $logicAudience;
    /**
     * @var Position
     */
    private $positionRepository;

    public function __construct(LogicRepository $logicRepository, LogicAudience $logicAudience, Position $positionRepository)
    {
        $this->logicRepository = $logicRepository;
        $this->logicAudience = $logicAudience;
        $this->positionRepository = $positionRepository;
    }

    public function getSettings(Group $group)
    {
        $settings = settings('position_settings', []);
        foreach ($settings as $setting) {
            if ($this->groupIsForSetting($group, $setting)) {
                return $setting;
            }
        }
        throw new Exception('Could not find a setting');
    }

    protected function groupIsForSetting(Group $group, array $setting): bool
    {
        if (!array_key_exists('logic_id', $setting)) {
            return false;
        }
        $logic = $this->logicRepository->getById($setting['logic_id']);
        $groups = collect($this->logicAudience->groupAudience($logic))->map(function (Group $group) {
            return $group->id();
        });
        return $groups->contains($group->id());
    }

    public function parse($setting)
    {
        foreach ($setting['allowed'] as $index => $id) {
            $setting['allowed'][$index] = $this->getPosition($id);
        }
        foreach ($setting['only_one_role'] as $index => $id) {
            $setting['only_one_role'][$index] = $this->getPosition($id);
        }
        foreach ($setting['only_one_user'] as $index => $id) {
            $setting['only_one_user'][$index] = $this->getPosition($id);
        }
        foreach ($setting['user_only_has_one_role'] as $index => $id) {
            $setting['user_only_has_one_role'][$index] = $this->getPosition($id);
        }
        return $setting;
    }

    protected function getPosition($id)
    {
        return $this->positionRepository->getById($id);
    }

}