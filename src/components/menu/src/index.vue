<template>
  <!-- $attrs 可以在 组件标签中直接使用，不需要在 props 中接收 -->
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    :router="router"
    v-bind="$attrs"
  >
    <template v-for="(item, i) in data" :key="i">
    <!-- 一级菜单开始 -->
      <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]">
        <!-- 菜单图标 -->
        <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
        <!-- 菜单名称 -->
        <span>{{ item[name] }}</span>
      </el-menu-item>

      <!-- 二级菜单开始 -->
      <el-sub-menu v-if="item[children] && item[children].length" :index="item[index]">
        <!-- 插槽 -->
        <template #title>
          <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
          <span>{{ item[name] }}</span>
        </template>
        <!-- 菜单开始 -->
        <el-menu-item v-for="(item1, index1) in item[children]" :key="index1" :index="item1.index">
          <component v-if="item1[icon]" :is="`el-icon-${toLine(item1[icon])}`"></component>
          <span>{{ item1[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
// 固定层数的导航菜单（最多二级）

import { PropType } from 'vue'
import { toLine } from '../../../utils'

let props = defineProps({
  // 菜单数据
  data: {
    // 因为用户可能会自定义键名，所以此处不给他指定具体数据类型 MenuItem
    type: Array as PropType<any[]>,
    required: true,
  },
  // 默认选中的菜单项
  defaultActive: {
    type: String,
    default: '',
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false,
  },

  // ======== 允许用户自定义键名 ========
  
  // 菜单标题的键名
  name: {
    type: String,
    default: 'name',
  },
  // 菜单标识的键名
  index: {
    type: String,
    default: 'index',
  },
  // 菜单图标的键名
  icon: {
    type: String,
    default: 'icon',
  },
  // 菜单子菜单的键名
  children: {
    type: String,
    default: 'children',
  },
})
</script>

<style lang="scss" scoped>
svg {
  margin-right: 4px;
  width: 1em;
  height: 1em;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
