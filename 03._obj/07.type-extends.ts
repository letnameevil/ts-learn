type Box<Type> = {
  content: Type
}



type OrNull<Type> = Type | null

type OneOrMany<Type> = Type | Type[]
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
type OneOrManyOrNullString = OneOrManyOrNull<string>

let a: OrNull<number> = 123

let arr: OneOrMany<string> = ['1', '2']

let arr_1: OneOrManyOrNull<string> = 'cheng'

export {}
