<template>
    <div style="width: 100%">
        <p-tabs>
            <p-tab title="Add Logic" key="add">
                <p-select id="logic-select-options" title="Setting group" hint="The group that the position settings will apply to"
                          tooltip="The position settings control which positions can be assigned. The settings will come from the group the user is in."
                          :selectOptions="logicSelectOptions"
                          v-model="logicToAdd">
                </p-select>
                <p-button variant="secondary" @click="addLogic" v-if="logicToAdd !== null">Add</p-button>
            </p-tab>
            <p-tab :key="logicId" :title="logicName(logicId)" v-for="logicId in selectedLogic">
                <position-setting :logicId="logicId" :positions="positions" :value="getValue(logicId)"
                                  @input="setValue(logicId, $event)"></position-setting>
            </p-tab>
        </p-tabs>
    </div>
</template>

<script>
import FormInputMixin from '@bristol-su/portal-ui-kit/src/components/atomic/dynamic-form/FormInputMixin';
import PositionSetting from './PositionSetting';

export default {
    name: "PositionSettings",
    components: {PositionSetting},
    mixins: [FormInputMixin],

    props: {
        logic: {required: false, type: Array, default: () => []},
        positions: {required: false, type: Array, default: () => []},
    },

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
            if (this.dynamicValue.filter(v => v.logic_id === logicId).length > 0) {
                return this.dynamicValue.filter(v => v.logic_id === logicId)[0];
            }
            return {};
        },
        setValue(logicId, val) {
            this.checkValueExists();
            if (this.newlySelectedLogic.indexOf(logicId) !== -1) {
                this.newlySelectedLogic.splice(this.newlySelectedLogic.indexOf(logicId), 1);
            }
            if (this.dynamicValue.filter(v => v.logic_id === logicId).length > 0) {
                this.dynamicValue[this.dynamicValue.indexOf(this.dynamicValue.filter(v => v.logic_id === logicId)[0])] = val;
            } else {
                this.dynamicValue.push(val);
            }
        },
        checkValueExists() {
            if (this.dynamicValue === undefined || this.dynamicValue === null) {
                this.dynamicValue = [];
            }
        }
    },

    computed: {
        logicSelectOptions() {
            return this.logic.filter(l => this.selectedLogic.indexOf(l.id) === -1).map(l => {
                return {
                    id: l.id, value: l.name
                }
            })
        },
        selectedLogic() {
            this.checkValueExists();
            return this.dynamicValue.map(v => v.logic_id).concat(this.newlySelectedLogic);
        }
    }
}
</script>

<style scoped>

</style>
