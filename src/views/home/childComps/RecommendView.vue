<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommendList" :key="item.title">
      <img :src="item.image" :alt="item.title">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendList: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 13px;
  border-bottom: 8px solid #eee;
  font-size: 12px;
}
.recommend-item {
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
}
.recommend-item img {
  width: 36px;
  height: 36px;
  margin: 13px auto 8px auto;
}
</style>