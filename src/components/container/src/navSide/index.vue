<template>
  <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <el-icon-menu />
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu />
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu />
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
let props = defineProps<{
  // 控制菜单的展开与折叠
  collapse: boolean
}>()

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
