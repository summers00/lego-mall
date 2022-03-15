<template>
  <div id="profile">
    <!-- 个人中心导航 -->
    <profile-nav-bar />
    <!-- 登录 -->
    <profile-login />
    <!-- 账户 -->
    <div class="account">
      <div class="account-item">
        <span class="number">0.00</span>元
        <div class="text">我的余额</div>
      </div>
      <div class="account-item discount">
        <span class="number">0</span>个
        <div class="text">我的优惠</div>
      </div>
      <div class="account-item">
        <span class="number">0</span>分
        <div class="text">我的积分</div>
      </div>
    </div>
    <!-- 个人列表 -->
    <profile-list />

    <profile-service-list />
  </div>
</template>

<script>
import ProfileNavBar from "./childComps/ProfileNavBar";
import ProfileLogin from "./childComps/ProfileLogin";
import ProfileList from './childComps/ProfileList'
import ProfileServiceList from './childComps/ProfileServiceList'
export default {
  components: {
    ProfileNavBar,
    ProfileLogin,
    ProfileList,
    ProfileServiceList
  },
};
</script>

<style scoped>
/* 账户 */
.account {
  display: flex;
  justify-content: space-around;
  border-bottom: 5px solid #f2f5f8;
  text-align: center;
  font-size: 13px;
}
.account-item {
  padding: 20px 30px;
}
/* 优惠 */
.discount {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.number {
  font-size: 20px;
  font-weight: bold;
  color: #ffa13e;
}
.text {
  margin-top: 5px;
}
</style>