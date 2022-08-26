function fn(person: { name: string; age: number }): void {
  console.log('person.name', person.name)
}

interface Person {
  name: string
  age: number
}

function bo(person: Person): void {
  console.log('person.name', person.name)
}

bo({ name: 'cheng', age: 2 })

type Tperson = {
  name: string
  age: number
}

function boo(person: Tperson): void {
  console.log('person.name', person.name)
}

boo({ name: 'evil', age: 22 })

export {}
