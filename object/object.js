// 数据属性和访问器属性

let person = {}
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'Nicholas'
})
console.log(person.name) // "Nicholas"
delete person.name
console.log(person.name) // "Nicholas"

// 访问器属性不包含数据值。相反，它们包含一个获取（getter）函数和一个设置（setter）函数，不
// 过这两个函数不是必需的。在读取访问器属性时，会调用获取函数，这个函数的责任就是返回一个有效
// // 的值。在写入访问器属性时，会调用设置函数并传入新值，这个函数必须决定对数据做出什么修改。
// 定义一个对象，包含伪私有成员 year_和公共成员 edition
let book = {
  year_: 2017,
  edition: 1
}
Object.defineProperty(book, 'year', {
  get() {
    return this.year_
  },
  set(newValue) {
    if (newValue > 2017) {
      this.year_ = newValue
      this.edition += newValue - 2017
    }
  }
})
book.year = 2018
console.log(book.edition) // 2

// 原型访问，判断是否有key值在对象中，并且不是在原型链中
function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && name in object
}

// 重写构造函数上的原型之后再创建的实例才会引用新的原型。而在此之前创建的实例仍然会引用最初的原型。
function Person() {}
let friend = new Person()
Person.prototype = {
  constructor: Person,
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName() {
    console.log(this.name)
  }
}
friend.sayName() // 错误

// 原型 构造函数  实例 三者之间的关系

function SuperType() {
  this.property = true
}
SuperType.prototype.getSuperValue = function () {
  return this.property
}
function SubType() {
  this.subproperty = false
}
// 继承 SuperType
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.subproperty
}
let instance = new SubType()
// console.log(instance.getSuperValue()) // true




