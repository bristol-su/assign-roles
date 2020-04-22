<?php

namespace BristolSU\Module\AssignRoles\Support;

use BristolSU\ControlDB\Contracts\Models\Role as RoleModel;
use BristolSU\ControlDB\Contracts\Repositories\Role;
use BristolSU\Support\Logic\Contracts\LogicRepository;
use BristolSU\Support\Logic\Facade\LogicTester;
use Illuminate\Support\Collection;

class LogicRoleRepository implements Role
{

    /**
     * @var Role
     */
    private $roleRepository;
    /**
     * @var \BristolSU\Support\Logic\Contracts\LogicTester
     */
    private $logicTester;

    public function __construct(Role $roleRepository, \BristolSU\Support\Logic\Contracts\LogicTester $logicTester)
    {
        $this->roleRepository = $roleRepository;
        $this->logicTester = $logicTester;
    }

    /**
     * @inheritDoc
     */
    public function getById(int $id): RoleModel
    {
        return $this->roleRepository->getById($id);
    }

    /**
     * @inheritDoc
     */
    public function all(): Collection
    {
        return $this->filter($this->roleRepository->all());
    }

    /**
     * @inheritDoc
     */
    public function getByDataProviderId(int $dataProviderId): RoleModel
    {
        return $this->roleRepository->getByDataProviderId($dataProviderId);
    }

    /**
     * @inheritDoc
     */
    public function create(int $positionId, int $groupId, int $dataProviderId): RoleModel
    {
        return $this->roleRepository->create($positionId, $groupId, $dataProviderId);
    }

    /**
     * @inheritDoc
     */
    public function delete(int $id): void
    {
        $this->roleRepository->delete($id);
    }

    /**
     * @inheritDoc
     */
    public function allThroughGroup(\BristolSU\ControlDB\Contracts\Models\Group $group): Collection
    {
        return $this->filter($this->roleRepository->allThroughGroup($group));

    }

    /**
     * @inheritDoc
     */
    public function allThroughPosition(\BristolSU\ControlDB\Contracts\Models\Position $position): Collection
    {
        return $this->filter($this->roleRepository->allThroughPosition($position));
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
            return $roles->filter(function(\BristolSU\ControlDB\Contracts\Models\Role $role) {
                return $this->isInLogicGroup($role);
            })->values();
        }
        return $roles;
    }

    /**
     * Paginate through all the roles
     *
     * @param int $page The page number to return
     * @param int $perPage The number of results to return per page
     *
     * @return Collection|RoleModel[]
     */
    public function paginate(int $page, int $perPage): Collection
    {
        return $this->filter($this->roleRepository->all())->forPage($page, $perPage);
    }

    /**
     * Get the number of roles
     *
     * @return int
     */
    public function count(): int
    {
        return $this->filter($this->roleRepository->all())->count();
    }
}