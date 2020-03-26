<?php

namespace BristolSU\Module\Tests\AssignRoles\Http\Controllers\ParticipantApi;

use BristolSU\ControlDB\Contracts\Repositories\Pivots\UserGroup;
use BristolSU\Module\Tests\AssignRoles\TestCase;

class MemberControllerTest extends TestCase
{

    /** @test */
    public function it_returns_a_403_if_the_permission_is_not_owned(){
        $this->revokePermissionTo('assign-roles.see-members');
        
        $response = $this->get($this->userApiUrl('members'));

        $response->assertStatus(403);
    }
    
    /** @test */
    public function it_returns_all_members(){
        $this->givePermissionTo('assign-roles.see-members');
        $members = [$this->newUser(), $this->newUser(), $this->newUser(), $this->newUser(), $this->newUser(), $this->newUser()];
        
        foreach($members as $member) {
            app(UserGroup::class)->addUserToGroup($member, $this->getControlGroup());
        }
        
        $response = $this->get($this->userApiUrl('members'));

        $response->assertStatus(200);
        foreach($members as $member) {
            $response->assertJsonFragment([
                'id' => $member->id(),
                'data_provider_id' => (string) $member->dataProviderId()
            ]);
        }
    }
    
}