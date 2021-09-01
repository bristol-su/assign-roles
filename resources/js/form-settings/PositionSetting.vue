<template>
    <div>
        <p-dynamic-form v-model="settings" :schema="form">

        </p-dynamic-form>
    </div>
</template>

<script>
export default {
    name: "PositionSetting",
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
            settings: {
                allowed: [],
                only_one_role: [],
                only_one_user: [],
                user_only_has_one_role: []
            }
        }
    },

    mounted() {
        if (this.value !== undefined) {
            if (this.value.hasOwnProperty('allowed')) {
                this.settings.allowed = this.value.allowed;
            }
            if (this.value.hasOwnProperty('only_one_role')) {
                this.settings.only_one_role = this.value.only_one_role;
            }
            if (this.value.hasOwnProperty('only_one_user')) {
                this.settings.only_one_user = this.value.only_one_user;
            }
            if (this.value.hasOwnProperty('user_only_has_one_role')) {
                this.settings.user_only_has_one_role = this.value.user_only_has_one_role;
            }
        }
    },

    watch: {
        settings: {
            deep: true,
            handler: function () {
                this.updateValues();
            }
        }
    },

    methods: {
        updateValues() {
            this.$emit('input', {
                logic_id: this.logicId,
                allowed: this.settings.allowed,
                only_one_role: this.settings.only_one_role,
                only_one_user: this.settings.only_one_user,
                user_only_has_one_role: this.settings.user_only_has_one_role
            })
        }
    },

    computed: {
        form() {
            let positionOptions = this.positions.map(position => {
                return {id: position.id, text: position.data.name}
            });
            return this.$tools.generator.form.newForm()
                .withGroup(this.$tools.generator.group.newGroup()
                    .withField(this.$tools.generator.field.checkList('allowed')
                        .label('Allowed Positions')
                        .hint('These positions are able to be assigned to committee members')
                        .setOptions(positionOptions)
                    )
                    .withField(this.$tools.generator.field.checkList('only_one_role')
                        .label('Only one role')
                        .hint('These positions may only belong to a single role. If used, a new role cannot be created with this position.')
                        .setOptions(positionOptions)
                    )
                    .withField(this.$tools.generator.field.checkList('only_one_user')
                        .label('Only one user')
                        .hint('Roles with these positions may only have a single user assigned to them. Once one user is assigned, another cannot be.')
                        .setOptions(positionOptions)
                    )
                    .withField(this.$tools.generator.field.checkList('user_only_has_one_role')
                        .label('User only has one role')
                        .hint('A user assigned to a role with this position cannot be assigned to anything else.')
                        .setOptions(positionOptions)
                    )
                )
                .generate()
                .asJson()
        }
    }
}
</script>

<style scoped>

</style>
