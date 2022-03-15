<template>
  <div class="item-parmas" v-if="Object.keys(itemParmas).length!==0">
    <table class="rule parmas">
      <tr v-for="(tr,index) in itemParmas.tables" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table class="info parmas">
      <tr v-for="(tr, index) in itemParmas.info" :key="index">
        <td class="key">{{ tr.key }}</td>
        <td class="value">{{ tr.value }}</td>
      </tr>
    </table>
    <!-- 图片不为空时显示 -->
    <div class="img" v-if="itemParmas.image.length !== 0">
      <img :src="itemParmas.image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemParmas: {
      type: Object,
      default() {
        return {}
      }
    }
  }
};
</script>

<style scoped>
.item-parmas {
  padding: 15px;
  border-bottom: 5px solid #f2f5f8;
  font-size: 14px;
}
/* 两个表格 */
.parmas {
  width: 100%;
  /* 合并相邻边距 */
  border-collapse: collapse;
}
/* 行 */
.parmas tr {
  height: 40px;
}
/* 单元格 */
.parmas tr td {
  border-bottom: 1px solid #eee;
}
.info .key {
  /* 内容数据大换行时，key也会换行，所以给固定宽度 */
  width: 85px;
}
.info .value {
  color: #eb4868;
}
.img img {
  width: 100%;
}
</style>