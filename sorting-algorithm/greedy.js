
// 贪心算法
const allMoney = [100, 50, 20, 5, 1];  // 表示我们手上有的面值
function changeMoney(n, allMoney) {
  const length = allMoney.length;
  const result = [];    // 存储结果的数组，每项表示对应面值的张数
  for(let i = 0; i < length; i++) {
    if(n >= allMoney[i]) {
      // 如果需要找的钱比面值大，那就可以找，除一下看看能找几张
      result[i] = parseInt(n / allMoney[i]);
      n = n - result[i] * allMoney[i];   // 更新剩下需要找的钱
    } else {
      // 否则不能找
      result[i] = 0;
    }
  }
  
  return result;
}
const result = changeMoney(126, allMoney);
console.log(result);   // [1, 0, 1, 1, 1]



// 获取最大的数字拼接

const nums = [32, 94, 128, 1286, 6, 71];

function getBigNum(nums) {
  nums.sort((a, b) => {
    const ab = `${a}${b}`;
    const ba = `${b}${a}`;
    
    if(ab > ba) {
      return -1;   // ab大，a放前面
    } else {
      return 1;  
    }
  });
  
  return nums;
}

const res = getBigNum(nums);
console.log(res);    // [94, 71, 6, 32, 1286, 128]

