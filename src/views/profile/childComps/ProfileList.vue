<template>
  <div class="profile-list">
    <div class="info list-item">
      <span>我的消息</span>
    </div>
    <div class="shop list-item">
      <span>积分商城</span>
    </div>
    <div class="member list-item">
      <span>会员卡</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.profile-list {
  border-bottom: 5px solid #f2f5f8;
}
.profile-list .list-item {
    position: relative;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    margin-left: 50px;
    font-size: 15px;
    color: #222222;
}
.profile-list div.member {
  border: none;
}

.profile-list .list-item::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: -30px;
      width: 23px;
      height: 23px;
      background-size: 100% 100%;
      background-image: url("~assets/img/profile/message.svg");
    }
.profile-list .list-item.shop::before {
    background-image: url("~assets/img/profile/shopping.svg");
  }
.profile-list .list-item.member::before {
    background-image: url("~assets/img/profile/vip.svg");
  }
</style>