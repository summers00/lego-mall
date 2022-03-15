<template>
  <div v-if="Object.keys(detailInfo).length!==0&& detailInfo.detailImage[0] !== null" class="detail-info">
    <div class="desc-info clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="key">{{ detailInfo.detailImage[0].key }}</div>
    <img class="images" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item"
      @load="imgLoad" />
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      imgLength: 0,
      counter: 0
    }
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imgLength) {
        this.$emit('imgLoad')
      }
    }
  },
  watch: {
    // 监听属性改变
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>

<style scoped>
.detail-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
/* 标题 */
.desc-info {
  padding: 0 15px;
}
/* 横线 */
.start,
.end {
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}
.start {
  float: left;
}
.end {
  float: right;
}
/* 方块 */
.start::before,
.end::after {
  content: '';
  position: absolute;
  bottom: 1px;
  width: 5px;
  height: 5px;
  background-color: #333;
}
.end::after {
  right: 0;
}
/* 描述 */
.desc {
  padding: 12px 0;
  font-size: 13px;
  line-height: 18px;
}
/* 标题 */
.key {
  text-align: center;
  font-size: 13px;
  margin: 10px 0;
  color: #333;
}
.images {
  width: 100%;
  /* 去除图片底部空白 */
  vertical-align: middle;
}
</style>