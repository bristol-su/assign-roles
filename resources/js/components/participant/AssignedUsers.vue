<template>
    <div>
        <p-basic-tags :tags="userNames" @delete="removeUserFromRole">

        </p-basic-tags>
    </div>
</template>

<script>
    export default {
        name: "AssignedUsers",

        props: {
            users: {
                required: true,
                type: Array
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
            removeUserFromRole(index) {
                this.$ui.confirm.delete(
                    'Removing ' + this.userNames[index],
                    'Are you sure you want to remove ' + this.userNames[index] + ' from the position of ' + (this.role.data.role_name ? this.role.data.role_name : this.role.position.data.name) + '?'
                )
                    .then(() => {
                        this.$http.delete('role/' + this.role.id + '/user/' + this.users[index].id)
                            .then(response => {
                                this.$notify.success('User removed from role')
                                this.$emit('user-deleted', this.users[index].id);
                            })
                            .catch(error => this.$notify.alert('User could not be removed from role: ' + error.message))
                    });

            }
        },

        computed: {
            userNames() {
                return this.users.map(user => user.data.preferred_name ? user.data.preferred_name : user.data.first_name + ' ' + user.data.last_name);
            }
        }
    }
</script>

<style scoped>

</style>
