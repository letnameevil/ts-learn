// 定义泛型的时候可以添加限制条件用 extends

// 限定泛函必须有length 这个属性

// function fn<T>(a: T, b: T): T {
//   if (a.length > b.length) {
//     return a
//   } else {
//     return b
//   }
// }

// fn(2, 4)

type Ilength = {
  length: number
}

function fn<T extends { length: number }>(a: T, b: T): T {
  // 传入的T类型必须要有 length 这个属性
  if (a.length > b.length) {
    return a
  } else {
    return b
  }
}

fn('cheng', 'shi') // 这里传入的参数就必须要求要有 length 这个属性, 而且值必须为 number类型

// 指定类型参数
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2)
}

// combine([1, 2, 3], ['cheng']) // 报错
combine<string | number>([1, 2, 3], ['cheng']) // 正确使用




export {}
