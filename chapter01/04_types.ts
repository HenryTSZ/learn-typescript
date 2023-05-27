export {}
// object 表示一个对象
let a: object
a = {}
a = []
a = function () {}
// a = null // Type 'null' is not assignable to type 'object'

// {} 用来指定对象中包含哪些属性及其类型
// 语法：{属性名：属性类型; 属性名：属性类型; ...}
// 在属性名后面加上?，表示可选属性
let b: { name: string; age?: number }
b = { name: 'henry' }

// [propName: string]: any 表示任意类型的属性
let c: { name: string; age?: number; [propName: string]: any }
c = { name: 'henry', age: 18 }
c = { name: 'henry', age: 18, sex: 'male' }
// c = { age: 18, sex: 'male' } // Property 'name' is missing in type '{ age: number; sex: string; }' but required in type '{ [propName: string]: any; name: string; age?: number | undefined; }'

// 函数结构的类型声明
// 语法：(行参: 类型, 行参: 类型, ...) => 返回值
let d: (a: number, b: number) => number
d = function (a: number, b: number): number {
  return a + b
}

// string[] 表示一个字符串数组
let e: string[]
e = ['henry', 'haha', 'hehe']

// number[] 表示一个数字数组
let f: number[]
f = [1, 2, 3]

// Array<类型> 表示一个数组
let g: Array<number>
g = [1, 2, 3]

// any[] 表示任意类型的数组
let h: any[]
h = [1, 'henry', true]

// 元祖类型，固定长度的数组
let i: [string, number]
i = ['henry', 18]

// 枚举类型
enum Color {
  Red,
  Green,
  Blue
}
let j: Color.Red
let k: Color.Green
let l: Color.Blue

// & 表示两个或者多个类型的集合
let m: { name: string } & { age: number }
m = { name: 'henry', age: 18 }

// 类型别名
type Name = string
let n: Name
type MyType = 1 | 2 | 3 | 4 | 5
let o: MyType
o = 4
