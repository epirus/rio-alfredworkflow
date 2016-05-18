var scrapeIt = require("scrape-it")
var log = require('../utils/log.js')
var request = require('request')
var cheerio=require('cheerio')
var scrape = function(url) {
    request(url, function(error, response, body) {
        if (error) {
            console.log(error)
        }
        if (!error && response.statusCode == 200) {
        }
    });



    return scrapeIt(url, {
        articles: {
            listItem: ".tbspan",
            data: {
                autocomplete: {
                    convert: function() {
                        return this.query
                    }
                },
                title: ".ulink",
                subtitle: "tr:nth-child(4) > td",
                icon: {
                    convert: function() {
                        return "jianshu.jpg"
                    }
                },
                uid: {
                    convert: function() {
                        return ''
                    }
                },
                arg: {
                    selector: "td:nth-child(2) > b > a",
                    attr: 'href',
                    convert: function(x) {
                        return 'http://www.ygdy8.net/' + x
                    }
                },
                cid: {
                    selector: ".stars",
                    attr: 'data-rating',
                    convert: function(ele) {
                        return parseFloat('0' + ele)
                    }
                }
            }
        }
    }).then(function(page) {
        log(page.articles.sort(function(a, b) {
            return b.cid - a.cid
        }))
    });
}


module.exports = {
    'jianshu': {
        ' jianshu rm': {
            title: '热门(rm)',
            icon: 'jianshu.jpg',
            arg: 'http://www.jianshu.com/',
            autocomplete: ' jianshu rm',
            valid: 'yes',
            uid: 'jianshu_rm'
        }
    },
    ' jianshu ': function() {
        var that = this;
        log(Object.keys(that['jianshu']).map(function(key) {
            return that['jianshu'][key]
        }))
    },
    ' jianshu rm': function() {
        scrape(this['jianshu'][' jianshu rm'].arg)
    }

}
