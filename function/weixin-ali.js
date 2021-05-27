function getPlatform() {
  if (/MicroMessenger/.test(window.navigator.userAgent)) {
    return 'weixin'
  } else if (/AlipayClient/.test(window.navigator.userAgent)) {
    return 'ali'
  } else {
    return 'other'
  }
}
function getLocation() {
  const platform = getPlatform()
  if (platform === 'weixin') {
    WeixinJSBridge.invoke('geoLocation', {}, function (e) {
      alert(e.err_msg)
    })
  } else if (platform === 'ali') {
    getLocationAli(function () {
      AlipayJSBridge.call(
        'getCurrentLocation',
        { requestType: 2, bizType: 'didi' },
        function (result) {
          if (result.error) {
            alert(result.errorMessage)
            return
          }
          alert(JSON.stringify(result))
        }
      )
    })
  } else {
  }
}

function getLocationAli(callback) {
  // 如果jsbridge已经注入则直接调用
  if (window.AlipayJSBridge) {
    callback && callback()
  } else {
    // 如果没有注入则监听注入的事件
    document.addEventListener('AlipayJSBridgeReady', callback, false)
  }
}
