function Figure(x, y, color) {
    this.x = x
    this.y = y
    this.color = color
}

function Line(x, y, x2, y2, color) {
    Figure.call(this, x, y, color)
    this.secondX = x2;
    this.secondY = y2;
    this.draw = function (ctx) {
        ctx.beginPath()
        ctx.moveTo(x2, y2)
        ctx.lineTo(x, y)
        ctx.strokeStyle = color
        ctx.stroke()
    }
}

function Rect(x, y, w, h, color) {
    Figure.call(this, x, y, color)
    this.width = w
    this.height = h
    this.draw = function (ctx) {
        ctx.beginPath()
        ctx.rect(x, y, w, h)
        ctx.fillStyle = color
        ctx.fill()
    }
}

function Circle(x, y, r, color) {
    Figure.call(this, x, y, color)
    this.radius = r;
    this.draw = function (ctx) {
        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2 * Math.PI)
        ctx.fillStyle = color
        ctx.fill()
    }
}

function Canvas(canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext('2d')
    this.add = function (...figures) {
        for (let i = 0; i < figures.length; i++) {
            figures[i].draw(this.ctx)
        }
    }
}

let line = new Line(50, 250, 200, 200, 'rgb(121, 59, 209)');
let line2 = new Line(60, 260, 210, 210, 'rgb(121, 59, 209)');
let rect = new Rect(260, 170, 60, 120, 'rgb(241, 245, 118)')
let rect2 = new Rect(280, 150, 120, 45, 'rgba(30, 194, 199, .8)')
let rect3 = new Rect(360, 180, 60, 50, 'rgb(145, 245, 118)')
let circle = new Circle(75, 75, 50, 'rgba(255, 0, 102, .7)')
let smallCircle = new Circle(30, 30, 30, 'rgba(255, 102, 153, .7)')

let drawArea = new Canvas('canvas');

for (let i = 0; i <= drawArea.canvas.offsetWidth; i++) {
    if (i % 2) {
        drawArea.add(new Line(i * 10 + 10, 0, i * 10, 10, 'blue'))
    } else {
        drawArea.add(new Line(i * 10, 0, i * 10 + 10, 10, 'blue'))
    }
}

drawArea.add(rect, rect3, rect2)
drawArea.add(line, line2)
drawArea.add(smallCircle, circle)
