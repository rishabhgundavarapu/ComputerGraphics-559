/*jshint esversion: 6 */
//@ts-check

// these two things are the main UI code for the train
// students learned about them in last week's workbook

import { draggablePoints } from "../libs/CS559/dragPoints.js";
import { RunCanvas } from "../libs/CS559/runCanvas.js";

// this is a utility that adds a checkbox to the page 
// useful for turning features on and off
import { makeCheckbox } from "../libs/CS559/inputHelpers.js";

/**
 * Have the array of control points for the track be a
 * "global" (to the module) variable
 *
 * Note: the control points are stored as Arrays of 2 numbers, rather than
 * as "objects" with an x,y. Because we require a Cardinal Spline (interpolating)
 * the track is defined by a list of points.
 *
 * things are set up with an initial track
 */
/** @type Array<number[]> */
let thePoints = [
  [150, 150],
  [150, 450],
  [450, 450],
  [450, 150]
];

/**
 * Draw function - this is the meat of the operation
 *
 * It's the main thing that needs to be changed
 *
 * @param {HTMLCanvasElement} canvas
 * @param {number} param
 */
makeCheckbox("simple-track");
makeCheckbox("arc-length").checked=true;
const strack=document.getElementById("check-simple-track")
console.log(strack)
function draw(canvas, param) {

  let context = canvas.getContext("2d");
  let sliderval = Number(slider.value)
  // clear the screen
  context.clearRect(0, 0, canvas.width, canvas.height);

  // draw the control points
  thePoints.forEach(function(pt) {
    context.beginPath();
    context.arc(pt[0], pt[1], 5, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  });
  context.beginPath();
  context.strokeStyle='blue'
  context.moveTo(thePoints[0][0], thePoints[0][1]);
  if(document.getElementById("check-simple-track")){ // if checked
   for (let i=0;i<4;i++) {
      console.log('meow')
      let p0= thePoints[(i+3)%4]; 
      let p1=thePoints[i]; 
      let p2=thePoints[(i+1)%4]; 
      console.log(thePoints[0][0], thePoints[0][1])
      let p3=thePoints[(i+2)%4]; 
      let diff1=[p2[0]-p0[0],p2[1]-p0[1]] 
      let diff2=[p3[0]-p3[0],p1[1]-p1[1]]
      let bez1x=p1[0]+diff1[0]/6; 
      console.log(bez1x)
      let bez1y=p1[1]+diff1[1]/6; 
      console.log(bez1y)
      let bez2x=p2[0]-diff2[0]/6; 
      let bez2y=p2[1]-diff2[1]/6; 
      context.bezierCurveTo(bez1x, bez1y, bez2x, bez2y, p2[0], p2[1]);


   }
 }
 context.closePath();
 context.stroke();
// draw train 
 context.beginPath();
 if(sliderval<1){
  context.fillStyle='red'
  context.lineWidth=2.5
  context.arc((thePoints[0][0])+sliderval+2,(thePoints[0][1]+24)+sliderval*300,5,Math.PI/2,Math.PI/3)
  context.stroke();
  context.fillRect((thePoints[0][0]-10)+sliderval,(thePoints[0][1]-10)+sliderval*300,25,35)
 }
 context.closePath();
 context.stroke();
 context.fill();

  // [150, 150],
  // [150, 450],
  // [450, 450],
  // [450, 150]

  // now, the student should add code to draw the track and train
}

/**
 * Initialization code - sets up the UI and start the train
 */
let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
let context = canvas.getContext("2d");

// we need the slider for the draw function, but we need the draw function
// to create the slider - so create a variable and we'll change it later
let slider; // = undefined;

// note: we wrap the draw call so we can pass the right arguments
function wrapDraw() {
    // do modular arithmetic since the end of the track should be the beginning
    draw(canvas, Number(slider.value) % thePoints.length);
}
// create a UI
let runcanvas = new RunCanvas(canvas, wrapDraw);
// now we can connect the draw function correctly
slider = runcanvas.range;

// note: if you add these features, uncomment the lines for the checkboxes
// in your code, you can test if the checkbox is checked by something like:
// document.getElementById("check-simple-track").checked
// in your drawing code
// WARNING: makeCheckbox adds a "check-" to the id of the checkboxes
//
// lines to uncomment to make checkboxes

//makeCheckbox("bspline");

// helper function - set the slider to have max = # of control points
function setNumPoints() {
    runcanvas.setupSlider(0, thePoints.length, 0.05);
}
setNumPoints();
runcanvas.setValue(0);

// add the point dragging UI
draggablePoints(canvas, thePoints, wrapDraw, 10, setNumPoints);



