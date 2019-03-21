export default {
  state: {
    example: true
  },
  mutations: {
    setExample(state, payload){
      state.example = payload;
    }
  },
  actions: {
    setExample({ commit }, payload) {
      commit("setExample", payload);
    }
  },
  getters: {
    example(state){
      return state.example;
    }
  }
};