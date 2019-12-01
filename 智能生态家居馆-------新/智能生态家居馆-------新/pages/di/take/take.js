// pages/di/take/take.js
Page({
	data: {
		status: false,
		showModel: false,
		arr: [],
		user: "",
		phone: "",
		addres: "",
		isChecked: true
	},
	onLoad: function(options) {},
	addTake() {
		this.status = true;
		this.showModel = true;
		this.setData({
			status: this.status,
			showModel: this.showModel
		})
	},
	getInputUser(e) {
		console.log(e.detail.value)
		this.setData({
			user: e.detail.value
		})
	},
	getInputPhone(e) {
		console.log(e.detail.value)
		this.setData({
			phone: e.detail.value
		})
	},
	getInputAddress(e) {
		console.log(e.detail.value)
		this.setData({
			addres: e.detail.value
		})
	},
	clearAdd() {
		this.status = false;
		this.showModel = false;
		this.setData({
			status: this.status,
			showModel: this.showModel
		})
	},
	baocun(e) {
		console.log(e);
		var obj = {
			user: this.data.user,
			phone: this.data.phone,
			addres: this.data.addres,
			isChecked:this.data.isChecked
		}
		wx.setStorageSync("key", obj) || [];
		this.data.arr.push(obj);
		this.status = false;
		this.showModel = false;
		this.setData({
			status: this.status,
			showModel: this.showModel,
			arr: this.data.arr
		})
	},
	xuanze() {

	},
	clearIn(e) {
		var index=e.currentTarget.dataset.index;
		wx.showModal({
			title: '提示',
			content: '确定要删除此收货地址吗',
			success(res) {
				if (res.confirm) {
					// console.log('用户点击确定')
					this.data.arr.splice(index,1);
					this.setData({
						arr: this.data.arr
					})
				} else if (res.cancel) {
					// console.log('用户点击取消')
				}
			}
		})
	}
})
