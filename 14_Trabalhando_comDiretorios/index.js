const fs = require('fs');
const prompt = require('prompt-sync')()

const adiciona = prompt("Qual o nome da pasta? ");

if(!fs.existsSync(`./${adiciona}`)){
    console.log("Essa pasta não existe");

    fs.mkdirSync(`${adiciona}`)
} else {
    console.log("Existe!")
}