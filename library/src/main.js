// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuesax from 'vuesax'
import 'vuetify/dist/vuetify.min.css'
import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.use(Vuesax)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
