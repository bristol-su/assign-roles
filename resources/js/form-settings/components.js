import PositionSettings from './PositionSettings';
import RequiredPositions from './RequiredPositions';

import Toolkit from '@bristol-su/frontend-toolkit';
import Vue from 'vue';

Vue.use(Toolkit);

Vue.component('p-assign-roles-position-settings', PositionSettings);
Vue.component('p-assign-roles-required-positions', RequiredPositions);
