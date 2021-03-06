// 静态属性
class Grid {
  static origin = { x: 0, y: 0 }

  scale: number

  constructor(scale) {
    this.scale = scale
  }

  calculateDistanceFromOrigin(point: { x: number, y: number }) {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)