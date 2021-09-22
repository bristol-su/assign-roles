<template>
    <div>
        <button v-if="spaceAvailable" @click="$ui.modal.show('add-user-' + role.id)">
            <i class="fa fa-plus"/> Add User to Role
        </button>

        <p-modal :id="'add-user-' + role.id" :title="modalTitle">
            <div v-if="roleShouldOnlyHaveOneUser && role.users.length > 0">
                This position is already taken and it cannot be shared.
            </div>
            <div v-else-if="filteredMemberOptions.length === 0">
                No members could be found that are not already assigned to other roles. Please contact us for help.
            </div>
            <p-dynamic-form :schema="addUserForm" v-model="formData" v-else>

            </p-dynamic-form>

            <p-button variant="primary" @click="addUser" :busy="$isLoading('add-user-to-role')" v-if="formData.user_id !== null" busy-text="Assigning User">
                Add User to Role
            </p-button>
        </p-modal>
    </div>
</template>

<script>
import ProvidesUsers from './ProvidesUsers';

export default {
    name: "AddUser",

    mixins: [ProvidesUsers],

    props: {
        role: {
            required: true,
            type: Object
        },
        onlyOneUser: {
            required: false,
            type: Array,
            default: function () {
                return []
            }
        }
    },

    data() {
        return {
            formData: {
                user_id: null
            }
        }
    },

    methods: {
        addUser() {
            if (this.formData.user_id) {
                this.$http.patch('role/' + this.role.id + '/user/' + this.formData.user_id, {}, {name: 'add-user-to-role'})
                    .then(response => {
                        this.$notify.success('User assigned to role');
                        this.$emit('user-added', this.formData.user_id);
                        this.$ui.modal.hide('add-user-' + this.role.id);
                    })
                    .catch(error => this.$notify.alert('User could not be assigned to role: ' + error.message));
            }
        },

    },

    computed: {
        position() {
            return this.role.position;
        },
        modalTitle() {
            return 'Add a user to ' + this.role.data.role_name;
        },
        filteredMemberOptions() {
            // Filter users already assigned to the role
            return this.memberOptions
                .filter(option => this.role.users.filter(u => u.id === option.id).length === 0);
        },
        roleShouldOnlyHaveOneUser() {
            return this.onlyOneUser.filter(position => position.id === this.role.position_id).length > 0;
        },
        spaceAvailable() {
            return !this.roleShouldOnlyHaveOneUser || this.role.users.length === 0;
        },
        addUserForm() {
            return this.$tools.generator.form.newForm()
                .withGroup(this.$tools.generator.group.newGroup()
                    .withField(
                        this.$tools.generator.field.select('user_id')
                            .label('New Post Holder')
                            .hint('Who do you want to add to the role of ' + this.role.data.roleName ? this.role.data.roleName : this.role.position.data.name)
                            .setOptions(this.filteredMemberOptions)
                            .nullLabel('-- Please select a member --', null)
                            .required(true)
                            .value(null)
                    )
                )
        }
    }
}
</script>

<style scoped>

</style>
