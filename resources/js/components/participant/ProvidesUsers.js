export default {
    computed: {
        currentlyShowingALimitedPosition() {
            return this.userOnlyHasOneRole.filter(position => this.position && position.id === this.position.id).length > 0;
        },
        takenUsers() {
            if(this.currentlyShowingALimitedPosition) {
                // Filters any users assigned to any role, because the current role is one where you can't have any roles before joining it.
                return this.roles.map(role => role.users)
                    .flat(1);
            }
            // Filters any users that are assigned to roles where they can't be part of anything else
            return this.roles.filter(role => this.userOnlyHasOneRole.filter(position => position.id === role.position_id).length > 0)
                .map(role => role.users)
                .flat(1);
        },
        availableUsers() {
            return this.members.filter(member => {
                return this.takenUsers.filter(user => user.id === member.id).length === 0;
            });
        },
        memberOptions() {
            return this.availableUsers.sort((a, b) => {
                let aName = a.data.preferred_name ?? (a.data.first_name ?? '');
                let bName = b.data.preferred_name ?? (b.data.first_name ?? '');
                return aName.localeCompare(bName)
            })
                .map(member => {
                    return {id: member.id, value: member.data.preferred_name ?? member.data.first_name + ' ' + member.data.last_name}
                });
        },
    },

    props: {
        members: {
            required: true,
            type: Array
        },
        roles: {
            required: true,
            type: Array
        },
        userOnlyHasOneRole: {
            required: true,
            type: Array
        },
    }

}
