<template>
  <!-- 对象内所有属性不为空时在渲染，一定要加判断 -->
  <div class="base-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="title">{{ goodsInfo.title }}</div>
    <div class="price">
      <!-- 动态绑定样式 -->
      <span class="price-range">{{ goodsInfo.price }}</span>
      <span class="lowPrice">{{ goodsInfo.oldPrice }}</span>
      <span class="discount" v-if="goodsInfo.discount"
        :style="{ backgroundColor: goodsInfo.discountBgColor }">{{ goodsInfo.discount }}</span>
    </div>
    <div class="goods-info">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <!-- 数组中最后一个元素中的name -->
      <span>{{ goodsInfo.services[goodsInfo.services.length - 1].name }}</span>
    </div>
    <div class="services">
      <!-- 遍历数字：item in 4 取到1-4 -->
      <span v-for="index in goodsInfo.services.length - 1" :key="index">
        <!-- index-1才是数组对应索引号 -->
        <img :src="goodsInfo.services[index - 1].icon" />
        <span>{{ goodsInfo.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.title {
  color: #222;
}
.price {
  margin: 10px 0;
}
.price-range {
  color: var(--color-high-text);
  font-size: 24px;
}
.lowPrice {
  margin: 0 5px;
  font-size: 12px;
  text-decoration: line-through;
}
.discount {
  position: relative;
  top: -8px;
  padding: 2px 5px;
  margin-left: 3px;
  border-radius: 6px;
  font-size: 12px;
  color: #fff;
}
.goods-info {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
  font-size: 12px;
}
.services {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.services img {
  width: 10px;
  height: 10px;
}
.services span {
  font-size: 13px;
  color: #333;
}
</style>