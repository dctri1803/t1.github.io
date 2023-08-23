const buyBtns = document.querySelectorAll('.js-buy-ticket')
const closeBtns = document.querySelectorAll('.js-btn-close')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')

function showBuyTicket() {
    modal.classList.add('modal-open')
}

function hideBuyTicket() {
    modal.classList.remove('modal-open')
}

for (const buyBtn of buyBtns ) {
    buyBtn.addEventListener('click', showBuyTicket )
}

for (const closeBtn of closeBtns ) {
    closeBtn.addEventListener('click', hideBuyTicket )
} 

modal.addEventListener('click', hideBuyTicket)

modalContainer.addEventListener('click', function (event){
    event.stopPropagation ()
}) 



