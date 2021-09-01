<template>
    <div>
        <p-dynamic-form v-model="required" :schema="form">

        </p-dynamic-form>
    </div>
</template>

<script>
    export default {
        name: "RequiredPosition",
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
                required: {},
            }
        },

         mounted() {
            if(this.value !== undefined) {
                if(this.value.hasOwnProperty('required')) {
                    this.required = this.value.required;
                }
            }
         },

        watch: {
            required: {
                deep: true,
                handler: function() {
                    this.updateValues();
                }
            },
        },

        methods: {
            updateValues() {
                this.$emit('input', {
                    logic_id: this.logicId,
                    required: this.required.required
                })
            }
        },
        computed: {
            form() {
                return this.$tools.generator.form.newForm()
                    .withGroup(this.$tools.generator.group.newGroup()
                        .withField(this.$tools.generator.field.checkList('required')
                            .value([])
                            .label('Required Positions')
                            .hint('These positions need to be filled to mark the module as complete')
                            .setOptions(this.positions.map(position => {
                                return {id: position.id, text: position.data.name}
                            }))
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
