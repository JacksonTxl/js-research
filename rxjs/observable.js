var Observable = require('rxjs').Observable

const observable = Observable.create(function (observer) {
  observer.next(1)
  observer.next(2)
  setTimeout(function () {
    observer.next(3)
    observer.complete();
  }, 1000)
  observer.next(4)
})
console.log(`just before subscribe`)
observable.subscribe({
  next(val) {
    console.log(`subscribe get value ${val}`)
  },
  error(err) {
    console.log(`error msg ${err}`)
  },
  complete() {
    console.log(`done`)
  },
})
console.log(`just after subscribe`)


