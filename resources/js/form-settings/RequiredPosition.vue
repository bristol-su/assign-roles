<template>
    <div>
        <position-select :positions="positions" v-model="required" checkbox-name="required"></position-select>
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
                required: [],
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
                    required: this.required
                })
            }
        },
    }
</script>

<style scoped>

</style>