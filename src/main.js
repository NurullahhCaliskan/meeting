import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import elementUI from './plugins/elementUI';
import vuelidate from './plugins/vuelidate';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  vuelidate,
  elementUI,
  render: h => h(App)
}).$mount('#app')
