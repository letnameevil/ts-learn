
type Point = {
  x: number
  y: number
}


type Id = number | string

function printId(id: Id) {
  console.log('id', id)
}

printId('CHENG')
printId(22)

function fn(obj: Point) {
  console.log('obj', obj)
}

fn({ y: 1, x: 2 })

export {}
