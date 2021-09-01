import Vue from 'vue';
import Toolkit from '@bristol-su/frontend-toolkit';
import Roles from './components/participant/Roles';

Vue.use(Toolkit);

let vue = new Vue({
    el: '#assign-roles-root',

    components: {
        Roles
    }
});
