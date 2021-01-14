const modalOverlay = document.querySelector('.modal-overlay') //Retorna uma class
const cards = document.querySelectorAll('.card') // Seleciona todos os "filhos" da class

for (let card of cards) { //Estrutura de repetição (para pegar todos os elementos("filhos") da class)
    card.addEventListener("click", function(){ // Cria um "ouvidor" de eventos ("1º parametro" que será ouvido, 2º parametro que executará ao ouvir o primeiro)
        const videoId = card.getAttribute("id") // Pega o atributo ID da CLASS
        window.location.href = `/video?id=${videoId}`

        
    })
}