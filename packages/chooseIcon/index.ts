/**
 * 注册全局组件，实现按需引入
 */

import { App } from 'vue'
import chooseIcon from './src/index.vue'

chooseIcon.install = (app: App): void => {
  app.component('LChooseIcon', chooseIcon);
}

// 让组件可以通过 app.use() 的形式使用
export default {
  // install(app: App) {
  //   app.component('l-choose-icon', chooseIcon)
  // }
  chooseIcon
}