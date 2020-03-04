// Proxy对象用来给一些基本操作定义自定义行为（比如查找，赋值，枚举，函数调用等等） 基本用法
let handler = {
  get: function (target, name) {
    if (!(name in target)) {
      return `sorry,${name} not found in ${JSON.stringify(target)}`
    } else {
      return target[name]
    }
  }
}

let p = new Proxy({}, handler)
p.a = 1
p.b = 2

console.log(p.a, p.b)
console.log(p.c)

// Reflect 
// Reflect 是一个内置的对象，提供拦截 JavaScript 操作的方法。
// 这些方法与proxy的 handlers相同。Reflect不是一个函数对象，因此它是不可构造的。





//使用Reflect和Proxy实现响应式

function bindReactive(target) {
  // 先判断target是不是对象，不是则返回
  if (typeof target !== 'object' || taret === null) {
    return target
  }

  // 因为Proxy原生支持数组，所以这里不需要自己实现
  // if (Array.isArray(target)) {
  //    target.__proto__ = newPrototype
  // }

  // 传给proxy的handler
  const handler = {
    get(target, key) {
      const reflect = Reflect.get(target, key)
      // return bindReactive(reflect)
      return reflect
    },
    set(target, key, value) {
      if (value === target[key]) {
        return true
      }
      // 这里可以更具是否是已有的key,做不同的操作
      if (Reflect.has(target, key)) {
        console.log(`${JSON.stringify(target)} has ${key}`)
      } else {
        console.log(`${key} not found in target`)
      }
      const succuss = Reflect.set(target, key, val)
      // 设置成功与否
      return success

    },
    deleteProperty(target, key) {
      const success = Reflect.deleteProperty(target, key)
      // 删除成功与否
      return success
    }
  }

  // 生成proxy对象
  const proxy = new Proxy(target, handler)
  return proxy

}