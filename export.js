function export1() {
  var list = $('.table.con.table-bordered.table-striped.mytable tbody tr')
  for (var i = 0; i < list.length; i++) {
    var dom = list[i]
    // userInfo信息
    var userInfoDom = $(dom).find('td')[1]
    var userInfo = $(userInfoDom).text()

    // 品类信息
    var goodsDom = $(dom).find('td')[7]
    var goodsDomList = $(goodsDom).find('tbody tr')
    for (var j = 0; j < goodsDomList.length; j++) {
      var goodsDetailDom = goodsDomList[j]
      // 品类名称
      var goodsName = $($(goodsDetailDom).find('td')[1]).text()
      // 品类单价
      var goodsPrice = $($(goodsDetailDom).find('td')[2]).text()
      // 品类数量
      var goodsNum = $($(goodsDetailDom).find('td')[3]).text()
      // 订单总额
      var goodsTotalPrice = $(
        $($(goodsDom).find('tfoot tr')[0]).find('th')[1]
      ).text()

      console.log(
        userInfo +
          '---' +
          goodsName +
          '---' +
          goodsPrice +
          '---' +
          goodsNum +
          '---' +
          goodsTotalPrice
      )
    }
  }
}
export1()
