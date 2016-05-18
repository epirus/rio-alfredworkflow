var scrapeIt = require("scrape-it")
var log = require('../utils/log.js')
var plusOne = require('../utils/plusOne')
var scrape = function(url) {
    return scrapeIt(url, {
        articles: {
            listItem: ".repo-list-item",
            data: {
                autocomplete: {
                    convert: function() {
                        return this.query
                    }
                },
                title: ".repo-list-name>a",
                subtitle: {
                    selector: ".repo-list-meta",
                    convert: function(ele) {
                        var whichLanguage = ele.replace(/\s/g, '').split('•')
                        return whichLanguage.length === 3 ? whichLanguage[0] : '';
                    }
                },
                icon: {
                    convert: function() {
                        return "gt.jpg"
                    }
                },
                uid: {
                    convert: function() {
                        return ''
                    }
                },
                arg: {
                    selector: ".repo-list-name>a",
                    attr: 'href',
                    convert: function(x) {
                        return 'https://github.com' + x
                    }
                },
                cid: {
                    convert: function(ele) {
                        return 0
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
    'gt': {
        ' gt all': {
            title: 'All',
            icon: 'gt.jpg',
            url: 'https://github.com/trending/',
            autocomplete: ' gt all',
            arg:'',
            valid: 'yes',
            uid: 'gt_all'
        },
        ' gt js': {
            title: 'JavaScript',
            icon: 'gt.jpg',
            url: 'https://github.com/trending/javascript',
            autocomplete: ' gt js',
            valid: 'yes',
            arg:'',
            uid: 'gt_js'
        },
        ' gt swift': {
            title: 'Swift',
            icon: 'gt.jpg',
            url: 'https://github.com/trending/swift',
            autocomplete: ' gt js',
            valid: 'yes',
            arg:'',
            uid: 'gt_swift'
        },
        ' gt go': {
            title: 'Go',
            icon: 'gt.jpg',
            url: 'https://github.com/trending/go',
            autocomplete: ' gt go',
            valid: 'yes',
            arg:'',
            uid: 'gt_go'
        },
        ' gt java': {
            title: 'Java',
            icon: 'gt.jpg',
            url: 'https://github.com/trending/java',
            autocomplete: ' gt java',
            valid: 'yes',
            arg:'',
            uid: 'gt_java'
        },
        ' gt python': {
            title: 'Python',
            icon: 'gt.jpg',
            url: 'https://github.com/trending/python',
            autocomplete: ' gt python',
            valid: 'yes',
            arg:'',
            uid: 'gt_python'
        }
    },
    ' gt ': function(query) {
        var that = this;
        var query = query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init', query)
            return that[query][key]
        }))
    },
    ' gt all': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
   ' gt js': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
   ' gt swift': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
   ' gt go': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
   ' gt java': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    },
   ' gt python': function(query) {
        scrape(this[query.trim().split(' ')[0]][query].url)
    }
}
