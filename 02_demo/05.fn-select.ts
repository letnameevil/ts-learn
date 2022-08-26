// function fn(n?: number = 100) {
//   // 报错 // 可选参数和参数的默认值不能同时存在
//   console.log('n', n)
// }

function bar(n: number = 200) {
  // 这里就不能写可选参数了
  console.log('n', n)
}

// fn(23)

// fn()

export {}
