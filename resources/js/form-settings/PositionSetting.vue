<template>
    <div>
        <b-card
                header="Allowed Positions"
                header-tag="header"
                footer-tag="small"
                footer="These positions may be assigned"
        >
            <position-select :positions="positions" v-model="allowed" checkbox-name="allowed"></position-select>
        </b-card>
        <b-card
                header="Only one role"
                header-tag="header"
                footer-tag="small"
                footer="These positions may only belong to a single role. If used, a new role cannot be created with this position."
        >
            <position-select :positions="positions" v-model="only_one_role" checkbox-name="only-one-role"></position-select>
        </b-card>
        <b-card
                header="Only one user"
                header-tag="header"
                footer-tag="small"
                footer="Roles with these positions may only have a single user assigned to them. Once one user is assigned, another cannot be."
        >
            <position-select :positions="positions" v-model="only_one_user" checkbox-name="only-one-user"></position-select>
        </b-card>
        <b-card
                header="User only has one role"
                header-tag="header"
                footer-tag="small"
                footer="A user assigned to a role with this position cannot be assigned to anything else"
        >
            <position-select :positions="positions" v-model="user_only_has_one_role" checkbox-name="user-only-has-one-role"></position-select>
        </b-card>
    </div>
</template>

<script>
    import PositionSelect from './PositionSelect';
    export default {
        name: "PositionSetting",
        components: {PositionSelect},
        props: {
            positions: {
                type: Array,
                required: false,
                default: function () {
                    return [];
                }
            },
            value: {
                required: false,
                type: Object,
                default() {
                    return {};
                }
            },
            logicId: {
                required: true,
                type: Number
            }
        },

        data() {
            return {
                allowed: [],
                only_one_role: [],
                only_one_user: [],
                user_only_has_one_role: []
            }
        },

         mounted() {
            if(this.value !== undefined) {
                if(this.value.hasOwnProperty('allowed')) {
                    this.allowed = this.value.allowed;
                }
                if(this.value.hasOwnProperty('only_one_role')) {
                    this.only_one_role = this.value.only_one_role;
                }
                if(this.value.hasOwnProperty('only_one_user')) {
                    this.only_one_user = this.value.only_one_user;
                }
                if(this.value.hasOwnProperty('user_only_has_one_role')) {
                    this.user_only_has_one_role = this.value.user_only_has_one_role;
                }
            }
         },
        
        watch: {
            allowed: {
                deep: true,
                handler: function() {
                    this.updateValues();
                }
            },
            only_one_role: {
                deep: true,
                handler: function() {
                    this.updateValues();
                }
            },
            only_one_user: {
                deep: true,
                handler: function() {
                    this.updateValues();
                }
            },
            user_only_has_one_role: {
                deep: true,
                handler: function() {
                    this.updateValues();
                }
            }
        },
        
        methods: {
            updateValues() {
                this.$emit('input', {
                    logic_id: this.logicId,
                    allowed: this.allowed,
                    only_one_role: this.only_one_role,
                    only_one_user: this.only_one_user,
                    user_only_has_one_role: this.user_only_has_one_role
                })
            }
        },
    }
</script>

<style scoped>

</style>