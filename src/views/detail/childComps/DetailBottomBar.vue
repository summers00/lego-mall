<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="item-icon">
        <i class="icon collect"></i>
        <div class="text">收藏</div>
      </div>
      <div class="item-icon">
        <i class="icon shop"></i>
        <div class="text">店铺</div>
      </div>

    </div>
    <div class="right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="sell">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  /* 位置不变 */
  position: relative;
  /* 底部距离 */
  bottom: 49px;
  display: flex;
  text-align: center;
  font-size: 14px;
}
.left {
  flex: 1;
  display: flex;
}
.right {
  flex: 2;
  display: flex;
}
.item-icon {
  flex: 1;
}
.item-icon .icon {
  display: block;
  width: 22px;
  height: 22px;
  /* 背景图位置:水平0 垂直从0开始,高度占盒子100% */
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
  margin: 5px auto 1px;
}
.item-icon .shop {
  background-position: 0 -99px;
}
.item-icon .server {
  background-position: 0 -53px;
}

.right {
  line-height: 49px;
  color: #fff;
}
.right .cart {
  flex: 1;
  background-color: #f38e1a;
}
.right .sell {
  flex: 1;
  background-color: #b4292e;
}
</style>