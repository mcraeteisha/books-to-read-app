require('./bootstrap');

import App from './vue/app'
import * as Vue from 'vue'


const app = new Vue({
    el: '#app',
    components: { App }
});