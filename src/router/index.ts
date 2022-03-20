import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../components/container/src/index.vue'),
    children: [
      // {
      //   path: '/',
      //   component: () => import('../views/Home.vue'),
      // },
      {
        // path: '/chooseIcon',
        path: '/',
        component: () => import('../views/chooseIcon/index.vue')
      },
    ]
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router