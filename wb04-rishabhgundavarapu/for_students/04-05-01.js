/**
 * 04-05-01.js - a simple JavaScript file that gets loaded with
 * page 5 of Workbook 4 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020, February 2021
 *
 */

/**
 * If you want to read up on JavaScript classes, 
 * see the tutorial on the class website:
 * 
 * https://cs559.github.io/559Tutorials/javascript/oop-in-js-1/
 */
class Boid {
    /**
     * 
     * @param {number} x    - initial X position
     * @param {number} y    - initial Y position
     * @param {number} vx   - initial X velocity
     * @param {number} vy   - initial Y velocity
     * @param {number} hit  - hitting the wall
     */
    constructor(x, y, vx = 1, vy = 0,hit=0,color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.hit=hit;
        this.color=color
    }
    /**
     * Draw the Boid
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context) {

        context.save();
        context.translate(this.x, this.y);
        context.lineWidth=2.5
        context.rotate(Math.atan2(this.vy, this.vx));
        if(this.hit>0) {this.color='red'     
        this.hit-=1;
    }
        else{this.color='black'}
        context.strokeStyle=this.color
        context.beginPath();
        context.moveTo(5, 0);
        context.lineTo(-5, 5);
        context.lineTo(-5, -5);
        context.closePath();
        context.stroke();
        context.beginPath()
        context.strokeStyle='red';
        context.moveTo(-5,0)
        context.lineTo(-8,0)
        context.closePath();
        context.stroke();
        context.restore();
        context.beginPath();
        context.fillStyle='blue'
        context.arc(550, 300, 15, 0, 2 * Math.PI);  // draw big blue circle as obstacle
        context.closePath();
        context.fill();
    }
    /**
     * Perform the "steering" behavior -
     * This function should update the velocity based on the other
     * members of the flock.
     * It is passed the entire flock (an array of Boids) - that includes
     * "this"!
     * Note: dealing with the boundaries does not need to be handled here
     * (in fact it can't be, since there is no awareness of the canvas)
     * *
     * And remember, (vx,vy) should always be a unit vector!
     * @param {Array<Boid>} flock 
     */
    steer(flock) {
        /*
		// Note - this sample behavior is just to help you understand
		// what a steering function might  do
		// all this one does is have things go in circles, rather than
		// straight lines
		// Something this simple would not count for the advanced points:
		// a "real" steering behavior must consider other boids,
		// or at least obstacles.
		
        // a simple steering behavior: 
        // create a rotation matrix that turns by a small amount
        // 2 degrees per time step
        const angle = 2 * Math.PI / 180;
        const s = Math.sin(angle);
        const c = Math.cos(angle);

        let ovx = this.vx;
        let ovy = this.vy;

        this.vx =  ovx * c + ovy * s;
        this.vy = -ovx * s + ovy * c;
		*/
    }
}


/** the actual main program
 * this used to be inside of a function definition that window.onload
 * was set to - however, now we use defer for loading
 */

 /** @type Array<Boid> */
let boids = [];
let dirs=[0,1,-1]
let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("flock"));
let context = canvas.getContext("2d");

let speedSlider = /** @type {HTMLInputElement} */ (document.getElementById("speed"));

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    boids.forEach(boid => boid.draw(context));
}

/**
 * Create some initial boids
 * STUDENT: may want to replace this
 */
boids.push(new Boid(100, 100));
boids.push(new Boid(550, 150, 0, -1));
//boids.push(new Boid(300, 300, 0, -1));
//boids.push(new Boid(400, 400, 0, 1));

/**
 * Handle the buttons
 */
document.getElementById("add").onclick = function () {
    let counter=0
    while(counter<11){       
        let meowx=dirs[Math.floor(Math.random()*dirs.length)];
        let meowy=dirs[Math.floor(Math.random()*dirs.length)];
        if(meowx!=0 && meowy!=0){
            boids.push(new Boid(Math.random()*canvas.width,Math.random()*canvas.height,meowx,meowy,0))
            counter++;
        }
    }
    // Students Fill This In
};
document.getElementById("clear").onclick = function () {
    boids=[]
};

let lastTime; // will be undefined by default
/**
 * The Actual Execution
 */
function loop(timestamp) {
    // time step - convert to 1/60th of a second frames
    // 1000ms / 60fps
    const delta = (lastTime ? timestamp-lastTime : 0) * 1000.0/60.0;

    // change directions
    boids.forEach(boid => boid.steer(boids));
    // move forward
    let lifetime=50 // lifetime of the color when boids hit the wall or hit a fellow boid
    let speed = Number(speedSlider.value);
    boids.forEach(function (boid) {
        boid.x += boid.vx * speed;
        boid.y += boid.vy * speed;
    });
    boids.forEach(function(boid) { if((boid.x - 550) * (boid.x - 550) + (boid.y - 300) * (boid.y - 300) <= 30){ // check for blue circle hit
        boid.x = 550-(boid.x-550);
        boid.vx *= -1;
        boid.y = 300 - (boid.y - 300);
        boid.vy *= -1;
        boid.hit=lifetime
    }
    });
    // make sure that we stay on the screen
    boids.forEach(function (boid) {
        if (boid.x >= canvas.width) {
            boid.x = canvas.width - (boid.x - canvas.width);
            boid.vx *= -1;
            boid.hit=lifetime;
        }
        if (boid.y >= canvas.height) {
            boid.y = canvas.height - (boid.y - canvas.height);
            boid.vy *= -1;
            boid.hit=lifetime;
            //console.log(boid.hit)
        }
        if (boid.x <= 0) {
            boid.x *= -1;
            boid.vx *= -1;
            boid.hit=lifetime;
        }
        if (boid.y <= 0) {
            boid.y *= -1;
            boid.vy *= -1;
            boid.hit=lifetime;
        }
        boids.forEach(function (dot) {
            if (boid != dot && (boid.x - dot.x) * (boid.x - dot.x) + (boid.y - dot.y) * (boid.y - dot.y) <= 25){ // if boids come within 25 units of each other bounce them (only when they face each other)
                boid.vx = (boid.x - dot.x);
                boid.vy = boid.y - dot.y;
                boid.hit = lifetime;
            }
        });
        boid.hit = Math.max(boid.hit - 1, 0); // prevent the hit counter from going negative
    });
    // now we can draw
    draw();
    // and loop
    window.requestAnimationFrame(loop);

}
// start the loop with the first iteration
window.requestAnimationFrame(loop);


