let buttonsWrapper = document.createElement('div')
buttonsWrapper.classList.add('buttons-wrapper')
document.body.prepend(buttonsWrapper)

let titleWrapper = document.createElement('div')
titleWrapper.classList.add('title-wrapper')
document.body.prepend(titleWrapper)

function clock() {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    if (hours < 10) hours = '0' + hours
    if (minutes < 10) minutes = '0' + minutes
    if (seconds < 10) seconds = '0' + seconds

    titleWrapper.innerHTML = `<h2>${hours}:${minutes}:${seconds}</h2>`
}

clock()
let startClock = setInterval(clock, 0)

let buttonStart = document.createElement('button')
buttonStart.appendChild(document.createTextNode('Start'))

let buttonStop = document.createElement('button')
buttonStop.appendChild(document.createTextNode('Stop'))

buttonsWrapper.appendChild(buttonStart)
buttonsWrapper.appendChild(buttonStop)

buttonStart.addEventListener('click', function () {
    startClock = setInterval(clock, 0)
})

buttonStop.addEventListener('click', function () {
    clearInterval(startClock)
})