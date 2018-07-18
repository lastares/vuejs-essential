// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './directives'
import './components'
import store from './store'
import VueSweetalert2 from './plugins/vue-sweetalert2'
import Message from './plugins/message'

Vue.config.productionTip = false;
// 使用插件
Vue.use(VueSweetalert2);
Vue.use(Message);

/* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
    // 注入store
    store,
  components: { App },
  template: '<App/>'
})
