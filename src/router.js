import Vue from 'vue'
import Router from 'vue-router'

import Login  from '@/views/Login.vue'
import Index  from '@/views/Index.vue'
import Home from '@/views/Home.vue'
import Register from "./views/Register";


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/index',
      component: Index,
      children: [
        { path: '', component: Home },
        { path: '/home', name: 'home', component: Home },

      ]
    },
    {
      path:'*',
      redirect:'/'
    }


  ]
})
