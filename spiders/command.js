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
    ' ->update':function(){
      if(fs.existsSync('./.git/')){
        exec(`git pull origin master`)
      }else{
        exec(`git init&&git remote add origin git@github.com:epirus/rio-alfred-workflow.git&&git pull origin master`)
      }
    }
}
