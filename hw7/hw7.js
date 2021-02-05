class Figure {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
    }
}

class Line extends Figure {
    constructor(x, y, x2, y2, color) {
        super(x, y, color);
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
}

class Rect extends Figure {
    constructor(x, y, w, h, color) {
        super(x, y, color);
        this.width = w;
        this.height = h;
        this.draw = function (ctx) {
            ctx.beginPath()
            ctx.rect(x, y, w, h)
            ctx.fillStyle = color
            ctx.fill()
        }
    }
}

class Circle extends Figure {
    constructor(x, y, r, color) {
        super(x, y, color);
        this.radius = r;
        this.draw = function (ctx) {
            ctx.beginPath()
            ctx.arc(x, y, r, 0, 2 * Math.PI)
            ctx.fillStyle = color
            ctx.fill()
        }
    }
}

class Canvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext('2d')
        this.add = function (...figures) {
            for (let i = 0; i < figures.length; i++) {
                figures[i].draw(this.ctx)
            }
        }
    }
}

let line = new Line(50, 250, 200, 200, 'rgb(217, 7, 56)');
let line2 = new Line(60, 260, 210, 210, 'rgb(217, 7, 56)');
let rect = new Rect(260, 170, 60, 120, 'rgb(219, 96, 125)')
let rect2 = new Rect(280, 150, 120, 45, 'rgba(96, 109, 219, .8)')
let rect3 = new Rect(360, 180, 60, 50, 'rgb(193, 96, 219)')
let circle = new Circle(100, 100, 50, 'rgba(30, 208, 214, .7)')
let smallCircle = new Circle(60, 60, 30, 'rgba(0, 247, 255, .5)')

let drawArea = new Canvas('canvas');

for (let i = 0; i <= drawArea.canvas.offsetWidth; i++) {
    if (i % 2) {
        drawArea.add(new Line(i * 10 + 10, 0, i * 10, 10, 'rgb(217, 7, 56)'))
    } else {
        drawArea.add(new Line(i * 10, 0, i * 10 + 10, 10, 'rgb(217, 7, 56)'))
    }
}

drawArea.add(rect, rect3, rect2)
drawArea.add(line, line2)
drawArea.add(smallCircle, circle)
