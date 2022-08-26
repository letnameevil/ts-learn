interface Box {
  contents: unknown
}

let x: Box = {
  contents: 'cheng',
}

// console.log('x', x.contents.toString())  // 报错,因为接口中定义了contents为unknown类型, 所以无法确定x.contents 为字符串
console.log('x', (x.contents as string).toString()) // 解决方法一: 断言
if (typeof x.contents === 'string') x.contents.toString() // 解决方法二: 通过类型范围缩小的形式

// 函数的重载
interface NumberBox {
  value: number
}

interface StringBox {
  value: string
}

interface BooleanBox {
  value: boolean
}

function setContents(box: NumberBox): void
function setContents(box: StringBox): void
function setContents(box: BooleanBox): void
function setContents(box: { value: any }) {
  console.log('box', box)
}
setContents({ value: 123 })
setContents({ value: 'cheng' })
setContents({ value: true })

// 以上写法的简单写法----接口的泛型
interface D<Type> {
  value: Type
}

let boxA: D<string> = {
  value: 'cheng',
}

// 函数的泛型
function fn<T>(a: T): T[] {
  return [a]
}

fn(12)

export {}
