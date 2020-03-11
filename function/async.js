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