<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" @navClick="navClick" ref="nav" />
    <scroll class="content" :probeType="3" ref="scroll" @scroll="scroll">
      <detail-swiper :swiperList="swiperList" />
      <detail-base-info :goodsInfo="goodsInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-item-parmas :itemParmas="itemParmas" ref="itemParmas" />
      <detail-comment :comment="comment" ref="comment" />
      <goods-list :goods="recommend" ref="recommend" />
    </scroll>
    <back-top v-if="isShowBackTop" @click.native="backtop" />
    <detail-bottom-bar @addToCart="addToCart" />

  </div>
</template>

<script>
// 导航栏
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailInfo from "./childComps/DetailInfo.vue";
import DetailItemParmas from "./childComps/DetailItemParmas.vue";
import DetailComment from "./childComps/DetailComment.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

// 请求数据
import { getDetail, GoodsInfo, ItemParams, getRecommend } from "network/detail";

import { itemImgListener, backTopMixin } from "common/mixin";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import { mapActions } from "vuex";
import Toast from "../../components/common/toast/Toast.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailInfo,
    DetailItemParmas,
    DetailComment,
    GoodsList,
    DetailBottomBar,
    Toast,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: this.$route.params.iid,
      swiperList: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParmas: {},
      comment: {},
      recommend: [],
      offsetTop: [], //每个组件到顶部距离
      currentIndex: 0,
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      getDetail(this.iid).then((res) => {
        const data = res.data.result
        this.swiperList = data.itemInfo.topImages
        this.goodsInfo = new GoodsInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo
        )
        // 保存店铺信息
        this.shopInfo = data.shopInfo;
        // 保存详情信息
        this.detailInfo = data.detailInfo;
        // 保存参数信息
        this.itemParmas = new ItemParams(
          data.itemParams.rule,
          data.itemParams.info
        );
        // 如果评论数不为0,再取出评论信息
        if (data.rate.cRate !== 0) {
          this.comment = data.rate.list[0];
        }
      })

      getRecommend().then((res) => {
        this.recommend = res.data.data.list;
      })

    },
    scroll(position) {
      this.isShowBackTop = -position.y > 1000
      const positionY = -position.y
      // 遍历数组前4位
      for (var i = 0; i < this.offsetTop.length - 1; i++) {
        if (this.currentIndex !== i && positionY >= this.offsetTop[i] && positionY < this.offsetTop[i + 1]) {
          // 记录当前i
          this.currentIndex = i
          // 组件和当前i保存一致
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    imgLoad() {
      // console.log('图片加载');
      // 组件到顶部距离
      this.offsetTop.push(0)
      this.offsetTop.push(this.$refs.itemParmas.$el.offsetTop - 46)
      this.offsetTop.push(this.$refs.comment.$el.offsetTop - 46)
      this.offsetTop.push(this.$refs.recommend.$el.offsetTop - 46)
      this.offsetTop.push(Number.MAX_VALUE)
      // console.log(this.offsetTop);
    },
    navClick(index) {
      this.currentIndex = index
      this.$refs.scroll.scrollTo(0, -this.offsetTop[this.currentIndex])
    },
    addToCart() {
      // 将需要的数据给vuex
      const product = {};
      // 一定传id,商品的唯一标识
      product.iid = this.iid;
      product.img = this.swiperList[0];
      product.title = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.price;
      // 提交给actions
      this.$store.dispatch('addCart', product).then((res) => {
        this.$toast.show(res, 2000)
      })
    }
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>