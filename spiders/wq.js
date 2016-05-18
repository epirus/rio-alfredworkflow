var log = require('../utils/log.js')
var request = require('request')
var plusOne=require('../utils/plusOne')
var scrape = function(url) {
    request({
        url: url,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
        }
    }, function(error, response, body) {
      console.log(body)
    })
}

scrape('http://api.wanqu.co/api/v2/issue/latest?token=N0sCCGnErjVs3OrCyIgsTg12U00sm1gKCXHtqgLDJRk=')
module.exports = {
    'wq': {
        ' wq latest': {
            title: '湾区日报',
            icon: 'wq.jpg',
            arg: 'http://api.wanqu.co/api/v2/issue/latest?token=N0sCCGnErjVs3OrCyIgsTg12U00sm1gKCXHtqgLDJRk=',
            autocomplete: ' wq latest',
            valid: 'yes',
            uid: '0'
        }
    },
    ' wq ': function(query) {
        var that = this;
        var query=query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init',query)
            return that[query][key]
        }))
    },
    ' wq latest': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].arg)
    }
}
