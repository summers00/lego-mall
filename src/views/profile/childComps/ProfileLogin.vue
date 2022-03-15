<template>
  <div class="profile-login">
    <img src="~assets/img/profile/avatar.svg" alt="" />
    <div class="text">
      <div>登录/注册</div>
      <div class="phone">暂无绑定手机号</div>
    </div>
    <div class="arrow-right"></div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.profile-login {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: var(--color-tint);
  color: #fff;
}
/* 头像 */
.profile-login img {
  width: 70px;
  margin-right: 10px;
}
.profile-login .text {
  flex: 1;
}
.profile-login .phone {
  margin-top: 3px;
  color: #dfdfdf;
  font-size: 12px;
}
.arrow-right {
  width: 8px;
  height: 8px;
  border-left: 2px solid #dfdfdf;
  border-top: 2px solid #dfdfdf;
  transform: rotate(135deg);
  margin-right: 15px;
}
</style>