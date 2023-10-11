// home模块的小仓库
import { reqCategoryList } from '../../api/index'
const state = {
  categoryList: []
};
const mutations = {
  dataList(start, categoryList) {
    start.categoryList = categoryList.data
  }
};
const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    // console.log(result, "result")
    if (result.status == 200) {
      // console.log(result.data,"data")
      commit("dataList", result.data)
    }else {
      console.log("错误")
    }
  }
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters
}