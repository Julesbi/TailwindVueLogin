import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'


createApp(App).use(store).use(router).mount('#app')



// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// import {extend,ValidationObserver, ValidationProvider} from 'vee-validate';
// import * as rules from 'vee-validate/dist/rules';


// Vue.component('ValidationObserver', ValidationObserver);
// Vue.component('ValidationProvider', ValidationProvider);

// Object.keys(rules).forEach(rule => {
//   extend(rule, rules[rule]);
// });

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')