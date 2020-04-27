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
                    label="Generic Role Email"
                    label-for="role-email"
                    description="Is there a generic email for this role, e.g. president@society.co.uk?"
            >
                <b-form-input
                        id="role-email"
                        v-model="email"
                        type="email"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
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
            positionId(val) {
                if(this.role_name === null) {
                    this.role_name = this.getPositionName(val);
                }
            }
        },

        methods: {
            getPositionName(positionId) {
                if(this.positions.filter(p => p.id === positionId).length > 0) {
                    return this.positions.filter(p => p.id === positionId)[0].data.name;
                }
                return 'position #' + positionId;
            },
            createRole() {
                this.$http.post('/role', {
                    position_id: this.positionId,
                    role_name: (this.role_name === ''?null:this.role_name),
                    email: (this.email === ''?null:this.email)
                })
                    .then(response => {
                        this.$notify.success('Created the role');
                        window.location.reload();
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