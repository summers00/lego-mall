<template>
  <swiper>
    <swiper-item
      v-for="item in bannerList"
      :key="item.title"
    >
      <img
        :src="item.image"
        :alt="item.title"
        @load="imgLoad"
      >
    </swiper-item>
  </swiper>
</template>

<script>
// 引入轮播图组件
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  // 注册组件
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    bannerList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      imgLength: 0

    }
  },
  methods: {
    imgLoad() {
      if (++this.imgLength === this.bannerList.length) {
        // 每加载一次记录加载个数，和数组中个数相同说明加载完
        this.$emit('imgLoad')
        console.log('图片加载');
      }

    }
  }
};
</script>

<style>
</style>