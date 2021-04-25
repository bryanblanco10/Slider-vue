import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'




Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
