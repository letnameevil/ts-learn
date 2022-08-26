function log<Type>(a: Type): Type {
  if (typeof a === 'string') {
    console.log('a.lenght', a.length)
  }
  console.log('执行完成')
  return a
}

log('cheng')
log(123)

function identity<Type>(arg: Type): Type {
  return arg
}

let myIdentity: <T>(arg: T) => T = identity // 用箭头函数的时候泛型类型要写的前面, 这里要区别一下断言
let myIdentity1: { <T>(a: T): T } = identity // 第二种定义函数的方法

// 泛型放的位置不同
type sayType<T> = (a: T) => void // 给Type定义一个泛型
type sayType2 = <T>(a: T) => void // 给Type类型的函数定义个泛型

// type 和interface 定义函数
// type obj = {
//   fn(): void  // es6中的简写
//   bar: () => void // 普通的写法
// }
// interface bbb {
//   fn(): void
//   bar: () => void
// }

// type demoFn = () => void  // 只能这么写

export {}
