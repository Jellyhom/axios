function f(shouldInitialize) {
  if (shouldInitialize) {
    var x = 10
  }
  return x
}

f(true) // 10
f(false) // undefined，变量提升

function sumMatrix(matrix) {
  var sum = 0
  for(var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i]
    for (var i = 0; i < currentRow.length; i++) { // 结果错误，因为这里的i会覆盖掉外面的i
      sum += currentRow[i]
    }
  }
  return sum
}

var matrix = [
  [1, 2, 3],
  [4, 5, 6]
]

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100 * i)
}
// 输出10个10
// 解决1，立即执行函数
for (var i = 0; i < 10; i++) {
  (i => {
    setTimeout(() => {
      console.log(i)
    }, 100 * i)
  })(i)
}