// 断言
// const myCanvas = document.getElementById('cheng') as HTMLElement

// const myCanvas_1 = <HTMLElement>document.getElementById('evil')

const x = 'hello' as unknown as number
console.error('x', x)

// 确定值，只能写对应的值
let str: 'cheng' = 'cheng'
// str = 'shji'  // 报错

function bar(s: 1 | 2) {
  console.error('s', s)
}

bar(1)

interface Options {
  name: string
}

function opt(x: Options | 'name') {
  console.log('x', x)
}

opt('name')

// 重点
function handleReq(url: string, method: 'GET' | 'POST') {
  console.log('method', method)
}

const req = {
  url: 'https://www.baidu.com',
  method: 'GET',
} // as const  // 方式一 as const 直接给定类型，传入之前就已经判断了类型

// 对于handleReq来说第一个参数为string类型， req.url 可以确定为string类型， 但是第二个参数虽然也可以确定为string类型，但是并不能确定它为GET 或者 POST
// 所有有两种方式解决这个问题
handleReq(req.url, <'GET'>req.method) // 方式二
handleReq(req.url, req.method as 'GET') // 方式三 等价于方式二 只是写法不同

export {}
