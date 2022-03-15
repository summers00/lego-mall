<template>
  <div class="profile-service-list">
    <div class="cart list-item">
      <span>我的购物车</span>
    </div>
    <div class="app list-item">
      <span>下载APP</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style coped>
.profile-service-list .list-item {
  position: relative;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  margin-left: 50px;
  font-size: 15px;
  color: #222222;
}
.profile-service-list .list-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -30px;
  bottom: 0;
  margin: auto;
  width: 23px;
  height: 23px;
  background-size: 100% 100%;
  background-image: url("~assets/img/profile/cart.svg");
}
.profile-service-list .list-item.app::before {
  background-image: url("~assets/img/profile/pointer.svg");
}
</style>