<?php

namespace BristolSU\Module\Tests\AssignRoles;

use BristolSU\ControlDB\Contracts\Repositories\Pivots\UserGroup;
use BristolSU\Module\AssignRoles\ModuleServiceProvider;
use BristolSU\Support\Testing\AssertsEloquentModels;
use BristolSU\Support\Testing\CreatesModuleEnvironment;
use BristolSU\Support\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use AssertsEloquentModels, CreatesModuleEnvironment;

    public function setUp(): void
    {
        parent::setUp();
        $this->setModuleIsFor('group');
        $this->createModuleEnvironment('assign-roles');
        app(UserGroup::class)->addUserToGroup($this->getControlUser(), $this->getControlGroup());
    }

    protected function getPackageProviders($app)
    {
        return array_merge(parent::getPackageProviders($app), [
            ModuleServiceProvider::class
        ]);
    }
    
}