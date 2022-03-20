/**
 * 数据类型接口
 */
export interface MenuItem {
  // 导航名字
  name: string
  // 导航标识
  index: string,
  // 导航图标
  icon?: string,
  // 处理之后的图标组件（不是直接使用图标字符串，而是使用之前封装好的图标组件）
  i?: any,
  // 导航的子菜单
  children?: MenuItem[]
}