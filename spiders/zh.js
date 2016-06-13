var log = require('../utils/log.js')
var request = require('request')
var plusOne = require('../utils/plusOne')
var scrape = function(url) {
    request({
        url: url
    }, function(error, response, body) {
        var items = []
        var data = JSON.parse(body)
        data.stories.map(function(item) {
            items.push({
                title: item.title,
                subtitle: '',
                icon: 'zh.jpg',
                arg: 'http://daily.zhihu.com/story/' + item.id
            })
        })
        log(items)
    })
}
module.exports = {
    'zh': {
        ' zh latest': {
            title: '知乎最新',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/news/latest',
            arg: '',
            autocomplete: ' zh latest',
            valid: 'YES',
            uid: 'zh_latest'
        },
        ' zh xl': {
            title: '日常心理学',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/13',
            arg: '',
            autocomplete: ' zh xl',
            valid: 'YES',
            uid: 'zh_latest'
        },
        ' zh tj': {
            title: '用户推荐日报',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/12',
            arg: '',
            autocomplete: ' zh tj',
            valid: 'YES',
            uid: 'zh_tj'
        },
        ' zh dy': {
            title: '电影日报',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/3',
            arg: '',
            autocomplete: ' zh dy',
            valid: 'YES',
            uid: 'zh_dy'
        },

        ' zh wl': {
            title: '不许无聊',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/11',
            arg: '',
            autocomplete: ' zh wl',
            valid: 'YES',
            uid: 'zh_wl'
        },

        ' zh sj': {
            title: '设计日报',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/4',
            arg: '',
            autocomplete: ' zh sj',
            valid: 'YES',
            uid: 'zh_sj'
        },
        ' zh gs': {
            title: '大公司日报',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/5',
            arg: '',
            autocomplete: ' zh gs',
            valid: 'YES',
            uid: 'zh_gs'
        },
        ' zh cj': {
            title: '财经日报',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/6',
            arg: '',
            autocomplete: ' zh cj',
            valid: 'YES',
            uid: 'zh_cj'
        },
        ' zh aq': {
            title: '互联网安全',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/10',
            arg: '',
            autocomplete: ' zh aq',
            valid: 'YES',
            uid: 'zh_aq'
        },
        ' zh yx': {
            title: '开始游戏',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/2',
            arg: '',
            autocomplete: ' zh yx',
            valid: 'YES',
            uid: 'zh_yx'
        },
        ' zh yy': {
            title: '音乐日报',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/7',
            arg: '',
            autocomplete: ' zh yy',
            valid: 'YES',
            uid: 'zh_yy'
        },
        ' zh dm': {
            title: '动漫日报',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/9',
            arg: '',
            autocomplete: ' zh dm',
            valid: 'YES',
            uid: 'zh_dm'
        },
        ' zh ty': {
            title: '体育日报',
            icon: 'zh.jpg',
            url: 'http://news-at.zhihu.com/api/4/theme/8',
            arg: '',
            autocomplete: ' zh ty',
            valid: 'YES',
            uid: 'zh_ty'
        },
    },
    ' zh ': function(query) {
        var that = this;
        var query = query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init', query)
            return that[query][key]
        }))
    },
    ' zh latest': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' zh xl': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' zh tj': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },

    ' zh dy': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' zh wl': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' zh sj': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },

    ' zh gs': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' zh cj': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' zh aq': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },
    ' zh yx': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },

    ' zh yy': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },

    ' zh dm': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    },

    ' zh ty': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    }
}
