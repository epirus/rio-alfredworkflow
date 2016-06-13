var log = require('../utils/log.js')
var request = require('request')
var cheerio = require('cheerio')
var plusOne = require('../utils/plusOne')
var scrape = function(url) {
    request({
        url: 'https://extraction.import.io/query/extractor/9d8b0ca8-c1be-4a90-81a4-049d8f497cda?_apikey=05517aabfd7841259d17536fa4f4822904ad841e191af123e1547f7a662873e12d54926849b26685dadbceba1b7e668dfa8144f66c8ac661a14001d2d8a7e2dd017564c3b08d1d8e7c4d679c5692f5e0&url=http%3A%2F%2Fcn163.net%2Farchives%2F7698%2F',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
        }
    }, function(error, response, body) {
        var body = JSON.parse(body)
        var items = []
        body.extractorData.data[2].group.map(function(ele, index) {
            items[index] = {
                title: ele.title[0].text,
                subtitle:'' ,
                icon: '天天美剧.png',
                arg:ele.href[0].text
            }
        })
        log(items)
    })
}
module.exports = {
    '天天美剧': {
        ' 天天美剧 硅谷': {
            title: '硅谷',
            icon: '天天美剧.png',
            url: 'http://cn163.net/archives/7698/',
            arg: '',
            autocomplete: ' 天天美剧 硅谷',
            valid: 'YES',
            uid: '天天美剧_硅谷'
        }
    },
    ' 天天美剧 ': function(query) {
        var that = this;
        var query = query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init', query)
            return that[query][key]
        }))
    },
    ' 天天美剧 硅谷': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    }
}
