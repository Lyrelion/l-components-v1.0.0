<template>
  <l-choose-area @change="changeArea"></l-choose-area>
</template>

<script lang='ts' setup>
// 区域选择组件
import lChooseArea from '../../components/chooseArea/src/index.vue'

/**
 * 切换地区
 */
let changeArea = (val: any) => {
  console.log('切换地区', val)
}
</script>

<style lang='scss' scoped>
</style>