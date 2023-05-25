// [解决 cannot redeclare block-scoped variable 问题_richest_qi的博客-CSDN博客](https://blog.csdn.net/qzw752890913/article/details/118334222)
export {}

// 声明一个变量 a,同时指定他的类型为 number
let a: number

// a 的类型为 number，在以后的使用过程中，a 的值只能是 number
a = 1
a = 2
a = 3

// a = '1' // Type 'string' is not assignable to type 'number'.

// 声明一个变量 b,同时指定他的类型为 string
let b: string

b = '1'
b = '2'
b = '3'

// b = 1 // Type 'number' is not assignable to type 'string'.

// 声明一个变量 c,同时指定他的类型为 boolean,默认值为 true
// let c: boolean = true

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = true

c = false

// c = 1 // Type 'number' is not assignable to type 'boolean'.

// js 中的函数是不考虑参数的类型和个数的
// function sum(a, b) {
//   return a + b
// }

// console.log(sum(123, 456)) // 579
// console.log(sum(123, '456')) // 123456;

function sum(a: number, b: number): number {
  return a + b
}

console.log(sum(123, 456)) // 579
// console.log(sum(123, '456')) // Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(sum(123, 456, 789)); // Expected 2 arguments, but got 3.
// console.log(sum(123)); // Expected 2 arguments, but got 1.
