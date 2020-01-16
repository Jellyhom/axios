interface LabelValue {
  label: string
}

// function printLabel(labelObj: { label: string }) {
//   console.log(labelObj.label)
// }

function printLabel(labelObj: LabelValue) {
  console.log(labelObj.label)
}

let obj = { size: 10, label: 'size 10 object' }
printLabel(obj)

// 可选属性
interface Square {
  color: string,
  area: number
}

interface SquareConfig {
  color?: string, // ?:表示可选
  width?: number
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

let mySquare = createSquare({ color: 'black' })

// 只读属性
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 10 }

let s: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = s
s = ro as number[]