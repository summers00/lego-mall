<template>
  <div class="tab-bar-item" @click="itemClick()">
    <!-- 不活跃时显示 -->
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="active-icon"></slot>
    </div>
    <div :style="isActiveStyle">
      <slot name="title"></slot>
    </div>
    
  </div>
  
</template>

<script>
export default {
  // 需要传的参数
  props: {
    path:{
      type:String,
      default:'/home'
    },
    // 传入活跃时样式
    activeStyle:{
      type:String,
      default:'deeppink'
    }
  },
  computed: {
    isActive() { //传入路径和当前路由path相同说明处于活跃
      return this.path.indexOf(this.$route.path) !== -1
    },
    // 是否显示活跃时的样式
    isActiveStyle() {
      return this.isActive ? {color:this.activeStyle} : {}
    }
  },
  methods: {
    itemClick() {
      // 跳转路由
      this.$router.push(this.path)
    }
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 1px;
  vertical-align: middle;
}
</style>