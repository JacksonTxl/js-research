# demo1：
```
    var dtd = $.Deferred(); // 新建一个Deferred对象
　　var wait = function(dtd){
　　　　var tasks = function(){
　　　　　　alert("执行完毕！");
　　　　　　dtd.resolve(); // 改变Deferred对象的执行状态
　　　　};

　　　　setTimeout(tasks,5000);
　　　　return dtd.promise(); // 返回promise对象
　　};
　　var d = wait(dtd); // 新建一个d对象，改为对这个对象进行操作
　　$.when(d)
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });
　　d.resolve(); // 此时，这个语句是无效的
```
# demo2：
将deferred变成wait的内部方法，可以避免被外部调用
```
    var wait = function(){
　　　　var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
　　　　var tasks = function(){
　　　　　　alert("执行完毕！");
　　　　　　dtd.resolve(); // 改变Deferred对象的执行状态
　　　　};

　　　　setTimeout(tasks,5000);
　　　　return dtd.promise(); // 返回promise对象
　　};
　　$.when(wait())
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });
```
# demo3：
直接将wait传入deferred，deferred接收方法名。
```
    $.Deferred(wait)
    .done(function(){ alert("哈哈，成功了！"); })
    .fail(function(){ alert("出错啦！"); });
    
```
jQuery规定，$.Deferred()可以接受一个函数名（注意，是函数名）作为参数，$.Deferred()所生成的deferred对象将作为这个函数的默认参数。
# demo4：
直接在wait对象上部署deferred接口。这里的关键是dtd.promise(wait)这一行，它的作用就是在wait对象上部署Deferred接口。正是因为有了这一行，后面才能直接在wait上面调用done()和fail()。
```
    var dtd = $.Deferred(); // 生成Deferred对象
　　var wait = function(dtd){
　　　　var tasks = function(){
　　　　　　alert("执行完毕！");
　　　　　　dtd.resolve(); // 改变Deferred对象的执行状态
　　　　};
　　　　setTimeout(tasks,5000);
　　};
　　dtd.promise(wait);
　　wait.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });
　　wait(dtd);
```
# 总结：
* $.Deferred() 生成一个deferred对象。
* deferred.done() 指定操作成功时的回调函数
* deferred.fail() 指定操作失败时的回调函数
* deferred.promise() 没有参数时，返回一个新的deferred对象，该对象的运行状态无法被改变；接受参数时，作用为在参数对象上部署deferred接口。
* deferred.resolve() 手动改变deferred对象的运行状态为"已完成"，从而立即触发done()方法。
* deferred.reject() 这个方法与deferred.resolve()正好相反，调用后将deferred对象的运行状态变为"已失败"，从而立即触发fail()方法。
* $.when() 为多个操作指定回调函数。
* deferred.then()
有时为了省事，可以把done()和fail()合在一起写，这就是then()方法。
    ```
   $.when($.ajax( "/main.php" ))
    .then(successFunc, failureFunc );
    ```
    如果then()有两个参数，那么第一个参数是done()方法的回调函数，第二个参数是fail()方法的回调方法。如果then()只有一个参数，那么等同于done()。
* deferred.always()
这个方法也是用来指定回调函数的，它的作用是，不管调用的是deferred.resolve()还是deferred.reject()，最后总是执行。
    ```
   $.ajax( "test.html" )
   .always( function() { alert("已执行！");} );
    ```