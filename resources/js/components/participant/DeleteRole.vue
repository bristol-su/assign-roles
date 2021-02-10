<template>
    <div>
        <b-button size="sm" variant="outline-danger" @click="deleteRole">
            <i class="fa fa-trash"></i>Delete
        </b-button>
    </div>
</template>

<script>
    export default {
        name: "DeleteRole",

        props: {
            role: {
                required: true,
                type: Object
            }
        },

        data() {
            return {}
        },

        methods: {
            deleteRole() {
                let self = this;
                if (this.role.users.length > 0) {
                    this.couldNotDeleteBox();
                } else {
                    this.deleteRoleBox()
                        .then(val => {
                            if(val) {
                                console.log(val);
                                this.$http.delete('role/' + this.role.id)
                                    .then(response => {
                                        this.$notify.success('User removed from role')
                                        self.$root.$emit('triggerRefresh');
                                    })
                                    .catch(error => this.$notify.alert('User could not be removed from role: ' + error.message))
                            }
                        })  
                        .catch(error => {
                            console.log(error);
                        });
                }
            },
            deleteRoleBox() {
                return this.$bvModal.msgBoxConfirm('Are you sure you want to remove this role?', {
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
            },
            couldNotDeleteBox() {
                this.$bvModal.msgBoxOk('Could not delete the role. Please remove users from this role first.', {
                    title: 'Could not delete role',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'info',
                    headerClass: 'p-2 border-bottom-0',
                    footerClass: 'p-2 border-top-0',
                    centered: true
                })
                    .then(value => {
                    })
                    .catch(err => {
                        // An error occurred
                    })
            }
        },

        computed: {}
    }
</script>

<style scoped>

</style>