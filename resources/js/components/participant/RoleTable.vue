<template>
    <div>
        <p-table :columns="fields" :items="roles"
                 :deletable="true"
                 @delete="deleteRow"
                 :editable="true"
                 @edit="$emit('edit-role', $event)">
            <template v-slot:cell(assigned)="{row}">
                <assigned-users :users="row.users" :role="row" @user-deleted="userWasRemoved(row, $event)"></assigned-users>
                <add-user :members="members" :role="row"
                          :only-one-user="onlyOneUser"
                          :roles="roles"
                          :user-only-has-one-role="userOnlyHasOneRole"
                          @user-added="userWasAdded(row, $event)">

                </add-user>
            </template>
        </p-table>
    </div>
</template>

<script>
import AssignedUsers from './AssignedUsers';
import AddUser from './AddUser';
import EditRole from './EditRole';

export default {
    name: "RoleTable",
    components: {EditRole, AddUser, AssignedUsers},
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
        onlyOneUser: {
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
        roles: {
            required: true, type: Array
        },
        members: {
            required: true, type: Array
        }
    },

    data() {
        return {
            fields: [
                {key: 'position.data.name', label: 'Position Type'},
                {key: 'data.role_name', label: 'Role Title'},
                {key: 'data.email', label: 'Generic Email'},
                {key: 'assigned', label: 'Name(s) of post holder(s)'}
            ]
        }
    },

    computed: {
        tableRoles() {
            return this.roles.map(role => {
                return {
                    position_name: role.position.data.name,
                    role_name: role.data.role_name,
                    role_email: role.data.email,
                    users: role.users
                }
            })
        }
    },

    methods: {
        deleteRow(row) {
            if(row.users.length > 0) {
                this.$notify.alert('Please remove users from the role first');
            } else {
                this.$ui.confirm.delete('Deleting role', 'Are you sure you want to delete this role?')
                    .then(() => {
                        this.$http.delete('role/' + row.id)
                            .then(response => {
                                this.$notify.success('Deleted role')
                                this.$emit('delete-role', row.id)
                            })
                            .catch(error => this.$notify.alert('User could not be removed from role: ' + error.message))
                    })
            }
        },
        userWasRemoved(role, id) {
            role.users = role.users.filter(u => u.id !== id);
            this.$emit('update-role', role);
        },
        userWasAdded(role, id) {
            let user = this.members.filter(member => member.id === id);
            if(user.length === 0) {
                window.location.reload();
            } else {
                role.users.push(user[0]);
                this.$emit('update-role', role);
            }
        }
    }
}
</script>

<style scoped>

</style>
