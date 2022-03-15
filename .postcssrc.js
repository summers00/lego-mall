module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      unitToConvert: 'px', //需要转换的单位，默认为"px"
      viewportWidth: 375, // 视窗的宽度，设计稿的宽度
      viewportHeight: 1334,//视窗的高度，根据375设备的宽度来指定，一般指定667，也可以不配置
      unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      propList: ['*'],  //能转化为vw的属性列表
      viewportUnit: 'vw', // 指定需要转换成的视窗单位
      fontViewportUnit: 'vw', //字体使用的视口单位
      selectorBlackList: ['.ignore-'], //指定不转换为视窗单位的类，可自定义，可以无限添加
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
      mediaQuery: false, // 不允许在媒体查询中转换`px`
      exclude: [
        /tabbar/,
        /TabBar.vue/,
      ], //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      landscape: false, //是否添加根据 landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw',    //横屏时使用的单位
      landscapeWidth: 568     //横屏时使用的视口宽度
    }
  }
}