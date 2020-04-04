<template>
    <div>
        <div style="text-align: right;" v-if="positions.length > 0">
            <b-button size="lg" variant="outline-info" v-b-modal.add-role>Add Role</b-button>
        </div>
        
        <b-modal id="add-role" ok-only ok-title="Cancel" ok-variant="danger">
            <add-role-form :positions="positions">
                
            </add-role-form>
        </b-modal>
    </div>
</template>

<script>
    import AddRoleForm from './AddRoleForm';
    export default {
        name: "AddRole",
        components: {AddRoleForm},
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
            }
        },
        
        data() {
            return {
                roles: []
            }
        },

        created() {
            this.$http.get('role')
                .then(response => this.roles = response.data)
                .catch(error => this.$notify.alert('Could not load roles: ' + error.message));
        },
        
        methods: {
            positionIsAvailable(position) {
                if(this.onlyOneRole.filter(p => p.id === position.id).length > 0) {
                    if(this.roles.filter(role => role.position_id === position.id).length > 0) {
                        return false;
                    }
                }
                return true;
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