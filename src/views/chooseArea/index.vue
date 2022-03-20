<template>
  <l-choose-area @change="changeArea"></l-choose-area>
</template>

<script lang='ts' setup>

/**
 * 切换地区
 */
let changeArea = (val: any) => {
  console.log('切换地区', val)
}

</script>

<style lang='scss' scoped>
</style>