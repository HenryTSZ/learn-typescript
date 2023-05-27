export {}
// 使用字面了进行类型声明
let a: 10
a = 10
// a = 11 // Type '11' is not assignable to type '10'

// 可以使用 | 来连接多个类型（联合类型）
let b: 'male' | 'female'
b = 'male'
b = 'female'

let c: boolean | number
c = true
c = 123

// any 表示任意类型，设置 any 后，相当于关闭了 TS 的类型检查
// let d: any
// 声明变量如果不指定类型，TS 解析器会自动推断为 any 类型，叫做隐式 any
let d
d = 123
d = '123'
d = true

// unknown 表示未知类型，可以使用 unknown 声明
let e: unknown
e = 123
e = true
e = '123'

let f: unknown

let s: string
// d 的类型是 any，它可以赋值给任意类型而不报错，无形中会改变别的变量的类型
s = d

// unknown 实际上就是一个类型安全的 any
// unknown 类型的变量，只能赋值给 any 及 unknown 类型的变量，而不能赋值给其他类型
d = e
f = e
// 上面虽然给 e 赋值为 string，但赋值给 s 仍然报错
// s = e // Type 'unknown' is not assignable to type 'string'.
// 但我们可以使用下面两种方式将 unknown 赋值给 string，前提是 unknown 类型的变量是 string
// 方式一：类型断言
s = e as string
s = <string>e
// 方式二：类型判断
if (typeof e === 'string') {
  s = e
}

// void 表示没有任何返回值的函数
function sum(a: number, b: number): void {
  console.log(a + b)
  // return a + b // Type 'number' is not assignable to type 'void'
  // return null // Type 'null' is not assignable to type 'void'
  // return undefined // 可以
  // return // 可以
  // 没有 return // 可以
}

// never 表示永远不会返回
function error(message: string): never {
  throw new Error(message)
}

function neverError(message: string): never {
  while (true) {}
}
