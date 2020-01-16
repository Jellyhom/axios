// 额外属性检查
interface Square {
  color: string,
  area: number
}

interface SquareConfig {
  color?: string // ?:表示可选
  width?: number

  [propName: string]: any // 可以添加其他任意属性
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({ color: 'black', colour: 123 })

// 函数类型
interface SearchFunc {
  (source: string, substring: string): boolean
}

let mySearch: SearchFunc
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub)
  return result > -1
}

// 可索引类型
interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['Blob', 'Fred']

let myStr: string = myArray[0]

class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

interface NotOk {
  [x: number]: Dog
  [x: string]: Animal
}

//
interface Dic {
  [index: string]: number
  length: number
  // name: string // 报错，返回不是number
}

//
interface ReadonlyStringArray {
  readonly [index: number]: string
}
let array: ReadonlyStringArray = ['A', 'B']