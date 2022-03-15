<template>
  <!-- 使用组件tab-bar -->
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="首页">
      <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="首页">
      <span slot="title">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="icon" src="~assets/img/tabbar/shopcart.svg" alt="首页">
      <img slot="active-icon" src="~assets/img/tabbar/shopcart_active.svg" alt="首页">
      <span slot="title">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="首页">
      <img slot="active-icon" src="~assets/img/tabbar/profile_active.svg" alt="首页">
      <span slot="title">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// 导入组件
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  // 注册组件
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>