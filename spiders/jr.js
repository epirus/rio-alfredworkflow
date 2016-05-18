var log = require('../utils/log.js')
var request = require('request')
var cheerio = require('cheerio')
var plusOne=require('../utils/plusOne')
var scrape = function(url) {
    request({
      url:url,
      encoding : null ,
      headers:{
        'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
      }
    }, function(error, response, body) {
       var html=iconv.decode(body, 'gb2312')  
       $ = cheerio.load(html, {decodeEntities: false})  
       var items=[]
       $('.tbspan').map(function(index,ele){
         items[index]={
           title:$(ele).find('.ulink').text(),
           subtitle:$(ele).find('font').text(),
           icon:'jr.jpg',
           uid:'',
           arg:'http://www.ygdy8.net/'+$(ele).find('.ulink').attr('href')
         }
       })
       log(items)
    })
}

module.exports = {
    'jr': {
        ' jr latest': {
            title: '最新电影',
            icon: 'jr.jpg',
            url: 'http://www.ygdy8.net/html/gndy/dyzz/index.html',
            arg:'',
            autocomplete: ' jr latest',
            valid: 'yes',
            uid: 'jr_latest'
        }
    },
    ' jr ': function(query) {
        var that = this;
        var query=query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init',query)
            return that[query][key]
        }))
    },
    ' jr latest': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    }
}
