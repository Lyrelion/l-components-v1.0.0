<template>
  <div style="display: flex">

    <!-- 固定层数的导航菜单（最多二级） -->
    <div style="flex: 1">
      <l-menu :data="data1" defaultActive="1" name="a" index="b" icon="c" children="d"></l-menu>
    </div>

    <!-- 无限层级菜单（.jsx） -->
    <div style="flex: 1">
      <!-- <l-infinite-menu
        :data="data2"
        defaultActive="2"
        active-text-color="red"
        name="a"
        index="b"
        icon="c"
        children="d"
      ></l-infinite-menu> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * 下面的测试数据，用户均使用了自定义键名
 */

// 固定层数的导航菜单（最多二级）
let data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document',
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document',
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
      },
    ],
  },
]

// 无限层级菜单（.jsx）
let data2 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document',
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document',
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'Document',
            d: [
              {
                a: '导航3-1-1-1',
                b: '3-1-1-1',
                c: 'Document',
                d: [
                  {
                    a: '导航3-1-1-1-1',
                    b: '3-1-1-1-1',
                    c: 'Document',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]
</script>

<style lang="scss" scoped></style>
