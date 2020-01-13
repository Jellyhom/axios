function warnUser(): void { // null / undefined
  console.log('This is my waring message')
  return 
}

let unusable: void = undefined
unusable = null

// null
let u: undefined = undefined
let n: null = undefined
u = null
// null和undefined是 所有类型的子类型，可以赋值给父类型
// 但是加tsc index.ts --strictNullChecks会检查空值，则下面代码会报错
let num: number = 1
num = null

// never 不存在的类型，也是任何类型的子类型，但是没有子类型，所以不能被赋值其他类型
function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error('something failed')
}

function infiniteLoop(): never {
  while (true) {

  }
}

// object
declare function create(o: object | null): void

create({prop: 0})
create(null)
create(undefined)

// 类型断言
let someValue:any = 'this is a string'
// let strLength:number = (<string>someValue).length // 方式一：将someValue转为string
let strLength:number = (someValue as string).length // 方式二
