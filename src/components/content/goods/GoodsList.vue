<template>
  <div class="goods">
    <goods-list-item
      v-for="(item,index) in goods"
      :key="index"
      :goods-item="item"
    />

  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  /* 子元素是否换行 */
  flex-wrap: wrap;
  /* 子元素排列方式：平均分配剩余空间 */
  justify-content: space-around;
}
</style>