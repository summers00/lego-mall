<template>
  <!-- 只显示一张轮播图，类名避免使用swiper -->
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in swiperList" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    swiperList: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
}
</style>