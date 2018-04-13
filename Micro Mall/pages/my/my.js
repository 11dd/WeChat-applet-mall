// page/component/new-pages/user/user.js
Page({
  data: {
    thumb: '',
    nickname: '',
    orders: [],
    hasAddress: false,
    address: {},

    category: [
      {
        navigation: '/pages/my/orders/orders',
        iconLeft: "/images/icons/orders.png",
        iconRight: '/images/icons/arrow-right.png',
        text: '我的订单',
      },
      {
        navigation: '/pages/my/collection/collection',
        iconLeft: "/images/icons/myCollected.png",
        iconRight: '/images/icons/arrow-right.png',
        text: '我的收藏',
      },
      {
        navigation: "/pages/shoping/address/address",
        iconLeft: "/images/icons/address.png",
        iconRight: '/images/icons/arrow-right.png',
        text: '收货地址管理',
      }
    ],
    about: [{
      navigation: '/pages/my/about/about',
      iconLeft: "/images/icons/us.png",
      iconRight: '/images/icons/arrow-right.png',
      text: '关于我们',
    }]
  },
  onLoad() {
    var self = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function (res) {
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    })

    /**
     * 发起请求获取订单列表信息
     */
    // wx.request({
    //   url: 'http://www.gdfengshuo.com/api/wx/orders.txt',
    //   success(res){
    //     self.setData({
    //       orders: res.data
    //     })
    //   }
    // })
  },
  onShow() {
    var self = this;
    /**
     * 获取本地缓存 地址信息
     */
    wx.getStorage({
      key: 'address',
      success: function (res) {
        self.setData({
          hasAddress: true,
          address: res.data
        })
      }
    })
  },
  /**
   * 发起支付请求
   */
  payOrders() {
    wx.requestPayment({
      timeStamp: 'String1',
      nonceStr: 'String2',
      package: 'String3',
      signType: 'MD5',
      paySign: 'String4',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        wx.showModal({
          title: '支付提示',
          content: '<text>',
          showCancel: false
        })
      }
    })
  }
})