<template>
  <div class="cart-bottom">
    <!-- 选中按钮 -->
    <div class="check-box">
      <!-- 监听组件的点击一定加native修饰 -->
      <check-button class="check-button" @click.native="selectAll" :isChecked="isChecked" /><!-- 传是否选中的参数 -->
      <span>全选</span>
    </div>
    <div class="price">合计:￥{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  components: { CheckButton },
  name: "CartBottomBar",
  computed: {
    ...mapGetters(['cartList', 'cartLength']),
    totalPrice() {
      // 选出选中的商品的价格*数量相加
      return this.cartList.filter(item => item.checked).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      // 选中个数
      return this.cartList.filter(item => item.checked).length
    },
    isChecked() {
      if (!this.cartLength) {
        return false
      }
      // 都没选中,最后不选中,都选中了最后选中
      for (let item of this.cartList) { //取出元素
        if (!item.checked) {
          return false
        }
      }
      return true
    }
  },
  methods: {
    selectAll() {
      // 如果选中
      if (this.isChecked) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if (!this.checkLength) {
        this.$toast.show('请选中商品')
      }
    }
  }
};
</script>

<style scoped>
.cart-bottom {
  position: fixed;
  bottom: 49px;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: #eee;
}
.check-box {
  display: flex;
  width: 80px;
  height: 20px;
}
.check-button {
  position: relative;
  /* 调整顶部位置,必须用定位,否则边框和图片位置会乱 */
  top: 10px;
  /* 左右距离 */
  margin: 0 5px;
  width: 20px;
  height: 20px;
  /* 让边框和图片没有空 */
  line-height: 0;
}
.price {
  flex: 1;
}
.calculate {
  width: 100px;
  text-align: center;
  background-color: var(--color-high-text);
  color: #fff;
}
</style>