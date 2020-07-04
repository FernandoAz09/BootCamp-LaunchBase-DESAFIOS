const express = require("express") //importando a dependencia do express
const nunjucks = require("nunjucks") // Template engine // reuso de códigos // 

const server = express() // criando um servidor, executando o express como função
const videos = require("./data") // o ./ se refere a raiz do projeto, sem necessidade de colocar a extensão do arquivo
//ARRAY CRIADO EM data.js 
server.use(express.static('public')) // express observando a pasta "public", para servir o arquivos estáticos

server.set("view engine", "njk") //Configurando a Template Engine //setando o motor de view para NJK (antes como HTML)

nunjucks.configure("views", { //Configurando o caminho "views" , opções em objeto, usando o express com a variável que ele está utilizando
    express: server
})

server.get("/", function(req, res) { //adicionando a rota "/" função REQ: requisição RES: resposta do servidor
    return res.render("about") // respondendo com a renderização do about
})

server.get("/portfolio", function(req, res) { //adicionando a rota "/" função REQ: requisição RES: resposta do servidor
    return res.render("portfolio", {items: videos}) // respondendo com a renderização do portfolio + os vídeos
})

server.listen(5000, function() { //servidor fica ouvindo a porta 5000 // CALLBACK = função dentro de uma outra função
    console.log("server is running")
})