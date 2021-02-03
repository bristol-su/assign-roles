<template>
    <div>
        <b-table :fields="fields" :items="roles" :busy="loadingRoles">
            <template v-slot:table-busy>
                <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </template>
	    <template v-slot:cell(assigned)="data">
                <assigned-user v-for="user in data.item.users" :key="user.id" :user="user" :role="data.item"></assigned-user>
                <add-user :role="data.item" :available-users="availableUsers" :assigned-users="data.item.users" :only-one-user="onlyOneUser" ></add-user>
            </template>
            <template v-slot:cell(actions)="data">
                <b-row>
                    <b-col style="text-align: right;">
                        <edit-role :role="data.item"></edit-role>
                    </b-col>
                    <b-col style="text-align: left;">
                        <delete-role :role="data.item"></delete-role>
                    </b-col>
                </b-row>
            </template>
        </b-table>
    </div>
</template>

<script>
    import AssignedUser from './AssignedUser';
    import AddUser from './AddUser';
    import DeleteRole from './DeleteRole';
    import EditRole from './EditRole';
    export default {
        name: "RoleTable",
        components: {EditRole, DeleteRole, AddUser, AssignedUser},
        props: {
            allowed: {
                type: Array,
                required: false,
                default: function() { 
                    return [];
                }
            },
            onlyOneRole: {
                type: Array,
                required: false,
                default: function() {
                    return [];
                }
            },
            onlyOneUser: {
                type: Array,
                required: false,
                default: function() {
                    return [];
                }
            },
            userOnlyHasOneRole: {
                type: Array,
                required: false,
                default: function() {
                    return [];
                }
            }
        },
        
        created() {
            this.loadRoles();
            this.loadMembers();
        },

        mounted() {
            this.$root.$on('triggerRefresh', data => {
                this.addRole = data;
                // Update Table Data:
                this.loadRoles();
                this.loadMembers();
            });
        },

        data() {
            return {
                fields: [
                    {key: 'position.data.name', label: 'Position Type'},
                    {key: 'data.role_name', label: 'Role Title'},
                    {key: 'data.email', label: 'Generic Email'},
                    {key: 'assigned', label: 'Name(s) of post holder(s)'},
                    {key: 'actions', label: 'Actions'},
                ],
                roles: [],
                members: [],
                loadingRoles: false,
                addRole: null
            }
        },

        methods: {
            loadRoles() {
                this.loadingRoles = true;
                this.$http.get('role')
                    .then(response => this.roles = response.data)
                    .catch(error => this.$notify.alert('Could not load the roles: ' + error.message))
                    .then(() => this.loadingRoles = false)
                    .then(() => { if(this.addRole) { this.$bvModal.show('add-user-' + this.addRole); } });
            },
            loadMembers() {
                this.$http.get('/members')
                    .then(response => this.members = response.data)
                    .catch(error => this.$notify.alert('Members could not be loaded: ' + error.message));
            },
            deleteRole(roleId) {
                this.$bvModal.msgBoxConfirm('Are you sure you want to remove this role?', {
                    title: 'Please Confirm',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    okTitle: 'YES',
                    cancelTitle: 'NO',
                    footerClass: 'p-2',
                    hideHeaderClose: false,
                    centered: true
                })
                    .then(value => {
                        if(value) {
                            this.$http.delete('role/' + this.role.id + '/user/' + this.user.id)
                                .then(response => {
                                    this.$notify.success('User removed from role')
                                    window.location.reload();
                                })
                                .catch(error => this.$notify.alert('User could not be removed from role: ' + error.message))
                        }
                    })
                    .catch(err => {
                        // An error occurred
                    });
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
            },
            takenUsers() {
                return this.roles.filter(role => this.userOnlyHasOneRole.filter(position => position.id === role.position_id).length > 0)
                    .map(role =>  role.users)
                    .flat(1);
            },
            availableUsers() {
                return this.members.filter(member => {
                    console.log(this.takenUsers);
                    return this.takenUsers.filter(user => user.id === member.id).length === 0;
                });           
            }
        }
    }
</script>

<style scoped>

</style>
