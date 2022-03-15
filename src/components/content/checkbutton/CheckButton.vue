<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="@/assets/img/cart/tick.svg" v-show="isChecked" />
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #aaa;
}
.check-button img {
  display: inline-block;
  width: 100%;
}
.check {
  background-color: var(--color-high-text);
  border: 1px solid var(--color-high-text);
}
</style>