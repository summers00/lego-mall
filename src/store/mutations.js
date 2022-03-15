export default {
  // 不存在该商品,保存到数组
  addGoods(state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  },
  // 存在该商品,count+1
  addCount(state, payload) {
    payload.count++
  }
}