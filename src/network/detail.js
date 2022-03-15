import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail/',
    params: {
      iid
    }
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, shopInfo) {
    this.desc = itemInfo.desc
    this.title = itemInfo.title
    this.price = itemInfo.lowPrice
    this.oldPrice = itemInfo.oldPrice
    this.columns = columns
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.services = shopInfo.services
  }
}

export class ItemParams {
  constructor(rule, info) {
    // 标题
    this.tables = rule.tables[0]
    // 参数
    this.info = info.set
    // 有图片再显示
    this.image = info.images ? info.images[0] : ' '
  }
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}