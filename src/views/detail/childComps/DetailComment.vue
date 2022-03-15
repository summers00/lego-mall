<template>
  <!-- 一定要加判断--评论信息内容不为空显示 -->
  <div class="comment" v-if="Object.keys(comment).length !== 0">
    <div class="topbar">
      <span class="title">用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="commentInfo">
      <div class="user">
        <img :src="comment.user.avatar" />
        <span class="uname">{{ comment.user.uname }}</span>
      </div>
      <p class="content">{{ comment.content }}</p>
      <div class="info-other">
        <span class="time">{{ date }}</span>
        <span class="style">{{ comment.style }}</span>
      </div>
      <span v-for="(item, index) in comment.images" :key="index" class="images">
        <img :src="item" />
      </span>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  props: {
    comment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    date() {
      // 时间戳转为日期
      const date = new Date(this.comment.created * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
};
</script>

<style scoped>
.comment {
  padding: 5px 15px;
  border-bottom: 5px solid #f2f5f8;
  font-size: 14px;
  color: #333;
}
.topbar {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
}
.more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}
.user {
  padding: 10px 0;
}
/* 用户头像 */
.user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* 图片于文字居中对齐 */
  vertical-align: middle;
}
/* 用户名 */
.user .uname {
  margin-left: 8px;
}
/* 评论内容 */
.content {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-other {
  margin-top: 10px;
  font-size: 12px;
  color: #999;
}
.info-other .style {
  margin-left: 8px;
}
/* 评论图 */
.images img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>