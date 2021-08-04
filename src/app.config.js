export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#B4B4B4",
    list:[
      {
        pagePath:"pages/index/index",
        text:"选课",
        // 未点击时显示的图片
        iconPath:"assets/Home.png",
        // 点击后显示的图片
        selectedIconPath:"assets/HomeSelected.png"
      },
      {
        pagePath:"pages/index/index",
        text:"广场",
        iconPath:"assets/Square.png",
        selectedIconPath:"assets/SquareSelected.png"
      },
      {
        pagePath:"pages/index/index",
        text:"课篮子",
        iconPath:"assets/Shopping.png",
        selectedIconPath:"assets/ShoppingSelected.png"
      }
    ]
  }
}
