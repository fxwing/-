// path/to/custom-li.js
Component({
  properties:{
    child:{
      type:String,
      value:'',
      observer(newVal,oldVal,changePath){
          console.log(newVal)
      }
    }
  },
  relations: {
    './custom-ul-component': {
      type: 'parent', // 关联的目标节点应为父节点
      linked: function (target) {
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
        console.log('child linked to ', target)
      },
      linkChanged: function (target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked: function (target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },
  methods:{
    onClick(){
      const nodes = this.getRelationNodes('./custom-ul-component');
      nodes.forEach(item=>{
        item.setData({
          parent:'子组件传给父组件的'
        })
      })
    }
  }
})