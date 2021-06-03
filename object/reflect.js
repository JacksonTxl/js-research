// Reflect
const o = {}
const flag = Reflect.defineProperty(o, 'foo', { value: 'bar' })
if (flag) {
  console.log(JSON.stringify(o.foo))
  console.log('success')
} else {
  console.log('failure')
}
