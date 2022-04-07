
// 首先是做入参类型约束---一个可以放任何东西的数组且不可修改，那就是T extends readonly any[]

// 如果是访问键 可以写  P in keyof T
// 如果是访问值的话  固定用 P in T[numnber]

// type TupleToObject<T extends readonly any[]> = {
//   [P in keyof T ] : P
// }

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]] : P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type res = TupleToObject<typeof tuple>;

type error = TupleToObject<[1, 2]>