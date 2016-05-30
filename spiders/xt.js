var log = require('../utils/log.js')
var plusOne = require('../utils/plusOne')
var exec = require('child_process').exec
var scrape = function(url, page, category) {
    if (category === '') {
        var url = `curl '${url}' -H 'origin: http://gold.xitu.io' -H 'accept-encoding: gzip, deflate' -H 'accept-language: en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36' -H 'content-type: text/plain' -H 'accept: */*' -H 'referer: http://gold.xitu.io/' --data-binary '{"where":{},"include":"user","limit":${page*30},"skip"${(page-1)*30},"order":"-rankIndex","_method":"GET","_ApplicationId":"mhke0kuv33myn4t4ghuid4oq2hjj12li374hvcif202y5bm6","_ApplicationKey":"mldfccqgjjmsk3xumif9j0qgls0vq6f2g7r3abouitfyboci","_ClientVersion":"js0.6.9","_InstallationId":"8d2b97c8-8367-aede-d657-bf47d6774527"}' --compressed`
    } else {
        var url = `curl '${url}' -H 'origin: http://gold.xitu.io' -H 'accept-encoding: gzip, deflate' -H 'accept-language: en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36' -H 'content-type: text/plain' -H 'accept: */*' -H 'referer: http://gold.xitu.io/' --data-binary '{"where":{"category":"${category}"},"include":"user","limit":${page*30},"skip":${(page-1)*30},"order":"-rankIndex","_method":"GET","_ApplicationId":"mhke0kuv33myn4t4ghuid4oq2hjj12li374hvcif202y5bm6","_ApplicationKey":"mldfccqgjjmsk3xumif9j0qgls0vq6f2g7r3abouitfyboci","_ClientVersion":"js0.6.9","_InstallationId":"8d2b97c8-8367-aede-d657-bf47d6774527"}' --compressed`
    }
    exec(url, function(error, stdout, stderr) {
        var json = JSON.parse(stdout)
        var items = []
        json.results.map(function(ele, index) {
            items[index] = {
                title: ele.title,
                subtitle: ele.content,
                icon: 'juejin.jpg',
                uid: '',
                arg: ele.url
            }
        })
        log(items)
    })
}
module.exports = {
    'xt': {
        ' xt latest': {
            title: '全部',
            icon: 'juejin.jpg',
            url: 'https://api.leancloud.cn/1.1/classes/Entry',
            arg: '',
            autocomplete: ' xt latest',
            uid: 'xt_latest',
            category: ''
        },
        ' xt frontend': {
            title: '前端',
            icon: 'juejin.jpg',
            url: 'https://api.leancloud.cn/1.1/classes/Entry',
            arg: '',
            autocomplete: ' xt frontend',
            uid: 'xt_latest',
            category: 'frontend'
        },
        ' xt android': {
            title: 'Android',
            icon: 'juejin.jpg',
            url: 'https://api.leancloud.cn/1.1/classes/Entry',
            arg: '',
            autocomplete: ' xt android',
            uid: 'xt_android',
            category: 'android'
        },
        ' xt design': {
            title: '设计',
            icon: 'juejin.jpg',
            url: 'https://api.leancloud.cn/1.1/classes/Entry',
            arg: '',
            autocomplete: ' xt design',
            uid: 'xt_design',
            category: 'design'
        },
        ' xt ios': {
            title: 'Ios',
            icon: 'juejin.jpg',
            url: 'https://api.leancloud.cn/1.1/classes/Entry',
            arg: '',
            autocomplete: ' xt ios',
            uid: 'xt_ios',
            category: 'ios'
        },
        ' xt backend': {
            title: '后端',
            icon: 'juejin.jpg',
            url: 'https://api.leancloud.cn/1.1/classes/Entry',
            arg: '',
            autocomplete: ' xt backend',
            uid: 'xt_backend',
            category: 'backend'
        },
        ' xt product': {
            title: '产品',
            icon: 'juejin.jpg',
            url: 'https://api.leancloud.cn/1.1/classes/Entry',
            arg: '',
            autocomplete: ' xt product',
            uid: 'xt_product',
            category: 'product'
        },
        ' xt freebie': {
            title: '工具',
            icon: 'juejin.jpg',
            url: 'https://api.leancloud.cn/1.1/classes/Entry',
            arg: '',
            autocomplete: ' xt freebie',
            uid: 'xt_freebie',
            category: 'freebie'
        },
        ' xt article': {
            title: '阅读',
            icon: 'juejin.jpg',
            url: 'https://api.leancloud.cn/1.1/classes/Entry',
            arg: '',
            autocomplete: ' xt article',
            uid: 'xt_article',
            category: 'article'
        }
    },
    ' xt ': function(query) {
        var that = this;
        var query = query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init', query)
            return that[query][key]
        }))
    },
    ' xt latest': function(query, page) {
        var obj = this[query.trim().split(' ')[0]][query]
        scrape(obj.url, page, obj.category)
    },
    ' xt frontend': function(query, page) {
        var obj = this[query.trim().split(' ')[0]][query]
        scrape(obj.url, page, obj.category)
    },
    ' xt android': function(query, page) {
        var obj = this[query.trim().split(' ')[0]][query]
        scrape(obj.url, page, obj.category)
    },
    ' xt design': function(query, page) {
        var obj = this[query.trim().split(' ')[0]][query]
        scrape(obj.url, page, obj.category)
    },
    ' xt ios': function(query, page) {
        var obj = this[query.trim().split(' ')[0]][query]
        scrape(obj.url, page, obj.category)
    },
    ' xt backend': function(query, page) {
        var obj = this[query.trim().split(' ')[0]][query]
        scrape(obj.url, page, obj.category)
    },
    ' xt product': function(query, page) {
        var obj = this[query.trim().split(' ')[0]][query]
        scrape(obj.url, page, obj.category)
    },
    ' xt freebie': function(query, page) {
        var obj = this[query.trim().split(' ')[0]][query]
        scrape(obj.url, page, obj.category)
    },
    ' xt article': function(query, page) {
        var obj = this[query.trim().split(' ')[0]][query]
        scrape(obj.url, page, obj.category)
    }
}
