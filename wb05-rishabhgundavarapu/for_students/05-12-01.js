// @ts-check
/* jshint -W069, esversion:6 */

/**
 * drawing function for box 1
 *
 * draw something.
 **/

// note that checking that canvas is the right type of element tells typescript
// that this is the right type - it's a form of a safe cast 
let canvas = document.getElementById("canvas1");
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");

let context = canvas.getContext("2d");

context.beginPath();

// change these so that rather than connecting with straight lines,
// they use cardinal interpolation
// your points should cycle - to make a loop

context.moveTo(50,150);     // you don't need to change this line
context.bezierCurveTo(100, 100/6+150, 300, 100/6+150, 350, 150);   // this line gets replaced by a bezierCurveTo
context.bezierCurveTo(400,150-100/6,375, 50/6+50,350,50);    // this line gets replaced by a bezierCurveTo
context.bezierCurveTo(325, 50-50/6,250, 100,200,100);   // this line gets replaced by a bezierCurveTo
context.bezierCurveTo(150, 100, 75, 50-50/6,50,50);     // this line gets replaced by a bezierCurveTo
context.bezierCurveTo(25, 50+50/6, 0,150-100/6,50,150);   // this line gets replaced by a bezierCurveTo
context.closePath();
context.lineWidth = 3;
context.stroke();
