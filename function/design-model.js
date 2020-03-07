// 设计模式

// 1.工厂模式 工厂函数就是做一个对象创建的封装，并将创建的对象return出去
function newObj(name, age){
  var obj = new Object()
  obj.name = name
  obj.age = age
  return obj
}

// 2.单例模式 只允许存在一个实例的模式
var Instance = (function(){
  var obj;
  return function () {
    if(!obj){obj = new Object()}
    return obj
  }
})()
var instance = Instance()

// 3.观察者模式 又称发布订阅者模式，经典案例：事件监听，一个元素同时监听多个同类型事件，元素对象即为发布者，每一个事件处理函数即为订阅者。

// 4.策略模式  
// 定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换，从而避免很多if语句，
// 曾经学过最简单的策略模式雏形就是使用数组的方式解决传入数字得到对应星期几问题的算法。

var obj = {
  A: function (salary) {
    return salary * 3
  },
  B: function (salary) {
    return salary * 2
  },
  C: function (salary) {
    return salary * 1
  }
}
function salaryCalc(level, salary){
  return obj[level](salary)
}
console.log(salaryCalc('B', 5000))

// 4.代理模式
// 代理模式（Proxy），为其他对象提供一种代理以控制对这个对象的访问，为了不暴露执行对象的部分代码

var girl = function(name){
  this.name = name;
}
//隐藏复杂，不愿意修改的的方法
var boy = function(girl){
  this.girl = girl;
  this.send = function(gift){
      alert("你好："+this.girl.name+",给你一个"+gift);
  }
}
var proxyBro = function(girl){
  this.send = function(gift){
      new boy(girl).send(gift);
  }
}
var pro = new proxyBro(new girl("Lisa"));
pro.send("么么哒");
pro.send("玫瑰花");