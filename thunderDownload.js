var request = require('request')
var exec = require('child_process').exec
var iconv = require('iconv-lite')
var cheerio = require('cheerio')

module.exports = function(query) {
    //dygod download 
    if (query.indexOf('dy') > -1) {
        request({
            url: query,
            encoding: null,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
            }
        }, function(error, response, body) {
            var html = iconv.decode(body, 'gb2312')
            $ = cheerio.load(html, {
                decodeEntities: false
            })
            var thunderUrl = $('#Zoom a').attr('href')
            exec(`osascript ./thunder.scpt ${thunderUrl}`)
        })
    }

    if (query.indexOf('mp4ba') > -1) {
        request({
            url: query,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
            }
        }, function(error, response, body) {
            $ = cheerio.load(body, {
                decodeEntities: false
            })
            var thunderUrl = $('#magnet').attr('href')
            exec(`osascript ./thunder.scpt ${thunderUrl}`)
        })

    }
}
