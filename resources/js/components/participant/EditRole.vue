<template>
    <div>
        <p-form-padding>
            <p-dynamic-form :schema="form" v-model="formData">
            </p-dynamic-form>

            <p-button variant="primary" @click="createRole">
                Update Role
            </p-button>
        </p-form-padding>
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

    data() {
        return {
            formData: {}
        }
    },

    methods: {
        getPositionName(positionId) {
            if (this.positions.filter(p => p.id === positionId).length > 0) {
                return this.positions.filter(p => p.id === positionId)[0].data.name;
            }
            return 'position #' + positionId;
        },
        createRole() {
            this.$http.patch('/role/' + this.role.id, {
                position_id: this.formData.position_id,
                role_name: (this.formData.role_name ? this.formData.role_name : this.getPositionName(this.formData.position_id)),
                email: this.formData.role_email ? this.formData.role_email : null
            })
                .then(response => {
                    this.$notify.success('Role updated');
                    let role = _.cloneDeep(this.role);
                    role.data = response.data;
                    this.$emit('updated-role', role);
                })
                .catch(error => {
                    this.$notify.alert('Could not update the role: ' + error.message)
                });
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
                        this.$tools.generator.field.text('role_name')
                            .label('Role Title')
                            .hint('What should the role be called? e.g. President')
                            .required(false)
                            .value(role.name)
                    )
                    .withField(
                        this.$tools.generator.field.text('role_email')
                            .label('Role Email Address')
                            .hint('Do you have a generic email address that\'s not a users email address for this role that we may need to contact?')
                            .required(false)
                            .value(role.email)
                    )
                ).generate()
                .asJson();
        }
    }
}
</script>

<style scoped>

</style>
