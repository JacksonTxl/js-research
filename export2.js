function export1() {
  var list = $('.table.table-striped.table-bordered tbody tr')
  for (var i = 0; i < list.length; i++) {
    var dom = list[i]
    // username
    var userName = $($(dom).find('td')[0]).text()
    var phone = $($(dom).find('td')[1]).text()
    var address = $($(dom).find('td')[3]).text()
    console.log(userName + '|||' + phone + '|||' + address.replace(/ /g, '|||'))
  }
}
export1()
