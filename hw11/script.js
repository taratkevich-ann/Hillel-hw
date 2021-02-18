const body = document.querySelector('body')

const createHeaderContent = (data) => {
    let header = document.createElement('header')
    let h1 = document.createElement('h1')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')

    h1.innerHTML = data.main.cosmos
    h3.innerHTML = data.main.infoCosmos
    p.innerHTML = data.main.infoFly

    header.appendChild(h1)
    header.appendChild(h3)
    header.appendChild(p)
    body.appendChild(header)
}

const showContent = () => {
    let btn = document.createElement('a')
    btn.setAttribute('href', '#')
    btn.classList.add('show-content')
    btn.innerHTML = 'Show info about planet'

    body.appendChild(btn)
    btn.addEventListener('click', function (event) {
        event.preventDefault()
        let planets = document.querySelectorAll('div.about-planet')
        for (let i = 0; i < planets.length; i++) {
            planets[i].style.display = 'block'
        }
    })
}

const createMainContent = (data) => {
    let mainDiv = document.createElement('div')
    mainDiv.classList.add('main')
    let planets = data.planets

    for (let planet in planets) {
        let div = document.createElement('div')
        div.classList.add('about-planet')
        div.style.display = 'none'
        let h2 = document.createElement('h2')
        let img = document.createElement('img')
        img.setAttribute('src', `${planets[planet].url}`)

        h2.innerHTML = planets[planet].title

        div.appendChild(h2)
        div.appendChild(img)

        for (let info of planets[planet].info) {
            let p = document.createElement('p')
            p.innerHTML = info
            div.appendChild(p)
        }
        mainDiv.appendChild(div)
    }
    body.appendChild(mainDiv)
}

const createPageContent = (data) => {
    createHeaderContent(data)
    showContent()
    createMainContent(data)
}


fetch('https://trevadim.github.io/vue/data/data.json')
    .then((data) => data.json())
    .then((result) => createPageContent(result))
    .catch((error) => console.log(error))