<?php

namespace BristolSU\Module\AssignRoles\Http\Controllers\ParticipantApi;

use BristolSU\ControlDB\Contracts\Repositories\DataRole;
use BristolSU\ControlDB\Contracts\Repositories\Role;
use BristolSU\Module\AssignRoles\Events\RoleCreated;
use BristolSU\Module\AssignRoles\Http\Controllers\Controller;
use BristolSU\Module\AssignRoles\Http\Requests\ParticipantApi\RoleController\DestroyRequest;
use BristolSU\Module\AssignRoles\Http\Requests\ParticipantApi\RoleController\StoreRequest;
use BristolSU\Module\AssignRoles\Http\Requests\ParticipantApi\RoleController\UpdateRequest;
use BristolSU\Support\Activity\Activity;
use BristolSU\Support\Authentication\Contracts\Authentication;
use BristolSU\Support\Logic\Contracts\LogicRepository;
use BristolSU\Support\Logic\Contracts\LogicTester;
use BristolSU\Support\ModuleInstance\ModuleInstance;

class RoleController extends Controller
{

    /**
     * @var LogicTester
     */
    private $logicTester;

    public function __construct(LogicTester $logicTester)
    {
        $this->logicTester = $logicTester;
    }

    public function index(Activity $activity, ModuleInstance $moduleInstance, Role $role, Authentication $authentication, LogicRepository $logicRepository)
    {
        $this->authorize('role.index');
        $roles = $role->allThroughGroup(
            $authentication->getGroup()
        );
        if(settings('logic_group', null) !== null) {
            $logic = $logicRepository->getById(settings('logic_group'));
            
            $roles = $roles->filter(function(\BristolSU\ControlDB\Contracts\Models\Role $role) use ($logic) {
                return $this->logicTester->evaluate($logic, null, $role->group(), $role);
            })->values();
        }
        
        return $roles->map(function(\BristolSU\ControlDB\Contracts\Models\Role $role) {
            $roleArray = $role->toArray();
            $roleArray['position'] = $role->position();
            $roleArray['users'] = $role->users();
            return $roleArray;
        });
    }

    public function store(Activity $activity, ModuleInstance $moduleInstance, StoreRequest $request, Role $roleRepository, DataRole $dataRoleRepository, Authentication $authentication)
    {
        $this->authorize('role.store');
        
        $dataRole = $dataRoleRepository->create(
            $request->input('role_name'),
            $request->input('email')
        );

        $role = $roleRepository->create(
            $request->input('position_id'),
            $authentication->getGroup()->id(),
            $dataRole->id()
        );
        
        event(new RoleCreated($role));
        
        return $role;
    }

    public function destroy(Activity $activity, ModuleInstance $moduleInstance, int $roleId, DestroyRequest $request, Role $roleRepository)
    {
        $this->authorize('role.delete');
        
        $roleRepository->delete($roleId);
    }

    public function update(Activity $activity, ModuleInstance $moduleInstance, int $roleId, UpdateRequest $request, Role $roleRepository, DataRole $dataRoleRepository)
    {
        $this->authorize('role.update');
        
        $role = $roleRepository->getById($roleId);
        $dataRole = $role->data();
        $dataRole->setEmail($request->input('email', $dataRole->email()));
        $dataRole->setRoleName($request->input('role_name', $dataRole->roleName()));
        return $dataRole;
    }
}