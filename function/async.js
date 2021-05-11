function sleep(interval) {
  return new Promise(resolve => {
      setTimeout(resolve, interval);
  })
}

// 用法
async function one2FiveInAsync() {
  for (let i = 1; i <= 5; i++) {
      console.log(i);
      await sleep(1000);
  }
}
// one2FiveInAsync();


const foo = function* () {
  const f1 = yield setTimeout(function () {
    return 1
  }, 1000);
  const f2 = yield setTimeout(function () {
    return 2
  }, 2000);

  console.log(f1);
  console.log(f2);
};
foo().next()


/**
 * 函数表达式的执行方式
 * @param {*} x
 * @returns
 */
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

// async function expression assigned to a variable
var add1 = async function(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then(v => {
  console.log(v);  // 4 秒后打印 60
});

(async function(x) { // async function expression used as an IIFE
  var p_a = resolveAfter2Seconds(20);
  var p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
})(10).then(v => {
  console.log(v);  // 2 秒后打印 60
});
