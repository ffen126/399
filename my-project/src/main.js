// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "../static/public/file/problem-list.css";
import "../static/public/file/problem-create.css";
import "../static/public/file/problem-page(description).css";
import "../static/public/file/leader-board.css";
import locale from 'element-ui/lib/locale/lang/en'
import store from './store/index'
Vue.use(VueAxios,axios)
Vue.config.productionTip = false
Vue.use(ElementUI, {locale});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
