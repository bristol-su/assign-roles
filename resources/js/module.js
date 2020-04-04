import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import http from '@bristol-su/http-client';
import AWN from "awesome-notifications";

import RoleTable from './components/participant/RoleTable';
import AddRole from './components/participant/AddRole';

Vue.prototype.$http = http;
Vue.prototype.$notify = new AWN({position: 'top-right'});
Vue.use(BootstrapVue);

let vue = new Vue({
    el: '#assign-roles-root',
    
    components: {
        RoleTable, AddRole
    }
});