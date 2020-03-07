// 模拟实现new操作符
// new操作符实现了哪些内容
// 1、创建了一个全新的对象。
// 2、这个对象会被执行[[Prototype]]（也就是__proto__）链接。
// 3、生成的新对象会绑定到函数调用的this。
// 4、通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
// 5、如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。

function newOperator (ctor) {

  if(typeof ctor !== 'function'){
    throw 'newOperator function the first param must be a function';
  }
  // ES6 new.target 是指向构造函数
  newOperator.target = ctor;
  // 1.创建一个全新的对象，
  // 2.并且执行[[Prototype]]链接
  // 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
  var newObj = Object.create(ctor.prototype);
  // ES5 arguments转成数组 当然也可以用ES6 [...arguments], Aarry.from(arguments);
  // 除去ctor构造函数的其余参数
  var argsArr = [].slice.call(arguments, 1);
  // 3.生成的新对象会绑定到函数调用的`this`。
  // 获取到ctor函数返回结果
  var ctorReturnResult = ctor.apply(newObj, argsArr);
  // 小结4 中这些类型中合并起来只有Object和Function两种类型 typeof null 也是'object'所以要不等于null，排除null
  var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
  var isFunction = typeof ctorReturnResult === 'function';
  if(isObject || isFunction){
      return ctorReturnResult;
  }
  // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
  return newObj;
}


// 验证
// 例子3 多加一个参数
function Student(name, age){
  this.name = name;
  this.age = age;
  // this.doSth();
  // return Error();
}
Student.prototype.doSth = function() {
  console.log(this.name);
};
var student1 = newOperator(Student, '轩辕', 18);
var student2 = newOperator(Student, 'Rowboat', 18);
// var student1 = new Student('轩辕');
// var student2 = new Student('Rowboat');
console.log(student1, student1.doSth()); // {name: '轩辕'} '轩辕'
console.log(student2, student2.doSth()); // {name: 'Rowboat'} 'Rowboat'

student1.__proto__ === Student.prototype; // true
student2.__proto__ === Student.prototype; // true
// __proto__ 是浏览器实现的查看原型方案。
// 用ES5 则是：
Object.getPrototypeOf(student1) === Student.prototype; // true
Object.getPrototypeOf(student2) === Student.prototype; // true