var log = require('../utils/log.js')
var cheerio = require('cheerio')
var plusOne = require('../utils/plusOne')
var exec = require('child_process').exec
var scrape = function(url, page) {
    var url = url + page;
    exec(`curl '${url}' -H 'Accept-Encoding: gzip, deflate, sdch' -H 'Accept-Language: en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2' -H 'Upgrade-Insecure-Requests: 1' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Cache-Control: max-age=0' -H 'Cookie: 3025734002=ed6a9veaEZNmlb7n1rm2vxhW5TfQllVx22zbep%2BhSg; __auc=54b1d077154ab34a222d8640e08; 4263472310=46d1ZKr%2BhboCizd8heIXF28wIKIftGowTYeWfAdjNw; _gat=1; 3025734002=d2d25nUV5g2VTOuilaBghS8VqmfY2fhtr%2F4h8OnuvA; jdna=596e6fb28c1bb47f949e65e1ae03f7f5#1463455503976; _ga=GA1.2.971625059.1462678713; Hm_lvt_fd93b7fb546adcfbcf80c4fc2b54da2c=1463015763,1463024399,1463161234,1463403830; Hm_lpvt_fd93b7fb546adcfbcf80c4fc2b54da2c=1463455504' -H 'Connection: keep-alive' --compressed`, function(error, stdout, stderr) {
        $ = cheerio.load(stdout, {
            decodeEntities: false
        })
        var items = []
        if (parseInt(page) === 1) {
            $('.indexs').map(function(index, ele) {
                items[index] = {
                    title: $(ele).find('h2 a').text(),
                    subtitle: $(ele).find('strong > a').text(),
                    icon: 'jiandan.png',
                    uid: '',
                    arg: $(ele).find('h2 a').attr('href')
                }
            })
            log(items)
        }
        if (parseInt(page) >= 2) {
            $('.column').map(function(index, ele) {
                items[index] = {
                    title: $(ele).find('.title2').text(),
                    subtitle:'',
                    icon: 'jiandan.png',
                    arg: $(ele).find('.title2 a').attr('href')
                }
            })
            log(items)
        }
    })
}

module.exports = {
    'jiandan': {
        ' jiandan latest': {
            title: '煎蛋-首页',
            icon: 'jiandan.png',
            url: 'http://jandan.net/page/',
            arg: '',
            autocomplete: ' jiandan latest',
            valid: 'yes',
            uid: 'jiandan_latest'
        }
    },
    ' jiandan ': function(query) {
        var that = this;
        var query = query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init', query)
            return that[query][key]
        }))
    },
    ' jiandan latest': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    }
}
