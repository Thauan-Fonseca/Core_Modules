const fs = require('fs');

fs.stat('novo_arquivo.txt', (err, stats) => {
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.ctime)
    console.log(stats.size)
})