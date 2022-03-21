<?php

namespace BristolSU\Module\AssignRoles\Support;

use BristolSU\ControlDB\Contracts\Models\Role;
use BristolSU\ControlDB\Contracts\Models\Role as RoleModel;
use BristolSU\ControlDB\Contracts\Models\Tags\RoleTag;
use BristolSU\ControlDB\Contracts\Models\User;
use BristolSU\ControlDB\Contracts\Repositories\Pivots\UserRole;
use BristolSU\Support\Logic\Contracts\LogicRepository;
use Illuminate\Support\Collection;

class LogicUserRoleRepository implements UserRole
{

    /**
     * @var UserRole
     */
    private $userRoleRepository;
    /**
     * @var \BristolSU\Support\Logic\Contracts\LogicTester
     */
    private $logicTester;

    public function __construct(UserRole $userRoleRepository, \BristolSU\Support\Logic\Contracts\LogicTester $logicTester)
    {
        $this->userRoleRepository = $userRoleRepository;
        $this->logicTester = $logicTester;
    }

    /**
     * @inheritDoc
     */
    public function getUsersThroughRole(Role $role): Collection
    {
        return $this->userRoleRepository->getUsersThroughRole($role);
    }

    /**
     * @inheritDoc
     */
    public function getRolesThroughUser(User $user): Collection
    {
        return $this->filter($this->userRoleRepository->getRolesThroughUser($user));
    }

    /**
     * @inheritDoc
     */
    public function addUserToRole(User $user, Role $role): void
    {
        $this->userRoleRepository->addUserToRole($user, $role);
    }

    /**
     * @inheritDoc
     */
    public function removeUserFromRole(User $user, Role $role): void
    {
        $this->userRoleRepository->removeUserFromRole($user, $role);
    }

    private function hasLogicGroup()
    {
        return $this->logicGroupId() !== null;
    }

    private function logicGroupId()
    {
        $id = settings('logic_group', null);
        if($id === null) {
            return null;
        }
        return (int) $id;
    }

    private function logicGroup()
    {
        return app(LogicRepository::class)->getById(
            $this->logicGroupId()
        );
    }

    private function isInLogicGroup(\BristolSU\ControlDB\Contracts\Models\Role $role)
    {
        return $this->logicTester->evaluate($this->logicGroup(), null, $role->group(), $role);
    }

    private function filter(Collection $roles)
    {
        if($this->hasLogicGroup()) {
            return $roles->filter(fn(RoleModel $role) => $this->isInLogicGroup($role) || $role->tags()->filter(fn(RoleTag $roleTag) => $roleTag->fullReference() === 'committee_year.y2022')->count() > 0)->values();
        }
        return $roles;
    }
}
