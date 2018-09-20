var pointsColor = "rgba(255, 255, 255, 0.400)";

let pointsNumber;
if(window.innerWidth < 721) {
    pointsNumber = 50;
}
else {
    pointsNumber = 200;
}

var Circle = function(radius, ctx) {
    this.radius = radius,
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.speed = Math.random();
    if(Math.random() * 2 < 1) {
        this.speed = -this.speed;
    }
    this.speedX = this.speed;
    this.speedY = this.speed;
    this.ctx = ctx;
    this.closeCircles = [];
    this.circlesMaxDistance = 90;
    this.draw =  function() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.fillStyle = "rgba(0, 0, 210, 0.350)";
        ctx.fillStyle = pointsColor;
        ctx.fill();
    }
    this.findCloseCircles = function(circlesArray) {
        this.closeCircles = [];
        for(var i=0; i<circlesArray.length; i++) {
            if(circlesArray[i].x == this.x && circlesArray[i].y == this.y) {
                continue;
            }
            if(circlesArray[i].x < this.x && circlesArray[i].x >= this.x-this.circlesMaxDistance) {
                if(circlesArray[i].y < this.y && circlesArray[i].y > this.y-this.circlesMaxDistance) {
                    this.closeCircles.push(circlesArray[i]);
                }
                if(circlesArray[i].y > this.y && circlesArray[i].y <= this.y+this.circlesMaxDistance) {
                    this.closeCircles.push(circlesArray[i]);
                }
            }
            if(circlesArray[i].x > this.x && circlesArray[i].x <= this.x+this.circlesMaxDistance) {
                if(circlesArray[i].y < this.y && circlesArray[i].y > this.y-this.circlesMaxDistance) {
                    this.closeCircles.push(circlesArray[i]);
                }
                if(circlesArray[i].y > this.y && circlesArray[i].y <= this.y+this.circlesMaxDistance) {
                    this.closeCircles.push(circlesArray[i]);
                }
            }
        }
    }
    this.drawLineCloseCircles = function() {
        for(var i=0; i<this.closeCircles.length; i++) {
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(this.closeCircles[i].x, this.closeCircles[i].y);
            // this.ctx.strokeStyle = '#f0f0f0'
            this.ctx.strokeStyle = pointsColor;
            this.ctx.stroke();
        }
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

for(var i=0; i<pointsNumber; i++) {
    var c = new Circle(radius, canvasCtx);
    c.draw();

    circles.push(c);
}

function animate() {
    canvasCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // canvasCtx.rect(0, 0, canvas.width, canvas.height);
    // canvasCtx.fillStyle = ;
    // canvasCtx.fill();

    for(var i=0; i<circles.length; i++) {
        circles[i].move();
        circles[i].findCloseCircles(circles);
        circles[i].drawLineCloseCircles();
    }

    requestAnimationFrame(animate);
}

animate();