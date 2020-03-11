// 默认指向window 没有明确调用者时，this指向window
function pointWin(){
    this.name = "小小飞"
    console.log(this)
}
// pointWin()
// console.log(new pointWin())

// this总是指向调用者
var obj = {
    myName: "小小飞",
    func: function() {
      console.log(this.myName);
    }
  }
  
  obj.func();    // 小小飞

