const express = require('express') //importando a dependencia do express
const server = express() // criando um servidor, executando o express como função

server.get("/", function(req, res) { //adicionando a rota "/" função REQ: requisição RES: resposta do servidor
    return res.send("Hi!") // respondendo
})

server.listen(5000, function() { //servidor fica ouvindo a porta 5000 // CALLBACK = função dentro de uma outra função
    console.log('server is running')
})