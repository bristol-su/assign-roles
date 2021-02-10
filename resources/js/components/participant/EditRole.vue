<template>
    <div>
        <b-button size="sm" v-b-modal="'edit-role-' + role.id" variant="outline-info">
            <i class="fa fa-edit"></i>Edit
        </b-button>

        <b-modal :id="'edit-role-' + role.id" ok-only ok-title="Cancel" ok-variant="danger">
            <b-form @submit.prevent="editRole">

                <b-form-group
                        description="What should the role be called?"
                        id="role-name-group"
                        label="Role Title"
                        label-for="role-name"
                >
                    <b-form-input
                            id="role-name"
                            required
                            type="text"
                            v-model="name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="role-email-group"
                        label="Generic Role Email"
                        label-for="role-email"
                        description="Is there a generic email for this role, e.g. president@society.co.uk?"
                >
                    <b-form-input
                            id="role-email"
                            type="email"
                            v-model="email"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "EditRole",

        props: {
            role: {
                required: true,
                type: Object
            }
        },

        data() {
            return {
                name: null,
                email: null
            }
        },

        created() {
            this.name = this.role.data.role_name;
            this.email = this.role.data.email;
        },

        methods: {
            editRole() {
                let self = this;
                let attributes = {};
                if (this.name !== this.role.data.role_name) {
                    attributes['role_name'] = this.name;
                }
                if (this.email !== this.role.data.email) {
                    attributes['email'] = this.email;
                }
                this.$http.patch('/role/' + this.role.id, attributes)
                    .then(response => {
                        this.$notify.success('Role updated');
                        self.$root.$emit('triggerRefresh');
                    })
                    .catch(error => this.$notify.alert('Could not update role: ' + error.message));
            },
        },

        computed: {
            positions() {
                return this.allowed.filter(position => this.positionIsAvailable(position));
            }
        }
    }
</script>

<style scoped>

</style>