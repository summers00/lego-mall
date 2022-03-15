<template>
  <nav-bar class="nav-bar">
    <div slot="center" class="search">
      <input type="text">
    </div>
    <div slot="right">
      <span class="text">搜索</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  }
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
}

.search input {
  display: inline-block;
  width: 100%;
  height: 25px;
  border-radius: 20px;
  outline: none;
  background-color: #f1f1f1;
  border: none;
}
.text {
  margin-left: -5px;
}
</style>