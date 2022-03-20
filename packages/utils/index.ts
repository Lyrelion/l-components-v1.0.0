/**
 * 把驼峰转换为横杠连接
 * @param value 
 */
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
};