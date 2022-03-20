/**
 * 注册全局组件，实现按需引入
 */

import { App } from 'vue'
import chooseArea from './src/index.vue'

chooseArea.install = (app: App): void => {
  app.component('LChooseArea', chooseArea);
}

// 让组件可以通过 app.use() 的形式使用
export default {
  // install(app: App) {
  //   app.component('l-choose-area', chooseArea)
  // }
  chooseArea
}