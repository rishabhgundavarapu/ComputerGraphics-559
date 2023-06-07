// @ts-check
export {};  // null statement to tell VSCode we're doing a module

// recreate the picture from SVG - but don't use quadratics

let canvas = document.getElementById("canvas1");
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");

const context=canvas.getContext('2d');
context.strokeStyle='black'
const diff  = 50 / 3 * 2;
context.beginPath();
context.moveTo(150,100) // start point / first point
context.bezierCurveTo(150,100 + diff,100 + diff,150,100,150);
context.bezierCurveTo(100 - diff,150, 50,100 + diff,50,100);
context.bezierCurveTo(50,100-diff,100-diff,50, 100, 50);
context.bezierCurveTo(100,50+diff,150-diff, 100,150, 100);
context.lineWidth=5;
context.closePath();
context.fillStyle='#80808056'
context.fill();
context.stroke()


