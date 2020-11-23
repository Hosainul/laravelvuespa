import Vue from 'vue'
require('./bootstrap');
import routes from './router/index'
import { HasError, AlertError } from 'vform'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
var toastrConfigs = {
    position: 'top right',
    showDuration: 500,
    timeOut: 4000,
    progressBar: true,
    closeBUtton: true,
    showMethod: 'fadein',
    hideMethod: 'fadeout'
}
Vue.use(CxltToastr, toastrConfigs)

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

window.Vue = require('vue');

Vue.component('app-header', require('./components/Header.vue').default);

const app = new Vue({
    el: '#app',
    router: routes,
});
