const express = require("express") //importando a dependencia do express
const nunjucks = require("nunjucks") // Template engine // reuso de códigos // 

const server = express() // criando um servidor, executando o express como função
const videos = require("./data") // o ./ se refere a raiz do projeto, sem necessidade de colocar a extensão do arquivo
//ARRAY CRIADO EM data.js 
server.use(express.static('public')) // express observando a pasta "public", para servir o arquivos estáticos

server.set("view engine", "njk") //Configurando a Template Engine //setando o motor de view para NJK (antes como HTML)

nunjucks.configure("views", { //Configurando o caminho "views" , opções em objeto, usando o express com a variável que ele está utilizando
    express: server,
    autoescape: false, //resolvendo padrão do NUNJUKS de segurar códigos e formatação HTML colocadas nas variáveis
    noCache: true //não guardar CACHE para que possa haver mudança nas classes e ID
})

server.get("/", function(req, res) { //adicionando a rota "/" função REQ: requisição RES: resposta do servidor
    const about = { //dados que vão servir o about.njk
        avatar_url:"https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        name: "Mayk Brito",
        role: "Instrutor - Rocketseat",
        description:'Programador Full-Stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseat.com.br/" target="_blanc">Rocketseat</a>.',
        links: [
            {name:"Github", url:"https://github.com/MaykBrito"},
            {name:"Twitter", url:"https://twitter.com/maykbrito"},
            {name:"LinkedIn", url:"https://linkedin.com/in/maykbrito"}
        ]
    }

    return res.render("about", { about }) // respondendo com a renderização do about
})

server.get("/portfolio", function(req, res) { //adicionando a rota "/" função REQ: requisição RES: resposta do servidor
    return res.render("portfolio", {items: videos}) // respondendo com a renderização do portfolio + os vídeos
})

server.get("/video", function(req, res) { //adicionando rota /video e a função REQ para alterar o ID de acordo com o card clicado
    const id = req.query.id  //utilização da QUERY STRING

    const video = videos.find(function(video){ // por ser array no data.js ele usa o metodo find para buscar o id do vídeo
        return video.id == id
    })

    if (!video) { // se o ID não estiver no data.js ele retorna a frase
        return res.send("Video not found!")
    }

    return res.render("video", { item: video }) // se o ID estiver correto ele renderiza a página video.njk com o ID do card clicado
})

server.use(function(req, res) { //Desafio 3  - colocar o 404 no backend de forma dinâmica
    const notFound = {
        linha1: "Erro 404",
        linha2: "Nem o Google consegue encontrar a página que você procura. KKKKKKK",
        linha3: "Que tal usar os botões de navegação acima? :)",
    }

    res.status(404).render("not-found", { notFound })
  })

server.listen(5000, function() { //servidor fica ouvindo a porta 5000 // CALLBACK = função dentro de uma outra função
    console.log("server is running")
})