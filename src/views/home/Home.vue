<template>
  <div id="home">
    <header-view />
    <tab-control ref="tabControl1" :titles="['流行','新款','精选']" @tabClick="tabClick" v-show="isShowTab" />
    <scroll class="content" :probeType="3" :pullUpLoad="true" @pullingUp="loadMore" @scroll="scroll" ref="scroll">

      <home-swiper :bannerList="bannerList" @imgLoad="imgLoad"></home-swiper>
      <recommend-view :recommendList="recommendList" />
      <!-- <feature-view /> -->

      <tab-control ref="tabControl2" :titles="['流行','新款','精选']" @tabClick="tabClick" v-show="!isShowTab" />
      <goods-list :goods="goods[this.currentType].list" />
    </scroll>
    <back-top @click.native="backtop" v-if="isShowBackTop" />
  </div>
</template>

<script>
// 导航
import HeaderView from "./childComps/HeaderView";
// 轮播图
import HomeSwiper from "./childComps/HomeSwiper";
// 推荐
import RecommendView from "./childComps/RecommendView";
// 排行
// import FeatureView from "./childComps/FeatureView";
// tabcontrol
import TabControl from "components/content/tabcontrol/TabControl";
// 商品列表
import GoodsList from "components/content/goods/GoodsList.vue";
// scroll
import Scroll from "components/common/scroll/Scroll";
// 回到顶部
import BackTop from "../../components/content/backtop/BackTop.vue";

// 引入首页请求函数
import { getHomeData, getHomeGoods } from "network/home";
// 防抖动函数
import { debounce } from "common/utils";

export default {
  name: "Home",
  // 注册组件
  components: {
    HeaderView,
    HomeSwiper,
    RecommendView,
    // FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      // bannerList: [],
      bannerList: [
        {
          image: 'https://img.sucai999.com/9H8ISi6RjINcMk7H%3Az7vSMdrMXxpLlZX5x6a0kdn6f8wNpZgeRsp6g1xLW7vtu%5ByqXeoZXYWlt4YW6yoZfNo7lZg%3ApMeogxpZX7g5x6kaMqkNEJkYhNENmOfqDahN%7B7hJmO%7B22ynTgie8w6g%5BmSuvY2kXIZWt%7BNwxfp%7B8fSZYWRySoRmuWGJXI5XKc8XWVpS6wFoYg8vCv.jpg?w=700&h=&webp=1&cd=ea'
        },
        {
          image: 'https://img.sucai999.com/9H8ISi6RjINcMk7H%3Az7vSMdrMXxpLlZX5x6a0kdn6f8wNpZgeRsp6g1xLW7vtu%5ByqXeoZXYWlt4YW6yoZfNo7lZg%3ApMeogxpZX7g5x6kaMqkNEJkYhNENmOfqDahN%7B7hJmO%7B22ynXUNf8w4XW1XuvvJeNvZW1p8XxfpE6zO0YWTGCY%5BmuG1D4z5XSFXzSVppPHRoYg8vCv.jpg?t=&h=320&webp=1&cd=ea',
        },
      ],
      // recommendList: [],
      recommendList: [
        {
          title: '超市',
          image: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
        }, {
          title: '服饰',
          image: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
        }, {
          title: '全球购',
          image: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
        }, {
          title: '生鲜',
          image: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
        }, {
          title: '送货到家',
          image: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
        }, {
          title: '充值缴费',
          image: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
        }, {
          title: '9.9元拼',
          image: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
        }, {
          title: '领劵',
          image: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
        }, {
          title: '省钱',
          image: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
        }, {
          title: '全部',
          image: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
        }
      ],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      currentType: 'pop', //默认类型
      isShowBackTop: false,
      isShowTab: false,
      taboffsetTop: 0,
      saveY: 0,
    }
  },
  created() { //组件创建后调用
    this.getHomeData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    async getHomeData() {
      const { data } = await getHomeData()
      // this.bannerList = data.data.banner.list
      // this.recommendList = data.data.recommend.list
    },
    // 请求商品数据的方法
    async getHomeGoods(type) {
      // 下次请求页码加1
      const page = this.goods[type].page + 1
      const result = await getHomeGoods(type, page)
      this.goods[type].list.push(...result.data.data.list)
      // 更新已加载的页码
      this.goods[type].page += 1
      // 加载完数据必须调用refresh
      this.$refs.scroll.finishPullUp()
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop"
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    loadMore() {
      console.log('上拉加载');
      this.getHomeGoods(this.currentType)
    },

    scroll(position) {
      this.isShowBackTop = -position.y > 1000
      // console.log(this.$refs.tabControl2.$el.offsetTop);
      this.isShowTab = -position.y > this.taboffsetTop
    },
    imgLoad() { //轮播图图片加载完
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop - 44
    },
  },
  activated() {
    // console.log('路由活跃');
    this.$refs.scroll.scrollTo(0, this.saveY)
  },
  deactivated() {
    // console.log('路由移除');
    // 记录当前位置
    this.saveY = this.$refs.scroll.getScrollY()

  }

};
</script>

<style scoped>
/* 要滚动，warpper必须设高 */
#home {
  height: 100vh;
}
/* 要滚动内容的高度：100%-上下导航的高*/
.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
/* 顶部导航 */
.home-nav {
  color: #fff;
  background-color: var(--color-tint);
}
</style>