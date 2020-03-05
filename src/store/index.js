import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoList:[],  //我的=》个人信息
    friendsList:[{username:'我',sex:'女',age:21,img:require('../assets/imgs/myhead.jpg')}], //好友列表
    charMsgList:[], //聊天记录
  },
  mutations: {
    //个人申请信息
    getInfo(state,info){
      state.infoList.unshift(info);
      // console.log(state.infoList)
    },
    // 好友列表
    getFriends(state,friends){
      state.friendsList.unshift(friends);
      console.log(state.friendsList)
    },
    //删除当前个人信息
    dropInfo(state,index){
      state.infoList.splice(index,1)
    },

    // 保存聊天消息
    getChar(state,obj){
      state.charMsgList.unshift(obj);
    }
  },
  actions: {
  },
  modules: {
  }
})
