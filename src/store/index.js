import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: 0,
    modalScreen: 0,
    selectedDeployment: 0
  },
  getters: {
    isModelShowing: state => {
      return state.modal;
    }
  },
  mutations: {
    showModal(state) {
      state.modal = 1;
      state.modalScreen = 1;
    },
    hideModal(state) {
      state.modal = 0;
      state.modalScreen = 0;
    },
    changeModalScreen(state, screen) {
      state.modalScreen = screen;
    }
  },
  actions: {
    displayModal({ commit }) {
      commit("showModal");
    },
    closeModal({ commit }) {
      commit("hideModal");
    },
    updateModalScreen({ commit }, screen) {
      commit("changeModalScreen", screen);
    }
  },
  modules: {}
});
