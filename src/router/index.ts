import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true
    },
    component: () => import('../views/Home.vue'),
  },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
});

export default router;