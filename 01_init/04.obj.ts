function fn(obj: { x: number; y: string }) {
  console.log('x+y ', obj.x + obj.y)
}

fn({ x: 19, y: 'cheng' })

// 可选？
function bar(obj: { x: number; y?: string }) {
  if (obj.y) return console.log('x+y ', obj.x + obj.y)
  console.log('x+y ', obj.x)
}

bar({ x: 199 })
bar({ x: 200, y: 'cheng' })

export {}
