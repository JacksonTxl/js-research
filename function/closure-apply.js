// 这种使用 AOP 的方式来给函数添加职责，也是 JavaScript 语言中一种非常特别和巧妙的装饰
// 者模式实现。

Function.prototype.before = function (beforefn) {
  var __self = this; // 保存原函数的引用
  return function () {
    // 返回包含了原函数和新函数的"代理"函数
    beforefn.apply(this, arguments); // 执行新函数，修正 this
    return __self.apply(this, arguments); // 执行原函数
  };
};
Function.prototype.after = function (afterfn) {
  var __self = this;
  return function () {
    var ret = __self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};
var func = function () {
  console.log(2);
};
func = func
  .before(function () {
    console.log(1);
  })
  .after(function () {
    console.log(3);
  });
func();
//   1 2 3
