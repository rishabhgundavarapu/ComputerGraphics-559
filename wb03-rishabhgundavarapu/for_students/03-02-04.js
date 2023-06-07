// @ts-check
export {};

import * as trisquare from "./03-02-TriSquare.js";

/** @type {HTMLCanvasElement} */
const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
const context = canvas.getContext('2d');
const slider = /** @type {HTMLInputElement} */ (document.getElementById("slider1"));
const text = /** @type {HTMLInputElement} */ (document.getElementById("text1"));

//context.translate(100, 100);
//context.save();
let c1 = cube ("green");

let c2 cube("red");

let c3 = cube ("yellow");

let g = new T.Group();

g.add(c1);

g.add(c2);

scene.add(g);

scene.add(c3);

c2.translateX(2);

g.translateX(2);

function loop() {

renderer.render(scene, camera);

g.rotateZ(.1);

window.requestAnimation Frame (loop);

loop();

slider.value = "1";

