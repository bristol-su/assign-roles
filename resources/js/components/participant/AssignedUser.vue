<template>
    <div>
        {{user.data.first_name}} {{user.data.last_name}} <b-button size="sm" variant="outline-danger" @click="deleteUser"><i class="fa fa-trash"></i></b-button>
    </div>
</template>

<script>
    export default {
        name: "AssignedUser",

        props: {
            user: {
                required: true,
                type: Object
            },
            role: {
                required: true,
                type: Object
            }
        },

        data() {
            return {}
        },

        methods: {
            deleteUser() {
                this.$bvModal.msgBoxConfirm('Are you sure you want to remove this user?', {
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
                    .then(value => {
                        if(value) {
                            this.$http.delete('role/' + this.role.id + '/user/' + this.user.id)
                                .then(response => {
                                    this.$notify.success('User removed from role')
                                    window.location.reload();
                                })
                                .catch(error => this.$notify.alert('User could not be removed from role: ' + error.message))
                        }
                    })
                    .catch(err => {
                        // An error occurred
                    });
            }
        },

        computed: {}
    }
</script>

<style scoped>

</style>