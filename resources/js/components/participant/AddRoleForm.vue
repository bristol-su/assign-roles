<template>
    <div>
        <b-form @submit.prevent="createRole">
            <b-form-group
                    id="position-id-group"
                    label="Position Type"
                    label-for="position-id"
                    description="What type of role is this?"
            >
                <b-form-select v-model="positionId" :options="positionOptions" required>
                    <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </b-form-select>
            </b-form-group>

            <b-form-group
                    id="role-name-group"
                    label="Role Title"
                    label-for="role-name"
                    description="What should the role be called?"
            >
                <b-form-input
                        id="role-name"
                        v-model="role_name"
                        type="text"
                        required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                    id="role-email-group"
                    label="Role Email Address"
                    label-for="role-email"
                    description="(Optional) Do you have a generic email address that's not a users email address for this role that we may need to contact?"
            >
                <b-form-input
                        id="role-email"
                        v-model="email"
                        type="email"
                        placeholder="president@society.co.uk"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Add Role</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: "AddRoleForm",

        props: {
            positions: {
                required: true,
                type: Array
            }
        },


        data() {
            return {
                positionId: null,
                role_name: null,
                email: null
            }
        },

        watch: {
            positionId(newVal, oldVal) {
                // If role name is empty or hasn't been changed then assign Position Name
                return ! this.role_name || this.role_name === this.getPositionName(oldVal) ? this.role_name = this.getPositionName(newVal) : '';
            },
        },

        methods: {
            getPositionName(positionId) {
                if(this.positions.filter(p => p.id === positionId).length > 0) {
                    return this.positions.filter(p => p.id === positionId)[0].data.name;
                }
                return 'position #' + positionId;
            },
            createRole() {
                let self = this;

                this.$http.post('/role', {
                    position_id: this.positionId,
                    role_name: (this.role_name === ''?null:this.role_name),
                    email: (this.email === ''?null:this.email)
                })
                    .then(response => {
                        this.$bvModal.msgBoxConfirm('Would you like to add a user to the role?', {
                            title: 'Confirmation',
                            size: 'sm',
                            buttonSize: 'sm',
                            okTitle: 'YES',
                            cancelTitle: 'NO',
                            footerClass: 'p-2',
                            hideHeaderClose: true,
                            centered: true
                        })
                            .then(value => {
                                if(value === true) {
                                    // Refresh Table and Trigger other Modal:
                                    self.$root.$emit('triggerRefresh', response.data.id);
                                    this.$bvModal.hide('add-role');
                                    return;
                                }
                                // Refresh Page:
                                self.$root.$emit('triggerRefresh');
                                this.$notify.success('Created the role');
                                this.$bvModal.hide('add-role');
                            })
                            .catch(() => {})
                    })
                    .catch(error => {
                        this.$notify.alert('Could not create the role: ' + error.message)
                    });
            },
        },

        computed: {
            positionOptions() {
                return this.positions.map(position => {
                    return {value: position.id, text: position.data.name}
                })
            }
        }
    }
</script>

<style scoped>

</style>