<?php

namespace BristolSU\Module\AssignRoles\Support;

use BristolSU\ControlDB\Contracts\Models\Group;
use BristolSU\Support\Logic\Audience\Audience;
use BristolSU\Support\Logic\Contracts\LogicRepository;
use BristolSU\Support\Logic\Facade\LogicTester;
use BristolSU\Support\ModuleInstance\ModuleInstance;
use Illuminate\Support\Facades\Cache;

class RequiredSettingRetrieval
{

    /**
     * @var LogicRepository
     */
    private $logicRepository;

    public function __construct(LogicRepository $logicRepository)
    {
        $this->logicRepository = $logicRepository;
    }

    public function getSettings(Group $group, array $settings, ModuleInstance $moduleInstance)
    {
        if(Cache::has($this->getCacheKey($group, $moduleInstance))) {
            return Cache::get($this->getCacheKey($group, $moduleInstance));
        }
        foreach ((array_key_exists('required', $settings)?$settings['required']:[]) as $setting) {
            if ($this->groupIsForSetting($group, $setting)) {
                Cache::put($this->getCacheKey($group, $moduleInstance), $setting['required'], 7200);
                return $setting['required'];
            }
        }

        throw new SettingRetrievalException('Could not find a setting');
    }

    protected function getCacheKey(Group $group, ModuleInstance $moduleInstance)
    {
        return RequiredSettingRetrieval::class . '.' . $moduleInstance->id() . '.' . $group->id();
    }

    protected function groupIsForSetting(Group $group, array $setting): bool
    {
        if (!array_key_exists('logic_id', $setting)) {
            return false;
        }
        $logic = $this->logicRepository->getById($setting['logic_id']);
        return Audience::audience($logic, null, $group)->count() > 0;
    }

}
