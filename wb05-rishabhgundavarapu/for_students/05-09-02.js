// @ts-check
export {};  // null statement to tell VSCode we're doing a module

// draw a picture using curves!

let canvas = document.getElementById("canvas1");
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");


const context = canvas.getContext('2d');
context.strokeStyle = '#000';
context.fillStyle='#0000FF'
context.lineWidth = 5;
context.beginPath();
context.moveTo(200, 300);
context.bezierCurveTo(220, 280, 240, 270, 240, 250);
context.moveTo(200, 300);
context.bezierCurveTo(180, 280, 160, 270, 160, 250);
context.lineTo(240,250)
context.moveTo(200, 300);
context.bezierCurveTo(220, 320, 240, 330, 240, 350);
context.moveTo(200, 300);
context.bezierCurveTo(180, 320, 160, 330, 160, 350);
context.lineTo(240,350)
context.closePath();
context.stroke();
context.fill();



   
    
    
    
