const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const imageId = card.getAttribute("id") //
        const title = card.querySelector('.modal-title').innerHTML
        const chef = card.querySelector('.modal-chef').innerHTML

        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src=`assets/${imageId}`

        modalOverlay.querySelector(".modal-title").innerHTML = title
        modalOverlay.querySelector(".modal-chef").innerHTML = chef
    })
}

document.querySelector(".close-modal").addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})

