var scrapeIt = require("scrape-it")
var log = require('../utils/log.js')
var plusOne=require('../utils/plusOne')
var scrape = function(url,page) {
    return scrapeIt(url+page, {
        articles: {
            listItem: "#data_list>tr",
            data: {
                autocomplete: {
                    convert: function() {
                        return this.query
                    }
                },
                title: {
                    selector: "td:nth-child(3)>a",
                    convert:function(ele){
                      var item = ele.split('.').slice(0,3)
                      return item[0]+' ( '+item[1]+' , '+item[2]+' ) '
                    }
                },
                subtitle: "td:nth-child(2)>a",
                icon: {
                    convert: function() {
                        return "mp4ba.jpg"
                    }
                },
                uid: {
                    convert: function() {
                        return '0'
                    }
                },
                arg: {
                    selector: "td:nth-child(3) > a",
                    attr: 'href',
                    convert: function(x) {
                        return 'http://www.mp4ba.com/' + x
                    }
                },
                cid: {
                    selector: "td:nth-child(6)>span",
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
    'mp4ba': {
        ' mp4ba latest': {
            title: '最新电影',
            icon: 'mp4ba.jpg',
            url: 'http://www.mp4ba.com/index.php?page=',
            arg: '',
            autocomplete: ' mp4ba latest',
            valid: 'yes',
            uid: 'mp4ba_latest'
        }
    },
    ' mp4ba ': function(query) {
        var that = this;
        var query=query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init',query)
            return that[query][key]
        }))
    },
    ' mp4ba latest': function(query,page) {
        scrape(this[query.trim().split(' ')[0]][query].url,page)
    }
}
