/* tslint-disable */
const user = {
  state: {
    name: '',
    userId: '',
  },

  // 使用  commit('SET_NAME', 'xxxxx')
  mutations: {
    setName: (state: any, name: any) => {
      state.name = name;
    },
    setUserId: (state: any, userId: any) => {
      state.userId = userId;
    },
  },

  actions: {
    setUserInfo({ commit, state }: any, data: any) {
      // console.log(state);
      commit('setName', data.name);
      commit('setUserId', data.userId);
    },

  },
};

export default user;

