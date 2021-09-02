<template>
    <div>
        <p-form-padding>
            <p-dynamic-form :schema="form" v-model="formData">
            </p-dynamic-form>

            <p-button variant="primary" @click="createRole">
                Add Role
            </p-button>
        </p-form-padding>
    </div>
</template>

<script>
import ProvidesUsers from './ProvidesUsers';

export default {
    name: "AddRole",
    mixins: [ProvidesUsers],
    props: {
        positions: {
            required: true,
            type: Array
        },
        onlyOneUser: {
            required: true,
            type: Array
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
            this.$http.post('/role', {
                position_id: this.formData.position_id,
                role_name: (this.formData.role_name ? this.formData.role_name : this.getPositionName(this.formData.position_id)),
                email: this.formData.role_email ? this.formData.role_email : null
            })
                .then(response => {
                    this.$notify.success('Role created');
                    this.$emit('add-role', response.data);
                    if(this.formData.members) {
                        (Array.isArray(this.formData.members) ? this.formData.members : [this.formData.members]).forEach(memberId => {
                            this.$http.patch('role/' + response.data.id + '/user/' + memberId)
                                .then(response => {

                                })
                                .catch(error => this.$notify.alert('User could not be assigned to role: ' + error.message));
                        })
                    }
                })
                .catch(error => {
                    this.$notify.alert('Could not create the role: ' + error.message)
                });
        }
    },

    computed: {
        positionOptions() {
            return this.positions.map(position => {
                return {id: position.id, value: position.data.name}
            })
        },
        form() {
            return this.$tools.generator.form.newForm('Add a Role')
                .withGroup(this.$tools.generator.group.newGroup()
                    .withField(
                        this.$tools.generator.field.select('position_id')
                            .label('Position Type')
                            .hint('What type of role is this?')
                            .setOptions(this.positionOptions)
                            .nullLabel('-- Please select an option --', null)
                            .required(true)
                    )
                    .withField(
                        this.$tools.generator.field.text('role_name')
                            .label('Role Title')
                            .hint('What should the role be called? e.g. President')
                            .required(false)
                    )
                    .withField(
                        this.$tools.generator.field.text('role_email')
                            .label('Role Email Address')
                            .tooltip('Do you have a generic email address that\'s not a users email address for this role that we may need to contact?')
                            .hint('(Optional)')
                            .required(false)
                    )
                    .withField(
                        this.$tools.generator.field.select('members')
                            .label('Members')
                            .tooltip('Who should we assign this role to?')
                            .hint('(Optional)')
                            .setOptions(this.memberOptions)
                            .nullLabel('-- Please select a society member --', null)
                            .required(false)
                            .multiple(!this.formData.position_id || this.onlyOneUser.filter(o => o.id === this.formData.position_id).length === 0)
                            .value([])
                    )
                )
        },
        position() {
            if(this.formData.position_id) {
                let position = this.positions.filter(p => p.id === this.formData.position_id);
                return (position ? position[0] : position)
            }
            return null;
        }
    }
}
</script>

<style scoped>

</style>
