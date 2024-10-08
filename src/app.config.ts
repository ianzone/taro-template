// 全局配置 https://docs.taro.zone/docs/next/app-config

export default defineAppConfig({
  pages: ['pages/index/index', 'pages/detail/detail'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
