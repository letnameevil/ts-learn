// 函数类型注解
function greeter(fn: (a: number) => void) {
  fn(3)
}

function bar(a: number) {
  console.log('a', a)
}

greeter(bar)

type tFn = (a: number) => void

function fnn(f: tFn) {
  f(123)
}

fnn(bar)

// 泛型函数

// 普通写法
function getArr(arr: number[]): any {
  console.log('arr', arr)
}

getArr([1, 2, 3, 6])

// 泛型函数写法
function getArr_t<T>(arr: T[]): T {
  return arr[0]
}

getArr_t([1, 2, 3])

getArr_t<string>(['a', 'b', 'c'])
// getArr_t<number>(['a','b','c']) // 这里会报错因为指定了它的泛型T 为number

function map<I, O>(arr: I[], func: (arg: I) => O): O[] {
  return arr.map(func)
}

// 这里I为数字类型， O为string类型
map([1, 2, 3], (n) => {
  // n.toString()
  n.toString()
})

export {}


