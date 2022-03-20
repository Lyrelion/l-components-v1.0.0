import { toLine } from './utils/index';
import { createApp } from 'vue'
import App from './App.vue'

// 引入 路由
import router from './router/index'

// 引入 elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入 element-plus Icon
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)

// 全局注册图标 牺牲一点性能
for (let i in Icons) {
  /**
   * console.log((Icons as any)[i])
   * 默认情况下，会打印出 Object，使用驼峰命名，如: "Switch"
   * 希望转换成 el-icon-xxx 的形式，就需要用新的方式全局注册组件
   */

  // 注册全部 elementplus Icon 组件（使用方法：el-icon-xxx）
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

app.use(router)
app.use(ElementPlus)
app.mount('#app')
