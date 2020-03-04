// es 5 实现继承方式

// 0 最简单的类继承
function Father(arg){
  console.log('i am father constructor')
  this.arg = arg
  this.type = ['1', '2']
}
Father.prototype.hello = function (params) {
  console.log(`hello ${params}`)
}

function Children(){
  // 。。。
}

Children.prototype = new Father('白色')
var children1 = new Children()
children1.type.push('3')
console.log(children1.type)

var children2 = new Children()
console.log(children2.type)     // 会导致多个实例 引用缺陷  打印的type都是一样的

console.log(children1.arg)
console.log(children2.arg)      // 多个构造一致




// 1 这种继承不能继承父类的function
// function Father(arg){
//   this.arg = arg
// }
// Father.prototype.hello = function (params) {
//   console.log(`hello ${params}`)
// }

// function Children(){
//   Father.apply(this, arguments)
// }
// var children = new Children(1)
// console.log(children.arg)
// console.log(children.hello)


// 2 组合继承 调用了两次父类的构造函数
// function Father(arg){
//   console.log('i am father constructor')
//   this.arg = arg
// }
// Father.prototype.hello = function (params) {
//   console.log(`hello ${params}`)
// }

// function Children(){
//   Father.apply(this, arguments)
// }
// // 类式继承
// Children.prototype = new Father()


// var children = new Children(1)
// console.log(children.arg)
// children.hello('word')




// 3 寄生式继承 
// function Father(arg){
//   console.log('i am father constructor')
//   this.arg = arg
// }
// Father.prototype.hello = function (params) {
//   console.log(`hello ${params}`)
// }

// function Children(){
//   Father.apply(this, arguments)
// }
// // 类式继承
// Children.prototype = Object.create(Father.prototype)
// Children.prototype.constructor = Children


// var children = new Children(1)
// console.log(children.arg)
// children.hello('word')