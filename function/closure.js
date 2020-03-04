// 自调用
(function(){
  // 执行自调用内容
  // ....
})()


// 逐层调用
function fun1(){
  var a = 0
  console.log(a)
  return function() {
    a++
    console.log(a)
  }
}
//注意这种调用的结果:
fun1();
fun1()();
fun1()();
// 输出 0 0 1 0 1
//解释:每一次先执行fun1(),a都会初始化为0,再执行匿名函数,a++得到
var res = fun1()
res()
res()
res()
// 输出 0 1 2 3
//解释:fun1()只执行一次,所以a=0只执行一次,以后每次执行res()是在执行匿名函数,每执行一次,a自增一次
// https://juejin.im/post/5e58a0c2e51d4526c932b9c3

// 闭包形式
function fun1(){
  return function(){
      //闭包主体
  }
}
var res=fun1();
res();//闭包函数调用



(function(i){   
	//闭包主体
})(i);//闭包函数自调用


// 应用
for (var i = 1; i <= 10; i++) {
	(function (j) {
		setTimeout(function () {
			console.log(j);
		}, 1000);
	})(i);
}