var fs = require('fs')
var log = require('../utils/log')
var exec = require('child_process').exec
module.exports = {
    ' ->reset': function() {
        fs.unlink('./cache/init', function(err) {
            if (err) {
                log([{
                    title: 'Rio-Reset',
                    subtitle: '清理缓存失败',
                    icon: 'icon.png',
                    arg: '',
                    autocomplete: '',
                    uid: 'command',
                }])
            } else {
                log([{
                    title: 'Rio-Reset',
                    subtitle: '清理缓存成功',
                    icon: 'icon.png',
                    arg: '',
                    autocomplete: '',
                    uid: 'command',
                }])
            }
        });
    },
    ' ->update': function() {
        exec(`git pull origin master  > /dev/null 2>&1 &`)
        log([{
            title: 'Rio-Reset',
            subtitle: 'Rio已经开始更新',
            icon: 'icon.png',
            arg: '',
            autocomplete: '',
            uid: 'command',
        }])

    }
}
