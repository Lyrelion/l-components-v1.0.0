import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 在 vite 中使用 tsx
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/

export default defineConfig({
  // vite 的插件都是函数的形式，使用方式即在下面的 plugin 中调用插件函数
  plugins: [vue(), vueJsx()],
  server: {
    // 默认端口号为 3000，此处改为8080
    port: 8080,
  }
})
