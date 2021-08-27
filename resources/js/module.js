import Vue from 'vue';
import AWN from "awesome-notifications";
import Toolkit from '@bristol-su/frontend-toolkit';
import RoleTable from './components/participant/RoleTable';
import AddRole from './components/participant/AddRole';

Vue.use(Toolkit);
Vue.prototype.$notify = new AWN({position: 'top-right'});

let vue = new Vue({
    el: '#assign-roles-root',

    components: {
        RoleTable, AddRole
    }
});
