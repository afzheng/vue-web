import Vue from 'vue'
import VueRouter from 'vue-router'
/*
 import Home from '../pages/home'
 */
import Detail from '../pages/goodsDetail'
import Msg from '../components/Message.vue'
import App from '../App.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/home'],resolve),
    meta: {
      title:'home'
    }
  },
  {
    path: '/msg',
    component: Msg
  },
  {
    path: '/app',
    component: App
  },
  {
    path: '/detail',
    component: Detail,
    children: [
      {
        path:'msg',
        component: Msg
      }
    ]
  }
]
export default new VueRouter({
  routes
})
