import Vue from 'vue';
import App from './Web.vue';
import router from './router';
import store from './store';
import elementUI from 'element-ui';

import './style/reset.css';
import Dialog from '@/components/dialog/index';

// element-ui默认样式库
import 'element-ui/lib/theme-chalk/index.css';
import { Component } from 'vue-property-decorator';

Vue.config.productionTip = false;
Vue.use(elementUI);
Vue.prototype.$eventBus = new Vue();
Vue.prototype.$dialog = Dialog;

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

