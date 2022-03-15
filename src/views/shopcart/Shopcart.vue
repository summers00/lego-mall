<template>
  <div class="shop-cart">
    <nav-bar>
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartBottomBar from "./childComp/CartBottomBar.vue";
import { mapGetters } from "vuex";
import CartList from "./childComp/CartList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Scroll,
  },
  data() {
    return {

    }
  },
  computed: {
    // 需要转换的getters内的方法
    ...mapGetters(["cartLength"]),
  }

};
</script>

<style scoped>
.shop-cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  height: 44px;
  color: #fff;
}
.content {
  height: calc(100% - 44px - 44px - 40px);
  overflow: hidden;
}
</style>