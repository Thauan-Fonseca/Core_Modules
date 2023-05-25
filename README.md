# Esse é um repositório com algumas aplicações feitas com Node.js

Nessas aplicações, foram utilizadas core module, que são fundamentais para o desenvolvimento de softwares em Node. Uma das vantagens de utilizar este tipo de module é que não precisamos importá-los, já que são internos do node. 
Neste repositório você vai ver alguns core modules como: 
>>  hhtp,
>>  path,
>>  fs,
>>  url

## - Http
Esse core module é responsável por criar um servidor html, para que possamos receber uma reuisição e enviar um html, por exemplo. 
Para criar um servidor podemos usar o método `creatServer`, e o comando `listen` para determinar qual a porta em que o servidor irá rodar.

## - Path
Conseguimos extrair diversas informações sobre caminhos e arquivos, como: nome do arquivo, extensão do arquivo e etc.
Dois métodos muito usados são `resolve` e o `join`, que tem, respectivamente como funções saber qual o caminho completo 
até o arquivo alvo, e formar um caminho dinâmico, com variáveis e valores fixos. 

## - fs
Fs ou file System é um core module utilizado para tratar de diretórios, arquivos e etc.
Com ele, podemos, por exmplo, ler o que está escrito em um arquivo como o comando `readfile` ou até mesmo atualizar o aquivo com o método `writefile`.

## url
Como o nome sugere, com este core module somos capazes de obter dados como o `host`, `path`, `search`, `query` e etc. 
