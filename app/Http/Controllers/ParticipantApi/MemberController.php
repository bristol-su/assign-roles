<?php

namespace BristolSU\Module\AssignRoles\Http\Controllers\ParticipantApi;

use BristolSU\Module\AssignRoles\Http\Controllers\Controller;
use BristolSU\Support\Activity\Activity;
use BristolSU\Support\Authentication\Contracts\Authentication;
use BristolSU\Support\ModuleInstance\Contracts\ModuleInstance;

class MemberController extends Controller
{

    public function index(Activity $activity, ModuleInstance $moduleInstance, Authentication $authentication)
    {
        $this->authorize('see-members');
        
        $group = $authentication->getGroup();
        return $group->members();
    }
    
}