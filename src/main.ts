import { createApp } from 'vue'
import App from './App.vue'

// 引入 路由
import router from './router/index'

// 引入 elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
