const modalOverlay = document.querySelector('.modal-overlay') //Retorna uma class
const cards = document.querySelectorAll('.card') // Seleciona todos os "filhos" da class

for (let card of cards) { //Estrutura de repetição (para pegar todos os elementos("filhos") da class)
    card.addEventListener("click", function(){ // Cria um "ouvidor" de eventos ("1º parametro" que será ouvido, 2º parametro que executará ao ouvir o primeiro)
        const videoId = card.getAttribute("id") // Pega o atributo ID da CLASS
        modalOverlay.classList.add('active') //Adiciona parametros('') a class 
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}` // Substitui o conteúdo pelo id do vídeo
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){ //Fechar o modal
    modalOverlay.classList.remove('active') // Remove parametros('') da class
    modalOverlay.querySelector("iframe").src = "" //Retira o conteúdo ao clicar no CLOSE, passando o src para VAZIO
})

