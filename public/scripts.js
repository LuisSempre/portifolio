const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener('click', function(){
        modalOverlay.classList.add('active')
        modalOverlay.querySelectorAll('iframe').src = `https://youtu.be/Fbu7z5dXcRs/embed/${videoid}`;
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})


