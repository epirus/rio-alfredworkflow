var scrapeIt = require("scrape-it")
var log = require('../utils/log.js')
var plusOne=require('../utils/plusOne')
var scrape = function(url) {
    return scrapeIt(url, {
        articles: {
            listItem: ".athing",
            data: {
                autocomplete: {
                    convert: function() {
                        return this.query
                    }
                },
                title: ".title>a",
                subtitle: ".subtext",
                icon: {
                    convert: function() {
                        return "hn.jpg"
                    }
                },
                uid: {
                    convert: function() {
                        return ''
                    }
                },
                arg: {
                    selector: ".title>a",
                    attr: 'href',
                    convert: function(x) {
                        return x
                    }
                }
            }
        }
    }).then(function(page) {
        log(page.articles)
    });
}

module.exports = {
    'hn': {
        ' hn latest': {
            title: 'hacker news',
            icon: 'hn.jpg',
            url: 'https://news.ycombinator.com/news?p=1',
            arg:'',
            autocomplete: ' hn latest',
            valid: 'yes',
            uid: 'hn_latest'
        }
    },
    ' hn ': function(query) {
        var that = this;
        var query=query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init',query)
            return that[query][key]
        }))
    },
    ' hn latest': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    }
}
