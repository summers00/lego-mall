import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home')
const Detail = () => import('views/detail/Detail')
const Shopcart = () => import('views/shopcart/Shopcart')
const Profile = () => import('views/profile/Profile')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router