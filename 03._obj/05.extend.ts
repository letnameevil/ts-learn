interface BasicAddress {
  name?: string
}

interface AddressWithunit extends BasicAddress {
  name: string
  unit: string
}

// 接口 extends 的时候, 如果有重复的定义, 那么以子接口中的 定义标注为主要
let obj: AddressWithunit = {
  name: 'cheng', // 这里必须要写name这个属性
  unit: 'wuhan',
}

// 多个 extends
interface Color {
  colorName: string
}

interface Circle {
  radius: number
}

interface ColorCircle extends Color, Circle {}

let color: ColorCircle = {
  colorName: 'cheng',
  radius: 22.43,
}

/**
 * 交叉类型
 *
 */

interface A {
  name: string
}

interface B {
  age: number
}

// 交叉类型用于类型别名(&)
type C = A & B

let d: C = {
  name: 'cheng',
  age: 22,
}

function fn(info: A & B) {
  console.log('info', info)
}

fn({ name: 'cheng', age: 222 })


export {}
