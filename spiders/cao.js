var request = require('request')
var scrape = function(url, page) {

}

module.exports = {
    'cao': {
        ' cao latest': {
            title: '最新电影',
            icon: 'cao.png',
            url: 'https://extraction.import.io/query/extractor/0e52400c-e651-4e8c-a953-eec21e467800?_apikey=&url=http%3A%2F%2Fco.yocl.co%2Fthread0806.php%3Ffid%3D2',
            arg:'',
            autocomplete: ' cao latest',
            valid: 'YES',
            uid: 'cao_latest'
        },
    },
    ' cao ': function(query) {
        var that = this;
        var query = query.trim()
        log(Object.keys(that[query]).map(function(key) {
            plusOne('./cache/init', query)
            return that[query][key]
        }))
    },
    ' cao latest': function(query, page) {
        scrape(this[query.trim().split(' ')[0]][query].url, page)
    }
}
