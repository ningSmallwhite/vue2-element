import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入小仓库
import home from './home'
import abc from './Abc'
export default new Vuex.Store({
  // state： 存储数据的地方
  state: {
    count: 1
  },
  // getters：可以理解为计算属性，用于简化仓库，让组件获取仓库数据更加方便
  getters: {
  },
  // 修改state的唯一手段
  mutations: {
    ADD(start){
      start.count++
    }
  },
  //处理action可以书写自己的业务逻辑，也可以处理异步
  actions: {
    add({commit}){
      commit('ADD')
    }
  },
  modules: {
    home,
    abc
  }
})
