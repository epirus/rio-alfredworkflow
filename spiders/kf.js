var log = require('../utils/log.js')
var request = require('request')
var cheerio = require('cheerio')
var plusOne = require('../utils/plusOne')
var scrape = function(url, page) {
    var date = new Date();
    date.setDate(date.getDate() - parseInt(page))
		var url=url+ date.toJSON().slice(0, 10);
    request({
        url: url,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
        }
    }, function(error, response, body) {
        $ = cheerio.load(body, {
            decodeEntities: false
        })
        var items = []
        $('.post').map(function(index, ele) {
            items[index] = {
                title: $(ele).find('.title a').text(),
                subtitle: '',
                icon: 'kaifazhetoutiao.jpg',
                uid: '',
                arg: $(ele).find('.title a').attr('href')
            }
        })
        log(items)
    })
}

module.exports = {
    'kf': {
        ' kf latest': {
            title: '开发者头条',
            icon: 'kaifazhetoutiao.jpg',
            url: 'http://toutiao.io/prev/',
            arg: '',
            autocomplete: ' kf latest',
            valid: 'yes',
            uid: 'kf_latest'
        }
    },
    ' kf ': function(query) {
        var that = this;
        var query = query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init', query)
            return that[query][key]
        }))
    },
    ' kf latest': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    }
}
