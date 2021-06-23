const statsdb = require('./main.js'),
    stats = new statsdb('123', 'hello');

stats.search('ds-jocular', 'pc', 'fast').then(data => {
    console.log(data)
})