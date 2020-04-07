const PENDING = "pending";
const REJECT = "reject";
const RESOLVE = "resolve";

class MyPromise {
  // 构造函数接收处理方法
  constructor(executor) {
    this._resolveQuene = [];
    this._rejectQuene = [];
    this._status = PENDING;
    this._value = undefined;
    // 构造函数里面创建resolve执行方法
    let _resolve = val => {
      const run = () => {
        if (this._status !== PENDING) return;
        this._status = RESOLVE;
        while (this._resolveQuene.length > 0) {
          const callback = this._resolveQuene.shift();
          callback(val);
          this._value = val;
        }
      };
      setTimeout(run);
    };
    // 创建rejec方法
    let _reject = val => {
      const run = () => {
        if (this._status !== PENDING) return;
        this._status = REJECT;
        while (this._rejectQuene.length > 0) {
          const callback = this._rejectQuene.shift();
          callback(val);
          this._value = val;
        }
      };
      setTimeout(run);
    };

    executor(_resolve, _reject);
  }

  then(resolveFn, rejectFn) {
    // 防止resolve和reject不是方法，导致链式调用失败，所以进行校验是否为方法
    typeof resolveFn !== "function" ? (resolveFn = value => value) : null;
    typeof rejectFn !== "function"
      ? (rejectFn = reason => {
          throw new Error(reason instanceof Error ? reason.message : reason);
        })
      : null;

    // 为了.then的链式调用
    return new MyPromise((resolve, reject) => {
      const fulfilledFn = value => {
        try {
          let x = resolveFn(value);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      };
      const rejectedFn = value => {
        try {
          let y = rejectFn(value);
          y instanceof MyPromise ? y.then(resolve, reject) : resolve(y);
        } catch (error) {
          reject(error);
        }
      };
      // 切换状态，如果已经是reject 或者resolve直接执行then方法
      switch (this._status) {
        case PENDING:
          this._resolveQuene.push(fulfilledFn);
          this._rejectQuene.push(rejectedFn);
          break;
        case RESOLVE:
          fulfilledFn(this._value);
          break;
        case REJECT:
          rejectedFn(this._value);
      }
    });
  }
  catch(rejectedFn) {
    return this.then(undefined, rejectedFn);
  }
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value),
      reason =>
        MyPromise.reject(callback()).then(() => {
          throw reason;
        })
    );
  }
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value));
  }
  static reject(value) {
    return new MyPromise((resolve, reject) => reject(value));
  }
  static all(arr) {
    let index = 0;
    let result = [];
    return new MyPromise((resolve, reject) => {
      arr.forEach((p, i) => {
        MyPromise.resolve(p).then(
          val => {
            index++;
            result[i] = val;
            if (index === arr.length) {
              resolve(result);
            }
          },
          err => {
            reject(err);
          }
        );
      });
    });
  }
}

// const myPromise = new MyPromise((resolve, reject) => {
//   // setTimeout(function() {
//   resolve(1);
//   // }, 1000);
// });
// myPromise
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .then()
//   .then(res => {
//     console.log(res);
//     return new MyPromise((resolve, reject) => {
//       resolve(3);
//     });
//   })
//   .then(res => {
//     console.log(res);
//     throw new Error("reject错误信息测试");
//   })
//   .then(
//     () => {},
//     reject => {
//       console.log(reject);
//     }
//   );

// 测试all
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 100);
});
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 1001);
});

MyPromise.all([p1, p2]).then(res => {
  console.log(res);
});
