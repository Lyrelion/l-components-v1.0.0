/**
 * 注册全局组件，实现按需引入
 */

import { App } from 'vue'
import menu from './src/index.vue'
import infiniteMenu from './src/menu'

menu.install = (app: App): void => {
  app.component('l-menu', menu);
}

// infiniteMenu.install = (app: App): void => {
//   app.component('l-InfiniteMenu', infiniteMenu);
// }

// 让组件可以通过 app.use() 的形式使用
export default {
  // install(app: App) {
  //   app.component('l-menu', menu)
  //   app.component('l-infinite-menu', infiniteMenu)
  // }
  menu,
  // infiniteMenu,
}