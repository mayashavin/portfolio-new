import { configure } from '@storybook/vue';
import '../plugins/cloudinary'
import Icon from '../components/Icon'

import Vue from 'vue';

// Register global components.
Vue.component('Icon', Icon);

configure(require.context('../stories', true, /\.stories\.js$/), module);
