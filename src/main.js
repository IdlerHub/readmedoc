import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./util/http";
//引入重置样式
import 'reset-css';
import { Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Pagination);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
