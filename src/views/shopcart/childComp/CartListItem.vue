<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <!-- 选中按钮 -->
      <check-button :isChecked="product.checked" @click.native="checkClick" />
    </div>
    <!-- src一定要动态绑定 -->
    <div class="image"><img :src="product.img" /></div>
    <div class="goods-info">
      <div class="title">{{ product.title }}</div>
      <div class="desc">{{ product.desc }}</div>
      <div class="item-bottom">
        <span>￥{{ product.price }}</span>
        <span class="count">x{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";
export default {
  components: { CheckButton },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  }
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  width: 100%;
  padding: 5px;
  /* 不设0，装图片的盒子会被撑高 */
  font-size: 0;
  border-bottom: 1px solid #ccc;
}
/* 选中按钮 */
.item-selector {
  width: 14%;
  display: flex;
  /* 水平居中 */
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
}
.goods-info .title,
.goods-info .desc {
  /* 溢出隐藏 */
  overflow: hidden;
  /* 强制一行内显示 */
  white-space: nowrap;
  /* 溢出文字省略号显示 */
  text-overflow: ellipsis;
}

.image img {
  width: 80px;
  height: 100px;
  margin-left: 3px;
  border-radius: 3px;
}
.goods-info {
  /* 一定设置溢出隐藏，否则文字省略不起效 */
  overflow: hidden;
  padding: 5px 10px;
  color: #333;
  font-size: 17px;
}
.desc {
  margin: 15px 0;
  font-size: 13px;
  color: #777;
}
.item-bottom {
  padding-top: 8px;
  font-size: 15px;
  color: orangered;
}
.count {
  float: right;
  margin-right: 35px;
  color: #333;
}
</style>