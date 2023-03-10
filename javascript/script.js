const submit = document.querySelector('#submit')
const feedBackText = document.querySelector('#feedback-text')
const tyCard = document.querySelector('.thank-you-card')

submit.addEventListener('click', (e) => {
    if(functionCalled) {
        tyCardVisible()
    } else {
        e.preventDefault()
    }
})


let functionCalled = false

function saveFeedback(btn) {
    const rate = {
        'rate': btn
    }
    localStorage.setItem('feedBack', JSON.stringify(rate))
    functionCalled = true
}


function tyCardVisible() {
    let getfeedBacklS = localStorage.getItem('feedBack')
    let feedBack = JSON.parse(getfeedBacklS)
    tyCard.style.visibility = 'visible'
    feedBackText.innerHTML = 'You selected ' + feedBack.rate + ' out of 5'
}
