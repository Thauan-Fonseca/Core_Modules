const url = require('url');

const adress = "http://www.meusite.com.br/catalogo?produtos=cadeira&preco=1000"

const parsedUrl = new url.URL(adress);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get("produtos"))