<template>
    <div style="width: 100%">
        <b-card no-body>
            <b-tabs card pills vertical>
                <b-tab :key="logicId" :title="logicName(logicId)" v-for="logicId in selectedLogic">
                    <required-position :logicId="logicId" :positions="positions" :value="getValue(logicId)"
                                      @input="setValue(logicId, $event)"></required-position>
                </b-tab>
                <b-tab title="Add Logic">
                    <b-card-text>
                        <b-form-select :options="logicSelectOptions" v-model="logicToAdd"></b-form-select>
                        <b-button @click="addLogic" size="sm" v-if="logicToAdd !== null" variant="success">Add
                        </b-button>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
    import {abstractField} from "vue-form-generator";
    import RequiredPosition from './RequiredPosition';
    
    export default {
        name: "RequiredPositions",
        components: {RequiredPosition},
        mixins: [abstractField],

        props: {},

        data() {
            return {
                newlySelectedLogic: [],
                logicToAdd: null
            }
        },

        methods: {
            logicName(id) {
                let logic = this.logic.filter(l => l.id === id);
                if (logic.length > 0) {
                    return logic[0].name;
                }
                return 'Logic #' + id;
            },
            addLogic() {
                this.newlySelectedLogic.push(this.logicToAdd);
                this.logicToAdd = null;
            },
            getValue(logicId) {
                this.checkValueExists();
                if (this.value.filter(v => v.logic_id === logicId).length > 0) {
                    return this.value.filter(v => v.logic_id === logicId)[0];
                }
                return {};
            },
            setValue(logicId, val) {
                this.checkValueExists();
                if (this.newlySelectedLogic.indexOf(logicId) !== -1) {
                    this.newlySelectedLogic.splice(this.newlySelectedLogic.indexOf(logicId), 1);
                }
                if (this.value.filter(v => v.logic_id === logicId).length > 0) {
                    this.value[this.value.indexOf(this.value.filter(v => v.logic_id === logicId)[0])] = val;
                } else {
                    this.value.push(val);
                }
            },
            checkValueExists() {
                if (this.value === undefined) {
                    this.value = [];
                }
            }
        },

        computed: {
            logic() {
                if (this.schema.logic) {
                    return this.schema.logic;
                }
                return [];
            },
            positions() {
                if (this.schema.positions) {
                    return this.schema.positions;
                }
                return [];
            },
            logicSelectOptions() {
                return this.logic.filter(l => this.selectedLogic.indexOf(l.id) === -1).map(l => {
                    return {
                        value: l.id, text: l.name
                    }
                })
            },
            selectedLogic() {
                this.checkValueExists();
                return this.value.map(v => v.logic_id).concat(this.newlySelectedLogic);
            }
        }
    }
</script>

<style scoped>

</style>