// @ts-check
export {};

// somewhere in your program you'll want a line
// that looks like:
const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
let context = canvas.getContext("2d");
let mouseClick=0;
canvas.onmousedown = function() { mouseClick=1;}
canvas.onmouseup = function() {mouseClick=0;}
// copter box properties
const boxwidth = 80;
const boxheight = 40;
const boxX=305
const boxY=370
let color='black'
let colors=['red','black','white','violet']
let lasttime=0;
let rate=20;
// propeller properties
const bladeLength = 40;
const bladeThin = 4;
const propheight=42
const propwidth=8
context.scale(0.6,0.6)
context.translate(400,300)

function drawPropeller(PropX,PropY,angle){
    if(mouseClick){
        color='white'
    canvas.style.backgroundColor='black'}
    else{
        color='blue'
        canvas.style.backgroundColor='white'
    }
    context.save();
    context.translate(PropX,PropY)
    context.rotate(angle)
    for (let blades = 0; blades < 2; blades++) {
        context.fillRect(-20, -2, bladeLength, bladeThin);
        context.fillStyle=color
        context.rotate(Math.PI/2);
    }
    context.restore();
}


function drawCopter(C){
    context.clearRect(0, 0, canvas.width, canvas.height);



    // drawing the copter
    context.save();
    context.fillStyle = "#964B0099";
    context.beginPath();
    context.moveTo(boxX,boxY)
    context.lineTo(boxX, boxY+boxheight);
    context.lineTo(boxX-boxwidth, boxY+boxheight);
    
    context.lineTo(boxX-boxwidth,boxY);
    context.closePath();
    context.fill();
    
    // wisconsin logo (hopefully) for the coool points
    context.strokeStyle='red'
    context.lineWidth=5
    context.moveTo(boxX,boxY)
    context.lineTo(280,410)
    context.moveTo(280,410)
    context.lineTo(270,383)
    context.moveTo(270,383)
    context.lineTo(255,410)
    context.moveTo(255,410)
    context.lineTo(220,boxY)
    
    context.stroke();


    context.fill();
    // drawing the arms
    context.fillStyle=C
    context.save();
    context.translate(boxX,boxY)
    context.rotate(-Math.PI/4)
    context.fillRect(0, 0, propheight, propwidth);
    context.restore();

    context.save();
    context.translate(boxX-boxwidth,boxY)
    context.rotate(0.25*Math.PI)
    context.fillRect(0, 0, -propheight, propwidth);
    context.restore();

    context.save();
    context.translate(boxX-boxwidth, boxY+boxheight);
    context.rotate(-0.25*Math.PI)
    context.fillRect(0, 0, -propheight, propwidth);
    context.restore();

    context.translate(boxX, boxY+boxheight);
    context.rotate(Math.PI/4)
    context.fillRect(0, 0, propheight, propwidth);
    context.restore();
    
    // drawing propellers with different rates( looks very weird with different rates of spinning; just saying)
    
    drawPropeller(335,346,performance.now())
    drawPropeller(195,346,performance.now()/100)
    drawPropeller(195,445,performance.now()/250)
    drawPropeller(335,445,performance.now()/750)
}
function loop(TIMESTAMP) {
     /// USE TIMESTAMP HERE
     if(TIMESTAMP-lasttime>rate){
    
    context.save()

    context.translate(canvas.height/2-100,canvas.width/2)
    context.scale(0.5,0.5)

    context.rotate(performance.now()/1500)
    drawCopter('green');
    context.restore();

    for(let i=0;i<10;i++){
        context.save()

        context.translate(canvas.height/2-800,canvas.width-980)
        context.scale(0.8,0.8)
    
    
        drawCopter('violet');
        context.translate(400,400)
        context.restore();

    }
    lasttime=TIMESTAMP;
}
 

    window.requestAnimationFrame(loop);
};
// and then you would start the loop with:
window.requestAnimationFrame(loop);