import Vue from 'vue';
import App from './login.vue';
import elementUI from 'element-ui';

import '@/style/reset.css';

// element-ui默认样式库
import 'element-ui/lib/theme-chalk/index.css';
import { Component } from 'vue-property-decorator';

Vue.config.productionTip = false;
Vue.use(elementUI);
Vue.prototype.$eventBus = new Vue();

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
]);

new Vue({
    render: (h) => h(App),
}).$mount('#app');

