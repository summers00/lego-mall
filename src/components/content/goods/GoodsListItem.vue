<template>
  <div class="goods-list-item" @click="itemClick">
    <!-- 图片懒加载 -->
    <img :src="showImg" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>

<style scoped>
.goods-list-item {
  position: relative;
  width: 48%;
  padding-bottom: 40px;
}
.goods-list-item img {
  width: 100%;
  /* 圆角 */
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
}
.goods-info p {
  overflow: hidden;
  /* 溢出文字省略号显示 */
  text-overflow: ellipsis;
  /* 是否换行 */
  white-space: nowrap;
  margin-bottom: 3px;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.collect {
  position: relative;
}
/* 伪元素 */
.collect::before {
  position: absolute;
  content: '';
  top: 1px;
  left: -14px;
  width: 14px;
  height: 14px;
  background: url(~assets/img/common/collect.svg) 0 0/14px 14px;
}
</style>