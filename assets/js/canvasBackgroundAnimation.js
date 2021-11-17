class Point {
  color = 'rgba(0, 0, 0, .2)'

  constructor(radius, ctx) {
    this.radius = radius
    this.ctx = ctx
    this.defineInitialPosition()
    this.defineSpeed()
  }

  defineInitialPosition() {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight
  }

  defineSpeed() {
    this.speed = Math.random()

    const startDirection = Math.random()
    if (startDirection < 0.5) {
      this.speed = -this.speed
    } 

    this.speedX = this.speed
    this.speedY = this.speed
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
  }

  move() {
    if(this.x+this.radius > window.innerWidth) {
      if(this.speed < 0) {
          this.speedX = this.speed;
      } else {
          this.speedX = this.speed*-1;
      }
    }
    if(this.x-this.radius < 0) {
        if(this.speed < 0) {
            this.speedX = this.speed*(-1);
        } else {
            this.speedX = this.speed;
        }
    }
    if(this.y+this.radius > window.innerHeight) {
        this.speedY = -this.speed;
        if(this.speed < 0) {
            this.speedY = this.speed;
        } else {
            this.speedY = this.speed*-1;
        }
    }
    if(this.y-this.radius < 0) {
        if(this.speed < 0) {
            this.speedY = this.speed*(-1);
        } else {
            this.speedY = this.speed;
        }
    }

    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    this.draw()
  }
}

class AnimationControler {
  points = []

  constructor() {
    this._defineNumberOfPoints()
    this._defineCanvasSize()
    this._getCanvasCtx()
  }

  static _animate(self) {
    return () => {
      self.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      self.points.forEach(point => {
        point.move()
      })
      requestAnimationFrame(AnimationControler._animate(self))
    }
  }

  _defineNumberOfPoints() {
    if(window.innerWidth < 721) {
      this.numberOfPoints = 30
    }
    else {
      this.numberOfPoints = 150
    }
  }

  _defineCanvasSize() {
    const canvas = document.getElementById('background-canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  _getCanvasCtx() {
    const canvas = document.getElementById('background-canvas')
    this.ctx = canvas.getContext('2d')
  }

  _createPoints() {
    for(let i = 0; i < this.numberOfPoints; i++) {
      let point = new Point(3, this.ctx)
      point.draw()
      this.points.push(point)
    }
  }

  startAnimation() {
    this._createPoints()
    AnimationControler._animate(this)()
  }
}