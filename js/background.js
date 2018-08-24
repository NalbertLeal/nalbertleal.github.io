var Circle = function(radius, ctx) {
    this.radius = radius,
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.speed = (Math.random()+2) * 2;
    if(Math.random() * 2 < 1) {
        this.speed = -this.speed;
    }
    this.speedX = this.speed;
    this.speedY = this.speed;
    this.ctx = ctx;
    this.draw =  function() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // this.ctx.strokeStyle = "black";
        // this.ctx.stroke();
        ctx.fillStyle = "rgba(0, 0, 210, 0.350)";
        ctx.fill();
    }
    this.move = function() {
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

var canvas = document.getElementById("background");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var canvasCtx = canvas.getContext("2d");

let radius = 3;
var circles = [];

for(var i=0; i<800; i++) {
    var c = new Circle(radius, canvasCtx);
    c.draw();

    circles.push(c);
}

function animate() {
    canvasCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for(var i=0; i<circles.length; i++) {
        circles[i].move();
    }

    requestAnimationFrame(animate);
}

animate();