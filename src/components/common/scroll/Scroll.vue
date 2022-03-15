<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ObserveDOM from '@better-scroll/observe-dom'
import ObserveImage from '@better-scroll/observe-image'
BScroll.use(ObserveDOM)
BScroll.use(ObserveImage)
export default {
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // dom元素发生变化时触发refresh
      observeDOM: true,
      // 检测加载图片,会自动调用refresh方法,默认100毫秒调用一次
      observeImage: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      // 鼠标滚动
      mouseWheel: true,
    })
    this.scroll.on('scroll', (position) => {
      // 发出事件
      this.$emit('scroll', position)
    })
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>
</style>