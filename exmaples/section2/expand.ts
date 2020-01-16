let input: [number, number] = [1, 2]

function f([a, b]: [number, number]) {
  console.log(a, b)
}
f(input)

let o = { a: 1, b: 2, c: 3 }

let { a, b }: {a: number, b: number} = o
let { a: c, ...r } = o
let t = r.b + r.c
console.log(t)

function fun(obj: {a:string, b?:number}) {
  let {a, b=100} = obj
}

type C = { a: string, b?: number }
function f1({a,b}: C):void {}

function f2({ a, b = 0 } = {a: ''}): void {}
f2({a:'yes'})
f2({})
f2() // 报错，类型推断a