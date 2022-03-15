<template>
  <div class="toast" v-if="isShow">

    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration = 2000) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, duration) //3s后清除数据,取消显示
    }
  }
}
</script>

<style>
.toast {
  position: fixed;
  padding: 10px 15px;
  top: 50%;
  left: 50%;
  z-index: 10000;
  transform: translate(-50%, -50%);
  font-size: 15px;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
}
</style>