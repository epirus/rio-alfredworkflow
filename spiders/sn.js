var scrapeIt = require("scrape-it")
var log = require('../utils/log.js')
var request = require('request')
var cheerio = require('cheerio')
var plusOne = require('../utils/plusOne')
var scrape = function(url) {
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
        $('.title').map(function(index, ele) {
            var title = $(ele).find('a').text()
            if (title === "More") return
            items[index] = {
                title: title,
                subtitle: '',
                icon: 'sn.png',
                uid: '',
                arg: $(ele).find('a').attr('href')
            }
        })
        log(items)
    })
}

module.exports = {
    'sn': {
        ' sn latest': {
            title: 'Startup News',
            icon: 'sn.png',
            url: 'http://news.dbanotes.net/',
            arg: '',
            autocomplete: ' sn latest',
            valid: 'yes',
            uid: 'sn_latest'
        }
    },
    ' sn ': function(query) {
        var that = this;
        var query = query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init', query)
            return that[query][key]
        }))
    },
    ' sn latest': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    }
}
