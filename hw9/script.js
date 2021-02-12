let html = document.querySelector('html')
let wrapper = document.querySelector('.wrapper');

let h2 = document.createElement('h2')
h2.appendChild(document.createTextNode('События'))
wrapper.appendChild(h2)

let div = document.createElement('div')
div.style.height = '400px'
div.style.width = '400px'
div.style.border = '2px solid grey'
wrapper.appendChild(div)

let outsideCoords = document.createElement('span')
outsideCoords.textContent = 'x: 0; y: 0'
div.before(outsideCoords)

let insideCoords = document.createElement('span')
div.after(insideCoords)

html.addEventListener('mousemove', function (event) {
    outsideCoords.textContent = `x: ${event.clientX},   y: ${event.clientY}`
    if (div === event.target) {
        insideCoords.textContent = `x: ${event.clientX - div.getBoundingClientRect().x} ,   y: ${Math.floor(event.clientY - div.getBoundingClientRect().y)}`
    } else{
        insideCoords.textContent = ''
    }
})