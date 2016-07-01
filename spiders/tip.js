var log = require('../utils/log')
var fs = require('fs')
var init = [{
        title: 'V2EX',
        subtitle: 'V2EX 是一个关于分享和探索的地方',
        icon: 'v2ex.png',
        arg: '',
        autocomplete: ' v2ex ',
        uid: 'v2ex',
        counter: 0
    }, {
        title: 'AppShopper 降价',
        subtitle: 'mac · ios 应用降价',
        icon: 'app.png',
        arg: '',
        autocomplete: ' app ',
        uid: 'appshopper',
        counter: 0
    }, {
        title: 'DyGod 最新电影',
        subtitle: '展示最新电影',
        icon: 'dygod.png',
        arg: '',
        autocomplete: ' dygod ',
        uid: 'dygod',
        counter: 0
    }, {
        title: 'Mp4Ba 最新电影',
        subtitle: '展示最新电视电影',
        icon: 'mp4ba.png',
        arg: '',
        autocomplete: ' mp4ba ',
        uid: 'mp4ba',
        counter: 0

    }, {
        title: 'Hacker News',
        subtitle: 'Hacker News',
        icon: 'hn.jpg',
        arg: '',
        autocomplete: ' hn ',
        uid: 'hackernews',
        counter: 0

    }, {
        title: 'Startup News',
        subtitle: 'Startup News',
        icon: 'sn.png',
        arg: '',
        autocomplete: ' sn ',
        uid: 'startupnews',
        counter: 0
    }, {
        title: 'Github Trending',
        subtitle: 'github-trending',
        icon: 'gt.png',
        arg: '',
        autocomplete: ' gt ',
        uid: 'githubtrending',
        counter: 0

    }, {
        title: 'Jian Dan',
        subtitle: '煎蛋以译介方式传播网络新鲜资讯',
        icon: 'jiandan.png',
        arg: '',
        autocomplete: ' jiandan ',
        uid: 'jiandan',
        counter: 0
    }, {
        title: '开发者头条',
        subtitle: '技术极客的头条新闻',
        icon: 'kaifazhetoutiao.jpg',
        arg: '',
        autocomplete: ' kf ',
        uid: 'kaifazhetoutiao',
        counter: 0
    }, {
        title: '糗事百科',
        subtitle: '搞笑笑话,糗事百科',
        icon: 'qiushibaike.png',
        arg: '',
        autocomplete: ' qb ',
        uid: 'qiushibaike',
        counter: 0
    }, {
        title: '稀土掘金',
        subtitle: '掘金是中国质量最高的技术分享社区',
        icon: 'juejin.png',
        arg: '',
        autocomplete: ' xt ',
        uid: 'xitujuejin',
        counter: 0
    }, {
        title: '知乎日报',
        subtitle: '以独有的方式为你提供最高质、最深度、最有收获的阅读体验',
        icon: 'zh.png',
        arg: '',
        autocomplete: ' zh ',
        uid: 'zhihuribao',
        counter: 0
    }, {
        title: '天天美剧',
        subtitle: '天天美剧网提供最新的美剧高清看',
        icon: '天天美剧.png',
        arg: '',
        autocomplete: ' 天天美剧 ',
        uid: '天天美剧',
        counter: 0
    }
]

var fileExists = function(filePath) {
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}
var filePath = './cache/init'
var initMenu = function(message) {
    var message = JSON.stringify(message)
    if (fileExists(filePath)) {
        //todo ->fix the init problem when add the new service
    } else {
        fs.writeFile(filePath, message, function() {})
    }
}

initMenu(init)

var logFromFile = function(filePath) {
    fs.readFile(filePath, function(err, data) {
        if (err) throw err;
        var raw = data.toString()
        log(JSON.parse(raw))
    })
}

module.exports = {
    ' ': function() {
        logFromFile(filePath)
    },
    '': function() {
        logFromFile(filePath)
    },
    '?': function() {
        logFromFile(filePath)
    }
}
