import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../components/container/src/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/chooseIcon',
        component: () => import('../views/chooseIcon/index.vue')
      },
      {
        path: '/chooseArea',
        component: () => import('../views/chooseArea/index.vue')
      },
      {
        path: '/menu',
        component: () => import('../views/menu/index.vue')
      },
      // {
      //   path: '/trend',
      //   component: () => import('../views/trend/index.vue')
      // },
      // {
      //   path: '/notification',
      //   component: () => import('../views/notification/index.vue')
      // },
      // {
      //   path: '/menu',
      //   component: () => import('../views/menu/index.vue')
      // },
      // {
      //   path: '/chooseTime',
      //   component: () => import('../views/chooseTime/index.vue')
      // },
      // {
      //   path: '/progress',
      //   component: () => import('../views/progress/index.vue')
      // },
      // {
      //   path: '/chooseCity',
      //   component: () => import('../views/chooseCity/index.vue')
      // },
      // {
      //   path: '/form',
      //   component: () => import('../views/form/index.vue')
      // },
      // {
      //   path: '/modalForm',
      //   component: () => import('../views/modalForm/index.vue')
      // },
      // {
      //   path: '/table',
      //   component: () => import('../views/table/index.vue')
      // },
      // {
      //   path: '/calendar',
      //   component: () => import('../views/calendar/index.vue')
      // }
    ]
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router