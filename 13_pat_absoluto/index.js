const path = require('path');

// path absoluto
console.log(path.resolve('teste.txt'));

// path dinâmico
const midFolder ='relatorios';
const fileName = 'Thauan.txt';

const finalPath = path.join('/', 'aruiqvos',  midFolder, fileName)

console.log(finalPath);
