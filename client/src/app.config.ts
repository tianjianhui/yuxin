export default {
  pages: [
    'pages/index/index',
    'pages/test/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#50FA9C',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
      color: '#0DEEFC',
      selectedColor: '#E1FA4F',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页'
        },
        {
          pagePath: 'pages/test/index',
          text: '测试'
        }
      ]
  },
  cloud: true
}
