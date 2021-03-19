let score = document.querySelector('#score')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');
let rects = []
let count = 0;
let isAnimated = false;

class Square {
    constructor(x, y, w, h, color, speed) {
        rects.push(this)
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = color
        this.speed = speed
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.closePath()
    }

    move() {
        this.y = this.y + this.speed
        return this.y
    }

    isPointInside(x, y) {
        return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
    }
}

setInterval(() => {
    if (isAnimated) {
        new Square(
            Math.random() * canvas.width,
            0,
            20,
            20,
            '#' + (Math.random().toString(16) + '000000').substring(2, 8),
            Math.round(1 + Math.random() * (4 - 1)))
    }
}, 800)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let rect of rects) {
        rect.draw()
        rect.move()

        if (rect.y > canvas.height) {
            rects.splice(rects.indexOf(rect), 1)
        }
    }
    if (isAnimated) requestAnimationFrame(animate);
}

startBtn.addEventListener('click', function () {
    isAnimated = true
    animate()
    rects = []
    count = 0
    score.textContent = count + ''
})

stopBtn.addEventListener('click', function () {
    isAnimated = false
})


window.addEventListener('focus', function () {
    isAnimated = true
    animate()
})

window.addEventListener('blur', function () {
    isAnimated = false
})

canvas.addEventListener('mousedown', function (e) {
    for (let rect of rects) {
        if (rect.isPointInside(e.pageX, e.pageY)) {
            rects.splice(rects.indexOf(rect), 1)
            count += 1
            score.textContent = count + ''
        }
    }
})

document.body.onload = animate;
