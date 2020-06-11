import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import CreateLogin from '../components/CreateLogin.vue'
import LoginList from '../components/LoginList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/createlogin',
    name: 'CreateLogin',
    component: CreateLogin
  },
  {
    path: '/loginlist',
    name: 'LoginList',
    component: LoginList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
