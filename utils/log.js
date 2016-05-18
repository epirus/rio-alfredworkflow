var alfredItem = require('alfred-item')
var fs= require('fs')

module.exports = function(items) {
    var xml = new alfredItem();
    for (var i in items) {
        var item = items[i]
        xml.addItem(item['uid'], item['title'], item['subtitle'], item['icon'], {
            autocomplete: item['autocomplete'],
            arg: item['arg'],
            valid:item['valid']||'YES'
        })
    }
    console.log(xml.output())
}
