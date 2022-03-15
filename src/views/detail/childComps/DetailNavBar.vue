<template>
  <div class="detail-navbar">
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" @click="backClick" />
      </div>
      <div slot="center" class="title">
        <span v-for="(item,index) in titles" :key="item" class="titleItem" @click="itemClick(index)"
          :class="{active:index === currentIndex}">
          {{item}}
        </span>

      </div>
    </nav-bar>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  components: { NavBar, },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    itemClick(index) {
      this.currentIndex = index
      this.$emit('navClick', index)
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}
.titleItem {
  flex: 1;
  font-size: 14px;
}
.back {
  margin-top: 5px;
}
.active {
  color: var(--color-high-text);
}
</style>