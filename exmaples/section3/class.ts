interface ClockInterface { // 实例接口
  currentTime: Date
  setTime(d: Date)
}

interface ClockConstructor { // 构造器接口
  new(hour: number, minute: number)
}

class Clock implements ClockInterface {
  currentTime: Date

  constructor(h:Number, m: number) {
    
  }

  setTime(d: Date) {

  }
}