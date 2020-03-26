<template>
    <div>
        <b-form-checkbox-group
            :checked="value"
            @input="$emit('input', $event)"
            :options="options"
            :name="checkboxName"
            stacked
        ></b-form-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: "PositionSelect",

        props: {
            positions: {
                type: Array,
                required: true
            },
            value: {
                type: Array,
                required: false,
                default: function() {
                    return [];
                }
            },
            checkboxName: {
                type: String,
                required: true
            }
        },

        data() {
            return {}
        },

        methods: {},

        computed: {
            options() {
                return this.positions.map(position => {
                    return {value: position.id, text: position.data.name}
                })
            }
        }
    }
</script>

<style scoped>

</style>