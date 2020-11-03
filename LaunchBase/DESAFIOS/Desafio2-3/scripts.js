const modalOverlay = document.querySelector('.modal-overlay') //Retorna uma class
const cards = document.querySelectorAll('.card') // Seleciona todos os "filhos" da class
const modal = document.querySelector('.modal')//Retorna uma class

for (let card of cards) { //Estrutura de repetição (para pegar todos os elementos("filhos") da class)
    card.addEventListener("click", function(){ // Cria um "ouvidor" de eventos ("1º parametro" que será ouvido, 2º parametro que executará ao ouvir o primeiro)
        const linkId = card.getAttribute("id") // Pega o atributo ID da CLASS
        modalOverlay.classList.add('active') //Adiciona parametros('') a class 
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${linkId}` // Substitui o conteúdo pelo id do vídeo
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){ //Fechar o modal
    modalOverlay.classList.remove('active') // Remove parametros('') da class
    modalOverlay.querySelector('iframe').src = "" //Retira o conteúdo ao clicar no CLOSE, passando o src para VAZIO
    modal.classList.remove('maximize-modal')// Remove parametros('') da class
})


document.querySelector('.maximize').addEventListener("click", function() { // Full-screen mode
    if (modal.classList.contains('maximize-modal')) {  //Verifica se a class contém o parametro ('')
         
        modal.classList.remove('maximize-modal')
        document.querySelector('#fullscreen').textContent = "fullscreen" 
    
    } else {
        modal.classList.add('maximize-modal')

        document.querySelector('#fullscreen').textContent = "fullscreen_exit"
        }

})
