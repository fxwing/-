const app = getApp()
import store from '../../store/index.js'

Page(store.createPage({
  globalData: ['index','userInfo'],
  data: {
  },
  onShow(){
    console.log(this.data.userInfo)
  },
  onLoad: function() {},
  // 监听数据的修改 this指的是当前页面的指向
  watch:{
    index(val){
      console.log('index='+val,this)
    }
  },
  addGlobalData() {
    // globalData能够全局储存数据但是wxml页面不会响应
    //  使用响应式管理globalData
    let {
      index
    } = this.data;
    index += 1;
    store.dispatch('index', index)
  },
  minGlobalData(){
    let {
      index
    } = this.data;
    index -= 1;
    store.dispatch('index', index)
  },
  changeInfo(){
    store.dispatch('userInfo', { ...this.data.userInfo, nickName: '修改的姓名', avatarUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1155164730,3065917467&fm=11&gp=0.jpg'})
  }
}))