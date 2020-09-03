const actions = {
  // 登陆
  login({ commit }, params) {
    commit('SET_USER_INFO', params)
    commit('SET_CART_NUMBER', 88)
  }
}

export default actions