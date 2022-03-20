<template>
  <el-container>
    <!-- el-aside 宽度不能写死，否则会导致菜单收缩了，菜单容器却没收缩 -->
    <el-aside width="auto">
      <!-- 可伸缩菜单 -->
      <nav-side :collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from '@vue/runtime-dom'
import NavHeader from './navHeader/index.vue'
import NavSide from './navSide/index.vue'

// 控制菜单的展开与折叠
let isCollapse = ref(false)

</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
