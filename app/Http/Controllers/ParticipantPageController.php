<?php

namespace BristolSU\Module\AssignRoles\Http\Controllers;

use BristolSU\Module\AssignRoles\Support\PositionSettingRetrieval;
use BristolSU\Module\AssignRoles\Support\SettingRetrievalException;
use BristolSU\Support\Authentication\Contracts\Authentication;

class ParticipantPageController extends Controller
{

    public function index(Authentication $authentication)
    {
        $this->authorize('view-page');
        
        try {
            $setting = app(PositionSettingRetrieval::class)->getSettings(
                $authentication->getGroup()
            );
            $setting = app(PositionSettingRetrieval::class)->parse($setting);
        } catch (SettingRetrievalException $e) {
            return view('assign-roles::nosettings');
        }
        return view('assign-roles::participant')->with('positionSetting', $setting);
    }
    
}