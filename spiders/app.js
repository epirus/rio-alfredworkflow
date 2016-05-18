var scrapeIt = require("scrape-it")
var log = require('../utils/log')
var plusOne=require('../utils/plusOne')
var scrape = function(url) {
    return scrapeIt(url, {
        articles: {
            listItem: ".section.app",
            data: {
                autocomplete: {
                    convert: function() {
                        return this.query
                    }
                },
                title: ".dark-links",
                subtitle: ".description",
                icon: {
                    convert: function() {
                        return "app.jpg"
                    }
                },
                uid: {
                    convert: function() {
                        return ''
                    }
                },
                arg: {
                    selector: ".block-link",
                    attr: 'href',
                    convert: function(x) {
                        return 'http://appshopper.com' + x
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
    'app': {
        ' app ios': {
            title: 'ios 应用降价',
            icon: 'app.jpg',
            url: 'http://appshopper.com/prices/',
            arg:'http://appshopper.com/prices/',
            autocomplete: ' app ios',
            valid: 'yes',
            uid: 'app_ios'
        },
        ' app mac': {
            title: 'mac 应用降价',
            icon: 'app.jpg',
            url: 'http://appshopper.com/mac/prices/',
            arg:'http://appshopper.com/mac/prices/',
            autocomplete: ' app mac',
            valid: 'no',
            uid: 'app_mac'
        }
    },
    ' app ': function() {
        var that = this;
        log(Object.keys(that['app']).map(function(key) {
                plusOne('./cache/init','app')
                return that['app'][key]
            }))
    },
    ' app ios': function() {
        scrape(this['app'][' app ios'].url)
    },
    ' app mac': function() {
        scrape(this['app'][' app mac'].url)
    }
}
