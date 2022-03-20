<template>
  <el-container>
    <!-- el-aside 宽度不能写死，否则会导致菜单收缩了，菜单容器却没收缩 -->
    <el-aside width="auto">
      <el-menu
        :collapse="isCollapse"
        default-active="2"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1">
          <el-icon-menu />
          <span>导航1</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon-menu />
          <span>导航2</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon-menu />
          <span>导航3</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggle">
          <el-icon-expand v-if="isCollapse"></el-icon-expand>
          <el-icon-fold v-else></el-icon-fold>
        </span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from '@vue/runtime-dom'

// 可伸缩菜单
let isCollapse = ref(false)

/**
 * 菜单切换
 */
const toggle = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped>
.el-menu-item {
  span {
    margin-left: 5px;
  }
}

// 如果不是收缩菜单，那么菜单的宽度就会在这里设置，elementplus 官网 demo 写的
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
