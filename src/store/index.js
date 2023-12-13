import Vue from 'vue'
import Vuex from 'vuex'

import footer from './footer';
import reviews from './reviews';
import user from './user';
import trends from './trends';
import articles from './articles';
import locations from './locations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    footer,
    reviews,
    user,
    trends,
    articles,
    locations,
  }
})
