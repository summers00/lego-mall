import { request } from "./request";

// 请求首页数据
export function getHomeData() {
  return request({
    url:'home/multidata'
  })
}

// 请求商品数据，必须传入类型和页码
export function getHomeGoods(type, page) {
  return request({
    url: 'home/data',
    // 请求参数，拼接到url后面
    params: {
      type,
      page,
    }
  })
}