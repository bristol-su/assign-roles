<template>
    <div>
        <p-api-form :schema="form" ref="form" @submit="updateRole" button-text="Update Role" :busy="$isLoading('edit-role-' + role.id)" busy-text="Updating Role">

        </p-api-form>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: "EditRole",
    props: {
        positions: {
            required: true,
            type: Array
        },
        role: {
            required: true,
            type: Object
        }
    },

    methods: {
        getPositionName(positionId) {
            if (this.positions.filter(p => p.id === positionId).length > 0) {
                return this.positions.filter(p => p.id === positionId)[0].data.name;
            }
            return 'position #' + positionId;
        },
        updateRole(formData) {
            let data = {};
            if(formData.hasOwnProperty('edit_role_email')) {
                data.email = formData.edit_role_email;
            }
            if(formData.hasOwnProperty('edit_role_name')) {
                data.role_name = formData.edit_role_name;
            }
            this.$http.patch('/role/' + this.role.id, data, {name: 'edit-role-' + this.role.id})
                .then(response => {
                    this.$notify.success('Role updated');
                    let role = _.cloneDeep(this.role);
                    role.data = response.data;
                    this.$refs.form.reset();
                    this.$emit('updated-role', role);
                })
                .catch(error => {
                    this.$notify.alert('Could not update the role: ' + error.message)
                });
        }
    },
    watch: {
        role() {
            this.formData = {};
        }
    },
    computed: {
        roleData()
        {
            return {
                name: this.role.data.role_name,
                email: this.role.data.email
            };
        },
        form() {
            let role = this.roleData;

            return this.$tools.generator.form.newForm('Edit a Role')
                .withGroup(this.$tools.generator.group.newGroup()
                    .withField(
                        this.$tools.generator.field.text('edit_role_name')
                            .label('Role Title')
                            .hint('What should the role be called? e.g. President')
                            .required(false)
                            .value(role.name)
                            .errorKey('role_name')
                    )
                    .withField(
                        this.$tools.generator.field.text('edit_role_email')
                            .label('Role Email Address')
                            .hint('Do you have a generic email address that\'s not a users email address for this role that we may need to contact?')
                            .required(false)
                            .value(role.email)
                            .errorKey('email')
                    )
                ).generate()
                .asJson();
        }
    }
}
</script>

<style scoped>

</style>
