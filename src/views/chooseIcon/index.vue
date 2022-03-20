<template>
  <l-choose-icon title="选择图标" v-model:visible="visible">选择图标</l-choose-icon>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

// 图标选择器弹框是否可见
let visible = ref<boolean>(false)

</script>

<style lang='scss' scoped>
</style>