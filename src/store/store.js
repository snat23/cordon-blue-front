import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedLocation: [],
  },
  mutations: {
    ADD_SELECTED_LOCATION(state, location) {
      state.selectedLocation = location;
    },
    CLEAR_SELECTED_LOCATION(state) {
      state.selectedLocation = [];
    },
  },
  actions: {
    changeSelectedLocation({ commit }, location) {
      commit("ADD_SELECTED_LOCATION", location);
    },
    clearSelectedLocation({ commit }) {
      commit("CLEAR_SELECTED_LOCATION");
    },
  },
});
