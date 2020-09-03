
const mutations = {
  SET_USER_INFO (state, resp) {
    state.user = resp
  },
  SET_CART_NUMBER (state, num) {
    state.cartsNumber = num
  }

}

export default mutations
