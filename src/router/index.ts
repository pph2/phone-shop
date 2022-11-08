import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/index.vue')
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "index" */ '../views/home/index.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "index" */ '../views/about/index.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "index" */ '../views/cart/index.vue')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "index" */ '../views/mine/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
