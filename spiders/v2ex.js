var scrapeIt = require("scrape-it")
var log = require('../utils/log.js')
var plusOne = require('../utils/plusOne')
var scrape = function(url) {
    return scrapeIt(url, {
        articles: {
            listItem: ".cell.item",
            data: {
                autocomplete: {
                    convert: function() {
                        return " v2ex cy "
                    }
                },
                title: ".item_title a",
                subtitle: ".small.fade",
                icon: {
                    convert: function() {
                        return "v2ex.png"
                    }
                },
                uid: {
                    convert: function() {
                        return ''
                    }
                },
                arg: {
                    selector: ".item_title a",
                    attr: 'href',
                    convert: function(x) {
                        return 'https://v2ex.com' + x
                    }
                },
            }
        }
    }).then(function(page) {
        log(page.articles)
    });
}
module.exports = {
    'v2ex': {
        ' v2ex js': {
            title: '技术(js)',
            icon: 'v2ex.png',
            url: 'https://v2ex.com/?tab=tech',
            arg:'',
            autocomplete: ' v2ex js',
            valid: 'yes',
            uid: 'v2ex_js'
        },
        ' v2ex cy': {
            title: '创意(cy)',
            icon: 'v2ex.png',
            url: 'https://v2ex.com/?tab=play',
            arg:'',
            autocomplete: ' v2ex cy',
            valid: 'no',
            uid: 'v2ex_cy'
        },
        ' v2ex hw': {
            title: '好玩(hw)',
            icon: 'v2ex.png',
            url: 'https://v2ex.com/?tab=creative',
            arg:'',
            autocomplete: ' v2ex hw',
            valid: 'no',
            uid: 'v2ex_hw'
        },
        ' v2ex pg': {
            title: '苹果(pg)',
            icon: 'v2ex.png',
            url: 'https://v2ex.com/?tab=apple',
            arg:'',
            autocomplete: ' v2ex pg',
            valid: 'no',
            uid: 'v2ex_pg'
        },
        ' v2ex gz': {
            title: '工作(gz)',
            icon: 'v2ex.png',
            url: 'https://v2ex.com/?tab=jobs',
            arg:'',
            autocomplete: ' v2ex gz',
            valid: 'no',
            uid: 'v2ex_gz'
        },
        ' v2ex cs': {
            title: '城市(cs)',
            icon: 'v2ex.png',
            url: 'https://v2ex.com/?tab=city',
            arg:'',
            autocomplete: ' v2ex cs',
            valid: 'no',
            uid: 'v2ex_cs'
        },
        ' v2ex wd': {
            title: '问答(wd)',
            icon: 'v2ex.png',
            url: 'https://v2ex.com/?tab=qna',
            arg:'',
            autocomplete: ' v2ex wd',
            valid: 'no',
            uid: 'v2ex_wd'
        },
        ' v2ex zr': {
            title: '最热(zr)',
            icon: 'v2ex.png',
            url: 'https://v2ex.com/?tab=hot',
            arg:'',
            autocomplete: ' v2ex zr',
            valid: 'no',
            uid: 'v2ex_zr'
        },
        ' v2ex qb': {
            title: '全部(qb)',
            icon: 'v2ex.png',
            url: 'https://v2ex.com/?tab=all',
            arg:'',
            autocomplete: ' v2ex qb',
            valid: 'no',
            uid: 'v2ex_qb'
        }
    },
    ' v2ex ': function(query) {
        var that = this;
        var query = query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init', query)
            return that[query][key]
        }))
    },
    ' v2ex js': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
    ' v2ex cy': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
    ' v2ex hw': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
    ' v2ex pg': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
    ' v2ex gz': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
    ' v2ex cs': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
    ' v2ex wd': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
    ' v2ex zr': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
    ' v2ex qb': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    }
}
