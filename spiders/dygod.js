var log = require('../utils/log.js')
var request = require('request')
var cheerio = require('cheerio')
var iconv = require('iconv-lite')
var plusOne = require('../utils/plusOne')
var scrape = function(url, page) {
    if (page) {
        url = `${url}${page}.html`
    }
    request({
        url: url,
        encoding: null,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
        }
    }, function(error, response, body) {
        var html = iconv.decode(body, 'gb2312')
        $ = cheerio.load(html, {
            decodeEntities: false
        })
        var items = []
        $('.co_content8 table').map(function(index, ele) {
            items[index] = {
                title: $(ele).find('tr:nth-child(2) > td:nth-child(2) a').slice(-1).text(),
                subtitle: $(ele).find('font').text(),
                icon: 'dygod.png',
                arg: 'http://www.ygdy8.net/' + $(ele).find('tr:nth-child(2) > td:nth-child(2) a').slice(-1).attr('href')
            }
        })
        log(items)
    })
}
module.exports = {
    'dygod': {
        ' dygod latest': {
            title: '最新电影',
            icon: 'dygod.png',
            url: 'http://www.ygdy8.net/html/gndy/dyzz/list_23_',
            arg:'',
            autocomplete: ' dygod latest',
            valid: 'YES',
            uid: 'dygod_latest'
        },
        ' dygod gn': {
            title: '国内电影',
            icon: 'dygod.png',
            url: 'http://www.ygdy8.net/html/gndy/china/list_4_',
            arg:'',
            autocomplete: ' dygod gn',
            valid: 'YES',
            uid: 'dygod_gn'
        },
        ' dygod omdy': {
            title: '欧美电影',
            icon: 'dygod.png',
            url: 'http://www.ygdy8.net/html/gndy/oumei/list_7_',
            arg:'',
            autocomplete: ' dygod omdy',
            valid: 'YES',
            uid: 'dygod_gn'
        },
        ' dygod rh': {
            title: '日韩电影',
            icon: 'dygod.png',
            url: 'http://www.ygdy8.net/html/gndy/rihan/list_6_',
            arg:'',
            autocomplete: ' dygod rh',
            valid: 'YES',
            uid: 'dygod_rh'
        },
        ' dygod dm': {
            title: '动漫',
            icon: 'dygod.png',
            url: 'http://www.ygdy8.net/html/dongman/list_16_',
            arg:'',
            autocomplete: ' dygod dm',
            valid: 'YES',
            uid: 'dygod_omds'
        },
        ' dygod omds': {
            title: '欧美电视',
            icon: 'dygod.png',
            url: 'http://www.ygdy8.net/html/tv/oumeitv/list_9_',
            arg:'',
            autocomplete: ' dygod omds',
            valid: 'YES',
            uid: 'dygod_omds'
        }
    },
    ' dygod ': function(query) {
        var that = this;
        var query = query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init', query)
            return that[query][key]
        }))
    },
    ' dygod latest': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' dygod gn': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' dygod omdy': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' dygod omds': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' dygod rh': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' dygod dm': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    }
}
