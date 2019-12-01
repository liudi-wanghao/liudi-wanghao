// pages/di/shop/shop.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		arr: [{
				id: 0,
				statr: true,
				num: 1,
				pci: "../../../image/ye/bg2.jpg",
				title: "羽毛枕",
				color: "白色",
				price: "451.00"
			},
			{
				id: 1,
				statr: true,
				num: 1,
				pci: "../../../image/ye/bg2.jpg",
				title: "麦芽枕",
				color: "棕色",
				price: "491.00"
			},
			{
				id: 2,
				statr: true,
				num: 1,
				pci: "../../../image/ye/bg2.jpg",
				title: "天然棉枕",
				color: "灰色",
				price: "51.00"
			}
		],
		TotalPrice: 0, //总价格
		AllState: true //全选
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		//多条数据详情到购物车
		//let arr = wx.getStorageSync("details") 不对???????
		let arr = [...new Set(wx.getStorageSync("details"))]
		console.log(arr)
		// this.setData({
			
		// })
	},
	//选中的状态
	onState(e) {

		let num = e.currentTarget.dataset.index
		this.data.arr.forEach((item, index) => {
			if (index == num) {
				this.data.arr[index].statr = !this.data.arr[index].statr
				// arr.push(item)
				this.setData({
					arr: this.data.arr
				})
			}
			if (!item.statr) {
				this.setData({
					AllState: !this.data.AllState
				})
			}
		})
		//检测状态
		let state = this.data.arr.filter(item => {
			return !item.statr
		})
		if (this.data.arr.length == state.length) {
			this.setData({
				AllState: false
			})
		} else {
			this.setData({
				AllState: true
			})
		}


		this.totalPrice()
	},
	//加减按钮
	onReduce(e) {
		let num = e.currentTarget.dataset.index
		this.data.arr.forEach((item, index) => {
			if (index == num) {
				let arr = this.data.arr;
				arr[index].num--;
				if (arr[index].num-- <= 1) {
					arr[index].num = 1
				}
				this.setData({
					arr
				})
			}
		})
		this.totalPrice()
	},
	onAdd(e) {
		let num = e.currentTarget.dataset.index
		this.data.arr.forEach((item, index) => {
			if (index == num) {
				let arr = this.data.arr;
				arr[index].num++;
				this.setData({
					arr
				})
			}
		})
		this.totalPrice()
	},
	//价格
	totalPrice() {
		let priceNum = 0
		this.data.arr.forEach(item => {
			if (!item.statr) {
				priceNum += item.num * item.price
			}
		})
		this.setData({
			TotalPrice: priceNum
		})
	},
	//全选
	onAllState() {
		if (this.data.AllState) {
			console.log(2)
			this.data.arr.forEach(item => {
				item.statr = false
			})
			this.setData({
				arr: this.data.arr,
				AllState: false
			})

		} else {
			this.data.arr.forEach(item => {
				item.statr = true

			})
			this.setData({
				arr: this.data.arr,
				AllState: true
			})

		}
		this.totalPrice()
	},
	onMove(e) {
		let index = e.currentTarget.dataset.index
		wx.showModal({
			title: '提示',
			content: '是否删除',
			success:(res)=> {
				if (res.confirm) {
					this.data.arr.splice(index, 1)
					this.setData({
						arr: this.data.arr
					})
				}
				this.totalPrice()
			}
		})

		
	}
})
