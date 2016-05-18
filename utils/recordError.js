var fs=require('fs')
module.exports = function(errorInfo, fileName) {
    fs.appendFile('./logs/'+fileName,errorInfo, function(err) {
    }); 
}
