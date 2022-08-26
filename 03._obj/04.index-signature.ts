/**
 * [index:number] : 这里索引签名的值的类型确定了以后, 该接口中的其他属性名和属性值都要符合这中定义
 * [props:string]: 这里不影响接口中其他属性名和属性值的定义
 */

interface Ist {
  [index: number]: string
}

let obj: Ist = {
  1: 'cheng',
  2: 'shi',
}

interface Testobj {
  [props: string]: number
}

let obj1: Testobj = {
  x: 1,
  y: 2,
  2: 33,
  // 4: 'cheng',  // 这里会报错, 因为属性签名的值必须是number
}

interface Animal {
  name: string
}

interface Dog extends Animal {
  age: number
}

interface Not {
  [index: string]: number | string
  name: string
  lenght: number
}

let not: Not = {
  name: 'cheng',
  lenght: 22,
}

// 只读属性的索引签名
interface Idemo {
  readonly [index: number]: number
}

let arr: Idemo = [1, 3, 4, 5]

// arr[0] = 33 // 这里会报错, 因为索引签名为只读属性

export {}
