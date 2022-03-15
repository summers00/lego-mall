export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => { //返回promise对象,调用方法时可.then获取执行成功结果
      // 找出第一个符合条件的对象
      const oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit('addCount', oldProduct)
        resolve('商品数量+1')
      } else {
        payload.count = 1
        context.commit('addGoods', payload)
        resolve('成功加入购物车')
      }
    })
  }
}