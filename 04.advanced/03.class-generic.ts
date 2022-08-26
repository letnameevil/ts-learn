class Teacher<T> {
  name: T
  age: number
  constructor(name: T, age: number) {
    this.name = name
    this.age = age
  }

  setAge(a: number): void {
    this.age = 22
    console.log('(a+this.age)', a + this.age)
  }
}

const t = new Teacher<string>('cheng', 22)

console.log('t.name', t.name)

t.setAge(33)
