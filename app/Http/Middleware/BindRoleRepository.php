<?php

namespace BristolSU\Module\AssignRoles\Http\Middleware;

use BristolSU\ControlDB\Contracts\Repositories\Pivots\UserRole;
use BristolSU\ControlDB\Contracts\Repositories\Role;
use BristolSU\Module\AssignRoles\Support\LogicRoleRepository;
use BristolSU\Module\AssignRoles\Support\LogicUserRoleRepository;
use BristolSU\Support\Logic\Contracts\LogicTester;
use Illuminate\Http\Request;

class BindRoleRepository
{

    /**
     * @var LogicTester
     */
    private $logicTester;

    public function __construct(LogicTester $logicTester)
    {
        $this->logicTester = $logicTester;
    }

    public function handle(Request $request, \Closure $next)
    {
        app()->extend(Role::class, function($roleRepository, $app) {
            return new LogicRoleRepository($roleRepository, $this->logicTester);
        });

        app()->extend(UserRole::class, function($userRole, $app) {
            return new LogicUserRoleRepository($userRole, $this->logicTester);
        });
        
        return $next($request);
    }
    
}