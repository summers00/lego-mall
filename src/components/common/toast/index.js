import Toast from './Toast'
const obj = {}

obj.install = function (Vue) {
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 创建组件
  const toast = new toastConstructor()
  // 将组件挂载到元素上
  toast.$mount(document.createElement('div'))
  // 将toast添加到body元素上
  document.body.appendChild(toast.$el)
  // 将组件添加到原型
  Vue.prototype.$toast = toast
}

export default obj