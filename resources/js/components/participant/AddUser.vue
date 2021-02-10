<template>
    <div>
        <b-button size="sm" variant="outline-success" v-b-modal="'add-user-' + role.id" v-if="spaceAvailable">Add</b-button>
        
        <b-modal :id="'add-user-' + role.id" :title="modalTitle" hide-footer>
            <b-form-group
                    id="user-search-group"
                    description="The user must be a member of your group"
                    label="Search for a user"
                    label-for="user-search"
            >
                <b-form-select v-model="selectedUser" :options="options">
                    <b-form-select-option :value="null" disabled>-- Please select a user --</b-form-select-option>
                </b-form-select>
            </b-form-group>
            
            <b-button @click="addUser" v-if="selectedUser !== null">
                Add User
            </b-button>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "AddUser",

        props: {
            role: {
                required: true,
                type: Object
            },
            availableUsers: {
                required: false,
                type: Array,
                default: function() {
                    return [];
                }
            },
            assignedUsers: {
                required: false,
                type: Array,
                default: function() {
                    return [];
                }
            },
            onlyOneUser: {
                required: false,
                type: Array,
                default: function() {
                    return []
                }
            }
        },

        data() {
            return {
                selectedUser: null,
            }
        },
        
        methods: {
            addUser() {
                let self = this;
                this.$http.patch('role/' + this.role.id + '/user/' + this.selectedUser)
                    .then(response => {
                        this.$notify.success('User assigned to role');
                        this.$bvModal.hide('add-user-' + this.role.id);
                        self.$root.$emit('triggerRefresh');
                    })
                    .catch(error => this.$notify.alert('User could not be assigned to role: ' + error.message));
            },
            
        },

        computed: {
            modalTitle() {
                return 'Add a user to ' + this.role.data.role_name;
            },
            options() {
                return this.availableUsers.sort((a, b) => a.data.first_name.localeCompare(b.data.first_name)).filter(member => this.assignedUsers.filter(u => u.id === member.id).length === 0)
                    .map(member => {
                    return {value: member.id, text: member.data.first_name + ' ' + member.data.last_name}
                })
            },
            roleShouldOnlyHaveOneUser() {
                return this.onlyOneUser.filter(position => position.id === this.role.position_id).length > 0;
            },
            spaceAvailable() {
                return !this.roleShouldOnlyHaveOneUser || this.role.users.length === 0;
            }
        }
    }
</script>

<style scoped>

</style>