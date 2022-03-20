/**
 * 需要递归的时候，推荐使用 .tsx，不推荐使用 .vue
 * 注意：在 .tsx 文件中，不可以使用 setup 语法糖
 */

import { defineComponent, PropType, useAttrs } from 'vue'
import { MenuItem } from './types'
// 引入 element-plus Icon
import * as Icons from '@element-plus/icons-vue'
import './styles/index.scss'

export default defineComponent({
  props: {
    // 菜单数据
    data: {
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
  },

  setup(props, ctx) {
    /**
     * 渲染无限层级菜单
     * @param data 渲染无限层级菜单数据（树形结构）
     * @returns 函数会返回一段 jsx 的代码
     */
    let renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        // 每个菜单的图标
        item.i = (Icons as any)[item[props.icon!]]

        // 处理 el-sub-menu 的插槽
        // 在 tsx 中，处理 vue 的插槽（插槽实际是一个对象）
        let slots = {
          // 使用 el-sub-menu 里面名为 title 的插槽
          title: () => {
            return (
              <>
                <item.i />
                <span>{item[props.name]}</span>
              </>
            )
          },
        }

        // 递归渲染 children
        if (item[props.children!] && item[props.children!].length) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item[props.children!])}
            </el-sub-menu>
          )
        }

        // 正常渲染普通的菜单（没有子菜单的菜单）
        return (
          <el-menu-item index={item[props.index]}>
            <item.i />
            <span>{item[props.name]}</span>
          </el-menu-item>
        )
      })
    }

    // $attrs 可以在 组件标签中直接使用，不需要在 props 中接收
    let attrs = useAttrs()
    console.log('menu.tsx', attrs)

    // 在 .tsx 中，要先 return 一个函数，再 return 一段代码
    return () => {
      return (
        // 此处不支持 v- 指令的形式
        <el-menu
          class="menu-icon-svg"
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}>
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  },
})
