import Vue from 'vue'
import VueRouter from 'vue-router'
/*
 import Home from '../pages/home'
 */
import Detail from '../pages/goodsDetail'
import Msg from '../components/Message.vue'
import App from '../App.vue'
import Home from '../pages/home'

import HomeSoa from '../pages/SuperuiHome'
import SuperuiInfo from '../components/superui/SuperuiInfo.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    //component: resolve => require(['../pages/home'],resolve),
    component:Home,
    meta: {
      title:'home'
    }
  },
  {
    path: '/msg',
    component: Msg
  },  {
    path: '/homesoa',
    component: HomeSoa,
  },
  {
    path: '/app',
    component: App
  },
  {
    path: '/detail',
    component: Detail,
  }
]
export default new VueRouter({
  routes
})
