import { App } from 'vue'
// 引入组件
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import menu from './menu'
// 引入样式
import './styles/common.scss'
import './styles/element-plus.scss'

// 最终在 views 下使用的组件，其实是这个 index.ts 中注册的组件
const components = [
  chooseArea,
  chooseIcon,
  menu,
]

const install = (app: App): void => {
  // app.component('LChooseArea', chooseArea);
  // app.component('LChooseIcon', chooseIcon);
  app.component('l-menu', menu);
  // components.forEach((component: any) => {
  //   app.component(component.name, component);
  // });
};

export {
  // chooseArea,
  // chooseIcon,
  menu
}

export default {
  /**
   * 让组件可以通过 app.use() 的形式使用
   * @param app 
   */
  install
  // install(app: App) {
  //   components.map(item => {
  //     app.use(item)
  //   })
  // }
}