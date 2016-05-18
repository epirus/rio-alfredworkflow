var extend = require('util')._extend;
var service = require('./utils/service')
var spiderServiceDire = './spiders/'
var recordError = require('./utils/recordError')
var fuzzy = require('fuzzaldrin')
var log = require('./utils/log')

module.exports = function(query) {
    var queryKeywords = new function() {}
    queryKeywords.query = query
    service.map(function(item) {
        try {
            extend(queryKeywords, require(spiderServiceDire + item))
        } catch (err) {
            recordError('loading--->' + err + '\n', 'error.log')
        }
    })

    var page='1'
    var querySplit = query.split(' ')
    if (querySplit.length === 4) {
        query= querySplit.slice(0, 3).join(' ')
        page= querySplit.slice(-1)[0]
    }
    if (query in queryKeywords) {
        queryKeywords[query](query,page)
    } else {
        var t = []
        var prefix = query.trim().split(' ')[0]
        try {
            fuzzy.filter(Object.keys(queryKeywords[prefix]), query).map(function(item) {
                if (item in queryKeywords[prefix]) {
                    t.push((queryKeywords[prefix][item]))
                }
            })
            log(t)
        } catch (err) {
            recordError('service.js maybe not include the crawlers file--->' + err + '\n', 'error.log')
        }
    }
}
