import Vue from 'vue'
import VueRouter from 'vue-router'
import Msg from '../views/Msg.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Msg',
    component: Msg,
  },
  // 好友页面
  { path: '/apply', component: () => import('../views/Apply.vue') },
  // 好友页面
  { path: '/friends', component: () => import('../views/Friend.vue') },
  // 我的页面
  { path: '/my', component: () => import('../views/My.vue') },


]

const router = new VueRouter({
  routes
})

export default router
