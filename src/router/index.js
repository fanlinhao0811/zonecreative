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
    component: () => import('@/views/home.vue')
  }
]

const router = new Router({
  mode: 'hash',
  routes: constantRouterMap
})


export default router;
