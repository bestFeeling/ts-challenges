

// K是一个联合类型 可以遍历
// 遍历一般写法: [P in K]
// 无法直接访问T[P] 因为P可能不在T中
// 对K进行约束 使K继承于 keyof T

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}