<template>
  <router-view></router-view>
</template>

<style lang="scss">

// npm i -D sass sass-loader 安装完成后，要重新启动 vite

* {
  margin: 0;
  padding: 0;
}

// 统一设置 elementplus Icons 大小
svg {
  width: 1em;
  height: 1em;
}

// 把所有容器的高度设置为充满屏幕
html,
body,
#app,
.el-container,
.el-menu {
  height: 100%;
}
</style>
