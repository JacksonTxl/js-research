// 函数柯里化
// currying 又称部分求值。一个 currying 的函数首先会接受一些参数，接受了这些参数之后，
// 该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保
// 存起来。待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。

// 柯里化是把一个多参数函数转换为一个嵌套的一元函数的过程
// demo
const add = (x, y) => x + y
// 转化为
const addNew = (x) => (y) => x + y

var currying = function (fn) {
  var args = []
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      ;[].push.apply(args, arguments)
      return arguments.callee
    }
  }
}
var cost = (function () {
  var money = 0
  return function () {
    for (var i = 0, l = arguments.length; i < l; i++) {
      money += arguments[i]
    }
    return money
  }
})()
var cost = currying(cost) // 转化成 currying 函数
cost(100) // 未真正求值
cost(200) // 未真正求值
cost(300) // 未真正求值
alert(cost()) // 求值并输出：600
