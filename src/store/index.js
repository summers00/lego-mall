import Vue from "vue";
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  cartList: [] //购物车数据
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})