// 定义数组的第一种方法
let arr: number[] = [1, 2, 3]
console.log('arr', arr)
// 定义数组的第二种方法
let arr2: Array<number> = [1, 2, 3]
console.log('arr2',arr2)

// 函数
function bar(name: string, age: number): void {
  console.log('name', name.toUpperCase()) // toUpperCase将应为转换为大写
  console.log('age', age)
}

bar('chE2ng', 22)

export {}
