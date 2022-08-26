function foo(id: number | string): number | string {
  console.log('foo', id)
  return id
}

console.log(foo(12))
console.log("foo('ox123')", foo('ox123'))

function bar(x: string[] | string) {
  console.log('x', x)
}

// let arr: number[] = [1, 2, 34, 4]
// let arr1: Array<string> = ['cheng', 'shi']

bar(['1', '2'])
// bar(23)
bar('cheng')

export {}
