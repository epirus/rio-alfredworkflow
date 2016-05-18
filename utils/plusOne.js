var fs = require('fs')
module.exports = function(filePath, keyword) {
    fs.readFile(filePath, function(err, data) {
        if (err) throw err;
        var raw = data.toString()
        var items = JSON.parse(raw)
        for (var i in items) {
            if (items[i]['autocomplete'].trim() === keyword) {
                items[i]['counter'] += 1
                break
            }
        }
        items.sort(function(a, b) {
            return b.counter-a.counter
        })

        fs.writeFile(filePath, JSON.stringify(items), function(err) {
            if (err) throw err
        })
    })
}
