export default {
  // 商品数量
  cartLength(state) {
    // 数组的长度即商品数量
    return state.cartList.length
  },
  cartList(state) {
    // 商品数组
    return state.cartList
  }
}