var log = require('../utils/log.js')
var plusOne=require('../utils/plusOne')
module.exports = {
    'qb': {
        ' qb latest': {
            title: '糗事百科-首页',
            icon: 'qiushibaike.jpg',
            arg: 'http://www.qiushibaike.com/hot',
            autocomplete: ' qb ',
            valid: 'YES',
            uid: 'qb_latest'
        },
        ' qb pic':{
            title: '糗事百科-图片',
            icon: 'qiushibaike.jpg',
            arg: 'http://www.qiushibaike.com/pic/',
            autocomplete: ' qb ',
            valid: 'YES',
            uid: 'qb_pic'
        },
        ' qb text':{
            title: '糗事百科-文字',
            icon: 'qiushibaike.jpg',
            arg: 'http://www.qiushibaike.com/textnew/',
            autocomplete: ' qb ',
            valid: 'YES',
            uid: 'qb_text'
        }
    },
    ' qb ': function(query) {
        var that = this;
        var query=query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init',query)
            return that[query][key]
        }))
    },
    ' qb latest': function() {
    }
}
