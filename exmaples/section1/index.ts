enum Color {
  Red = 1,
  Green,
  Blue
}

let c:Color = Color.Blue
let colorName: string = Color[2]

console.log(c)
console.log(colorName)