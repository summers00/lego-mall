<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length!==0">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-center">
      <div class="shop-item info">
        <div class="sells">
          <div class="count">{{ sellsCount }}</div>
          <div class="text">总销量</div>
        </div>
        <div class="goods">
          <div class="count">{{ shopInfo.cGoods }}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-item describe">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <!-- 默认绿色，如果isBetter为false改成红色 -->
            <td class="score" :class="{ scoreColor: item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ betterColor: item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <a href="shopInfo.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    sellsCount() {
      const csells = this.shopInfo.cSells
      if (csells > 10000) {
        return parseInt(csells / 10000) + '万'
      }
      return csells
    }
  }
};
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
  font-size: 14px;
}
.shop-top {
  display: flex;
  /* 子元素垂直居中 */
  align-items: center;
}
.shop-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-top span {
  margin-left: 8px;
  vertical-align: center;
}
/* 中间部分 */
.shop-center {
  display: flex;
  padding-top: 5px;
  /* 子元素垂直居中 */
  align-items: center;
}
/* 左右两个部分 */
.shop-item {
  flex: 1;
}
/* 左 */
.info {
  display: flex;
  /* 水平平分剩余空间 */
  justify-content: space-evenly;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sells .count,
.goods .count {
  font-size: 16px;
}

.sells .text,
.goods .text {
  margin-top: 5px;
}
/* 描述 */
.describe {
  display: flex;
  /* 里面的表格水平居中 */
  justify-content: center;
}
.describe table td {
  padding: 5px 1px;
}
.describe table .score {
  color: #5ea732;
}
.describe table .scoreColor {
  color: var(--color-high-text);
}
.describe table .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
  font-size: 12px;
}
.describe table .betterColor span {
  background-color: var(--color-high-text);
}
.shop-bottom {
  margin-top: 10px;
  text-align: center;
}
.shop-bottom a {
  padding: 5px 35px;
  background-color: #f2f5f8;
  border-radius: 10px;
}
</style>