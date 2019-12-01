// pages/di/home/home.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		time:"",//倒计时
		minute:"",//分
		second:"",//秒
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {
		let _this = this
		fn();

		function fn() {
			let j = new Date() //当今时间
			let	x = new Date(2019, 12, 1)//5.1时间
			let	s = x - j //剩余毫秒
			let m = parseInt(s / 1000 / 60 / 60 / 24)
			let	f = parseInt(s / 1000 / 60 / 60 % 24)
			let	z = parseInt(s / 1000 / 60 % 60)
			let	t = parseInt(s / 1000 % 60)
			let time =toDou(m).toString()
			let minute =toDou(z).toString()
			let second =toDou(t).toString()
			_this.setData({
				time,
				minute,
				second
			})
		}
		setInterval(fn, 100);

		function toDou(i) {
			if (i < 10) {
				i = "0" + i;
			}
			return i;
		}

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	},
	onGodetails(e){
		wx.navigateTo({
			url:"/pages/di/details/details"
		})
	},
	onTabBar(){
		wx.switchTab({
			url:"/pages/di/news/news"
		})
	},
	onGet(){
		wx.navigateTo({
			url:"/pages/my/discounts/discounts"
		})
	}
})
