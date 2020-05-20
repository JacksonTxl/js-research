// 代码重构

// 1、提炼函数
// 原则
// 避免出现超大函数。
// 独立出来的函数有助于代码复用。
// 独立出来的函数更容易被覆写。
// 独立出来的函数如果拥有一个良好的命名，它本身就起到了注释的作用。

// 2、合并重复的条件片段
// 3、把条件分支语句提炼成函数
// 4、合理使用循环
// 5、提前让函数退出代替嵌套条件分支
var del = function (obj) {
  var ret;
  if (!obj.isReadOnly) {
    // 不为只读的才能被删除
    if (obj.isFolder) {
      // 如果是文件夹
      ret = deleteFolder(obj);
    } else if (obj.isFile) {
      // 如果是文件
      ret = deleteFile(obj);
    }
  }
  return ret;
};

var del = function (obj) {
  if (obj.isReadOnly) {
    // 反转 if 表达式
    return;
  }
  if (obj.isFolder) {
    return deleteFolder(obj);
  }
  if (obj.isFile) {
    return deleteFile(obj);
  }
};
// 6、传递对象参数代替过长的参数列表

// 7、尽量减少参数数量
// 8、少用三目运算符
// 9、分解大型类
// 10、用 return 退出多重循环