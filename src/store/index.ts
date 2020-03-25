import Vue from 'vue';
import Vuex from 'vuex';
// import permission from './modules/permission'
import user from './modules/user';
import menus from './modules/menus';
import getters from './getters';

Vue.use(Vuex);
// vuex 主要是负责通信的

const store = new Vuex.Store({
  modules: {
    // permission,
    user,
    menus,
  },
  getters,
});

export default store;

