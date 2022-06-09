var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var width = ctx.canvas.width
var height = ctx.canvas.height

function draw() {
  var img = new Image() // 创建 img 元素
  img.setAttribute('crossorigin', 'anonymous')
  return new Promise((resolve, reject) => {
    img.onload = function () {
      // 绘制背景图片
      ctx.drawImage(img, 0, 0)
      // 绘制名称
      ctx.fillStyle = '#F5D0A2'

      ctx.font = '34px Source Han Sans CN'
      ctx.fillText('Hello world', 326, 265)
      // 绘制手机号
      ctx.font = '34px Source Han Sans CN'
      ctx.fillText('15909188722', 279, 340)
      // 推荐码
      ctx.fillText('C001335540', 267, 1092)
      resolve()
    }
    img.src = './img/bg.png' // 设置图片源地址
  })
}
draw().then((res) => {
  // let url = canvas.toDataURL()
  canvas.toBlob(function (blob) {
    let obj = URL.createObjectURL(blob)
    console.log(obj)
  })
})
