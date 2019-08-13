import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component:()=> import('@/views/login.vue') 
    },
    {
      path: '/home',
      name: 'home',
      component:()=> import('@/views/home.vue') ,
      children:[
        {
          path: '/list',
          name: 'list',
          component:()=> import('@/views/list.vue') 
        },
        {
          path: '/user',
          name: 'user',
          component:()=> import('@/views/user.vue') 
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component:()=> import('@/views/add.vue') 
    },
    {
      path: '/info',
      name: 'info',
      component:()=> import('@/views/info.vue') 
    }
   
    
  ]
})
