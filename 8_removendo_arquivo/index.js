const fs = require('fs');
const { isReadable } = require('stream');

fs.unlink('arquivo.txt', function(err){
    if(err){
        console.log(err)
        return
    }
    console.log("Arquivo removido");
})