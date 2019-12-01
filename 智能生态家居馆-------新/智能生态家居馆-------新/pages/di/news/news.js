// pages/di/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	alldata:[
		{
			id:0,
			pic:"../../../image/ye/bg4.jpg",
			name:"泰浪平面枕",
			text:"泰国波浪平面枕",
			price:"228.00",
			state:false
		},
		{
			id:1,
			pic:"../../../image/ye/bg4.jpg",
			name:"泰国波浪平面枕",
			text:"泰国波面枕",
			price:"238.00",
			state:false
		},
		{
			id:3,
			pic:"../../../image/ye/bg4.jpg",
			name:"泰国面枕",
			text:"泰国波浪枕",
			price:"278.00",
			state:false
		}
	]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
	//事件
	onCollect(e){
		let num = e.currentTarget.dataset.index
		this.data.alldata.forEach((item,index)=>{
			if(index == num){
				item.state = !item.state
			}
		})
		this.setData({
			alldata:this.data.alldata
		})
		//存储
		let arr =this.data.alldata.filter(item=>{
			return item.state
		})
		wx.setStorageSync("key",arr)
	},
	//去详情
	onDetails(e){
		let id = e.currentTarget.dataset.id
		wx.navigateTo({
			url:"/pages/di/details/details?id="+id
		})
		
	}
})