interface Ipoint {
  x: number
  y: number
}

let obj: Ipoint = {
  x: 12,
  y: 33,
}

console.log('obj', obj)

// 扩展接口
interface Animal {
  name: string
}

type an = Animal

let a: an = {
  name: 'cheng',
}

interface Cat extends Animal {
  age: number
}

const cat: Cat = {
  name: 'cheng',
  age: 22,
}
console.log('cat', cat)

// 类型别名的拓展
type Hobby = {
  value: string
}

type Bear = Hobby & {
  bol: boolean
}

let bear: Bear = {
  value: 'cheng',
  bol: true,
}

// 向现有接口添加字段
interface My {
  name: string
}

interface My {
  age: number
}

const w: My = {
  name: 'cheng',
  age: 23,
}

// 通过type创建后就不能进行拓展了
// type Me = {
//   name:string
// }

// type Me = {
//   age: 22
// }
// 报错

export {}
