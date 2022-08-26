// // 重载签名
// function makeDate(a: number): void
// function makeDate(timestamp: number): Date
// function makeDate(m: number, d: number, y: number): Date

// // 实现签名
// function makeDate(t: number): Date {
//   return new Date()
// }

function fn(x: boolean): boolean
function fn(x: string): string

function fn(x: boolean | string) {
  return x
}

fn(true)

// 函数中的this的使用方法
interface User {
  admin: boolean
}

interface Filter {
  filter(f: (this: User) => boolean): User[]
  // filter1: ((f:(this:User) => boolean)) => User[]
  // filter: (f: string) => void
}

// 类型别名定义函数
// type testFn = () => void
// // 定义函数接口
// interface demoFn {
//   (): void
//   eat(): void
// }

interface D {
  eat: (fn: string) => string
}

const bd: Filter = {
  filter: function (f: (this: User) => boolean) {
    let user1: User = {
      admin: true,
    }

    let user2: User = {
      admin: false,
    }
    return [user1, user2]
  },
}

const admins = bd.filter(function (this: User) {
  return this.admin
})

console.log('admins', admins)

const args = [1, 2] as const
const angle = Math.atan2(...args)

const arr: number[] = [1, 2, 3]
arr.push(99)
const arr1: [number, string] = [1, '1']
arr1.push(33)
console.log('arr1', arr1)

export {}
