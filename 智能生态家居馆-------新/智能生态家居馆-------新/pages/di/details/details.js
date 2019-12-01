// pages/di/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		time:"",
		minute:"",
		second:"",
		show: false,
		index:"",//单独购买0
		index1:"",//拼团购买1
		size:"-1",//尺码
		color:"-1",//颜色
		num:1,//数量
		eticette:[
			"60*40cm","60*40cm","60*40cm","60*40cm","60*40cm"
		],//尺寸
		colourArr:[
			"白色","黑色","红色","彩色","蓝色"
		],//颜色
		sizeValue:"",//尺寸内容
		colorValue:"",//颜色内容
		pic:"/image/ye/logo2.gif",//图片
		price:"68.00",
		name:"太空枕",
		state:true,
		obj:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  //进行数据匹配
	console.log(options.id)
	
	
	let _this = this
	fn();
	
	function fn() {
		let j = new Date() //当今时间
		let	x = new Date(2019,11,30,15,0)//5.1时间
		let	s = x - j //剩余毫秒
		let m = parseInt(s / 1000 / 60 / 60 / 24)//距离小时
		//let	f = parseInt(s / 1000 / 60 / 60 % 24)
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
		//console.log(m,f)
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function (event) {
	if(event.from == "button"){
		return{
			title:"商品很好",
			path:"/pages/di/home/home"
		}
	}
  },
  onPopup(e){
	  let index = e.currentTarget.dataset.cold
	  this.setData({
		  index
	  })
	  console.log(index)
	this.setData({ show: true });
	  
  },
  //遮罩层的显示隐藏
  onPopup1(e){
  	   let index1 = e.currentTarget.dataset.cold
  	  this.setData({
  		  index1
  	  })
  	   console.log(index1)
	   this.setData({ show: true });
  },
  onClose() {
      this.setData({ show: false,size:"-1",color:"-1",num:1 });
    },
	onHome(){
		wx.switchTab({
			url:"/pages/di/home/home"
		})
	},
	//添加类名并获取内容
	onSize(e){
		let size = e.currentTarget.dataset.index
		let sizeValue = e.currentTarget.dataset.item
		this.setData({
			size,
			sizeValue
		})
		
	},
	onColor(e){
		let color = e.currentTarget.dataset.index
		let colorValue = e.currentTarget.dataset.item
		this.setData({
			color,
			colorValue
		})
		
	},
	//控制数量
	onAdd(){
		let num = ++this.data.num
		console.log(num)
		this.setData({
			num
		})
	},
	onSubtract(){
		let num = --this.data.num
		if(num<=1){
			num = 1
		}
		this.setData({
			num
		})
	},
	ascertain(){
		let arr=wx.getStorageSync("details") || []
		let obj={}
		let AllData = []
		obj.sizeValue = this.data.sizeValue
		obj.colorValue = this.data.colorValue
		obj.num = this.data.num
		obj.pic = this.data.pic
		obj.price = this.data.price
		obj.name = this.data.name
		
		arr.push(obj)
		AllData.push(obj)
		wx.setStorageSync("details",arr)
		//跳转购物车
		if(this.data.index=="0"){
			if(obj.sizeValue !="" && obj.colorValue !=""){
				wx.switchTab({
					url:"/pages/di/shop/shop"
				})
			}else{
				wx.showToast({
				  title: '没有选中商品',
				  icon: 'none',
				  duration: 2000
				})
			}
			
		}else{
			//直接付款
			if(obj.sizeValue !="" && obj.colorValue !=""){
				wx.navigateTo({
					url:"/pages/di/settle/settle?account="+ JSON.stringify(AllData)
				})
			}else{
				wx.showToast({
				  title: '没有选中商品',
				  icon: 'none',
				  duration: 2000
				})
			}
		}
		this.setData({
			obj
		})
	},
	//收藏
	onCollect(){
		console.log(this.data.obj)
	}
  
})