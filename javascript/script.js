const submit = document.querySelector('#submit')
const feedBackText = document.querySelector('#feedback-text')
const tyCard = document.querySelector('.thank-you-card')

submit.addEventListener('click', () => {
    tyCardVisible()
})

function tyCardVisible() {
    tyCard.style.visibility = 'visible'
}

function feedBack(valor) {
    if (valor === 1) {
        feedBackText.innerHTML = 'You selected ' + '1' + ' out of 5'
    } else if (valor === 2) {
        feedBackText.innerHTML = 'You selected ' + '2' + ' out of 5'
    } else if (valor === 3) {
        feedBackText.innerHTML = 'You selected ' + '3' + ' out of 5'
    } else if (valor === 4) {
        feedBackText.innerHTML = 'You selected ' + '4' + ' out of 5'
    } else if (valor === 5) {
        feedBackText.innerHTML = 'You selected ' + '5' + ' out of 5'
    } else {
        return
    }
}
