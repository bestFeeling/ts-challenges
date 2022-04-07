// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;


// infer 搭配extends使用 效果等于解构
type First<T extends any[]> = T extends [infer f, ... infer r] ? f : never