<template>
    <div>
        <p-tabs ref="tabs">
            <p-tab title="Current Roles">
                <role-table
                    :allowed="allowed"
                    :only-one-user="onlyOneUser"
                    :user-only-has-one-role="userOnlyHasOneRole"
                    :only-one-role="onlyOneRole"
                    :roles="orderedRoles"
                    :loading="$isLoading('load-roles')"
                    @update-role="updateRole"
                    @delete-role="deleteRole"
                    :members="members"
                    @edit-role="editRole"></role-table>
            </p-tab>
            <p-tab title="Add Role" v-if="positionCount > 0">
                <add-role :positions="positions" :members="members" :roles="orderedRoles" :user-only-has-one-role="userOnlyHasOneRole" :only-one-user="onlyOneUser"
                          @add-role="addRole">

                </add-role>
            </p-tab>
        </p-tabs>

        <p-modal id="edit-role" title="Edit Role">
            <edit-role :role="roleBeingEdited" @updated-role="updateRole" :positions="positions" v-if="roleBeingEdited"></edit-role>
            <span v-else>Please select a role to edit</span>
        </p-modal>
    </div>
</template>

<script>
import AddRole from './AddRole';
import EditRole from './EditRole';
import RoleTable from './RoleTable';

export default {
    name: "Roles",
    components: {AddRole, RoleTable, EditRole},
    props: {
        allowed: {
            type: Array,
            required: false,
            default: function () {
                return [];
            }
        },
        onlyOneRole: {
            type: Array,
            required: false,
            default: function () {
                return [];
            }
        },
        userOnlyHasOneRole: {
            type: Array,
            required: false,
            default: function () {
                return [];
            }
        },
        onlyOneUser: {
            type: Array,
            required: false,
            default: function () {
                return [];
            }
        }
    },

    data() {
        return {
            roles: [],
            members: [],
            roleBeingEdited: null
        }
    },

    watch: {
        positionCount() {
            this.$nextTick(() => this.$refs.tabs.loadTabs());
        }
    },

    created() {
        this.$http.get('role', {name: 'load-roles'})
            .then(response => this.roles = response.data)
            .catch(error => this.$notify.alert('Could not load roles: ' + error.message));

        this.$http.get('/members')
            .then(response => this.members = response.data)
            .catch(error => this.$notify.alert('Members could not be loaded: ' + error.message));
    },

    methods: {
        positionIsAvailable(position) {
            if (this.onlyOneRole.filter(p => p.id === position.id).length > 0) {
                if (this.roles.filter(role => role.position_id === position.id).length > 0) {
                    return false;
                }
            }
            return true;
        },
        updateRole(role) {
            this.roles.splice(this.roles.indexOf(this.roles.filter(r => r.id === role.id)[0]), 1, role);
            this.roleBeingEdited = null;
            this.$ui.modal.hide('edit-role');
        },
        addRole(role) {
            this.roles.push(role);
            this.$refs.tabs.selectTab(0)
        },
        deleteRole(id) {
            this.roles.splice(this.roles.indexOf(this.roles.filter(r => r.id === id)[0]), 1);
            this.$refs.tabs.selectTab(0)
        },
        editRole(role) {
            this.roleBeingEdited = role;
            this.$ui.modal.show('edit-role');
        }
    },

    computed: {
        positions() {
            return this.allowed.filter(position => this.positionIsAvailable(position));
        },
        positionCount() {
            return this.positions.length;
        },
        orderedRoles() {
            return this.roles.slice().reverse();
        }
    }
}
</script>

<style scoped>

</style>
