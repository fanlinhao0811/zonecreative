import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '',
        name: 'home',
        showMenu: true,
        component: () => import('@/views/welcome.vue')
      },
      {
        path: '/about',
        name: 'about',
        showMenu: true,
        component: () => import('@/views/about.vue')
      },
      {
        path: '/service',
        name: 'service',
        showMenu: true,
        component: () => import('@/views/service.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        showMenu: true,
        component: () => import('@/views/contact.vue')
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        showMenu: true,
        component: () => import('@/views/portfolio.vue')
      },
      {
        path: '/oneToy',
        name: 'oneToy',
        showMenu: true,
        component: () => import('@/views/oneToy.vue')
      }
    ]
  }
]

const router = new Router({
  mode: 'hash',
  routes: constantRouterMap
})


export default router;
