const form = document.getElementById('form')
form.addEventListener('submit', hand(t))

let status = document.getElementById('status')
let attempt = document.getElementById('attempt')
let result = document.getElementById('result')

const Guess = {
    numMax: 10,
    attemptsNumber: 0,
    number: function randomValue(){
        return Math.round(Math.random() * this.numMax)
    }

}

let numberDraw = Guess.number()

function hand (e){
    e.preventDefault()

    let kick = document.getElementById('kick').value

    if(!kick){
        alert('Digite algum valor')
        return
    }
    updateAttempt(attempt, ++Guess.attemptsNumber)

    if(numberDraw == kick){
        playAgain()
        status.innerHTML = 'Parabéns você acertou!'
        result.style.transition = '0.4s'
        result.style.background = '#37c978'
        result.style.color = '#fff'
        status.style.color = '#fff'
        clear()
    } else if (numberDraw > kick){
        status.innerHTML = 'O número é maior.'
        status.style.color = '#de4251'
        clear()
    }else if (numberDraw < kick){
        status.innerHTML = 'O número é menor.'
        status.style.color = '#de4251'
        clear()
    }
}

function updateAttempt(attempt, value){
    attempt.innerHTML = "Tentativa: " + value
}

function playAgain(){
    document.getElementById('btnRestart').style.display = flex
}

function restart(){
    document.location.reload(true)
}

function clear(){
    document.getElementById('kick').value = ''
}