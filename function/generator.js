// 迭代器generator
// function *g1(){
//   yield '1'
//   yield '2'
// }

// function *g2(){
//   yield '3'
//   for(let g of g1()){
//     console.log(g)
//   }
//   yield '4'
// }

// for (let v of g2()){
//   console.log(v);
// }

function* foo(x) {
  console.log(x)
  const y = x * (yield)
  return y
}
// 启动foo(...)
const it = foo(6)
it.next()
const res = it.next(7)
// console.log(res.value)

// 注释：

// 首先，传入6作为参数x。然后调用 it.next()，这会启动 *foo(..)。

// 在 *foo(..) 内部，开始执行语句 const y = x ...,但是就遇到了一个yield表达式。它就会在这一点上暂停 *foo(..)(在赋值语句中间！)，并在本质上要求调用代码为 yield 表达式提供一个结果值。

// 接下来，调用 it.next(7)``，这一句把值7传回被暂停的 yield` 表达式的结果。

// 所以，这时赋值语句实际上就是 const y = 6 * 7。现在，return y 返回值42作为调用 it.next(7)的结果。

// 注意，这里有一点非常重要，yield和next(..)调用有一个不匹配。一般来说，需要的 next(..)调用要比 yield语句多一个，上面代码片段有一个yield和两个next(..)调用。

// 为什么会有这个不匹配呢？
// 因为第一个 next()总是启动一个生成器，并运行到第一个 yield处。不过，是第二个 next(...)调用完第一个被暂定的yield表达式，第三个 next()调用完成第二个yield，以此类推。

// 数组快速变成迭代器
let arr = ['hello', 'world']
let iter = arr[Symbol.iterator]()

console.log(iter.next()) // { done: false, value: 'foo' }
console.log(iter.next()) // { done: false, value: 'bar' }
console.log(iter.next()) // { done: true, value: undefined }

console.log(arr.reduce((pre, current) => pre + current))


const map = new Map()
const weakMap = new WeakMap()

