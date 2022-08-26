// 接口的泛型
interface My<T> {
  a: T
}

//  接口中定义函数的泛型
interface Fnn {
  <T>(arg: T): T // 第一中写法
  // <B>(arg: B): B
}

// 函数表达式直接指明函数的类型
function fn<T>(a: T): T {
  return a
}

// 如果是函数赋值的话可以直接用接口
let myFn: Fnn = function fn<T>(a: T) {
  return a
}

interface Foo<T> {
  (arg: T): T
}

// 这里在实现这个接口的情况下,要给泛型指定值
let myFn1: Foo<string> = function fn<T>(a: T) {
  return a
}
// 如果是箭头函数的定义泛型一定要放在括号的前面
let myFn2: Foo<number> = <T>(a: T) => {
  return a
}

myFn1('cheng')

export {}
