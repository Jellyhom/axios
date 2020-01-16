// 继承类型
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0

// 混合类型
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = (function(start:number) {
    
  }) as Counter

  counter.interval = 123

  counter.reset = function(){

  }
  
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0

// 接口继承类
class Control {
  private state: any
}

interface SelectableControl extends Control {
  select()
}

class Button extends Control implements SelectableControl {
  select() {

  }
}

class TextBox extends Control {
  select() {}
}

class ImageC implements SelectableControl {
  select() {}
}