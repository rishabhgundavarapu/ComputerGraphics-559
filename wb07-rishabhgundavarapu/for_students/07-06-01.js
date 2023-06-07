/*jshint esversion: 6 */
// @ts-check

/**
 * Minimal Starter Code for the QuadCopter assignment
 */

import * as T from "../libs/CS559-Three/build/three.module.js";
import { DoubleSide } from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";


let renderer = new T.WebGLRenderer();
renderer.setSize(600, 400);
document.body.appendChild(renderer.domElement);

let scene = new T.Scene();
let camera = new T.PerspectiveCamera(
        40,
        renderer.domElement.width / renderer.domElement.height,
        1,
        1000
    );

camera.position.z = 10;
camera.position.y = 5;
camera.position.x = 5;
camera.lookAt(0, 0, 0);

// since we're animating, add OrbitControls
let controls = new OrbitControls(camera, renderer.domElement);

scene.add(new T.AmbientLight("white", 0.2));

// two lights - both a little off white to give some contrast
let dirLight1 = new T.DirectionalLight(0xf0e0d0, 1);
dirLight1.position.set(5, 5, 0);
scene.add(dirLight1);

let dirLight2 = new T.DirectionalLight(0xd0e0f0, 1);
dirLight2.position.set(-1, 1, -0.2);
scene.add(dirLight2);

// make a ground plane
let groundBox = new T.BoxGeometry(10, 0.1, 10);
let groundMesh = new T.Mesh(
        groundBox,
        new T.MeshStandardMaterial({ color: 0x88b888, roughness: 0.9 })
    );
// put the top of the box at the ground level (0)
groundMesh.position.y = -0.05;
scene.add(groundMesh);

// this is the part the student should change
//** GET RID OF THIS SILLY DONUT! Replace it with an aircraft*/
let boxgeom = new T.BoxGeometry(1,0.8,4);
let tempMaterial = new T.MeshStandardMaterial({ color: "red" });
let tempMesh = new T.Mesh(boxgeom, tempMaterial);
scene.add(tempMesh);
tempMesh.scale.set(0.7, 0.7, 0.7);
tempMesh.position.y = 2;

let ringgeom = new T.TorusGeometry(5,1);
let RingMaterial = new T.MeshStandardMaterial({ color: "green" ,side:DoubleSide});
let ringMesh= new T.Mesh(ringgeom,RingMaterial)
let ringMesh2= new T.Mesh(ringgeom,RingMaterial)
let ringMesh3 =new T.Mesh(ringgeom,RingMaterial)
let ringMesh4 =new T.Mesh(ringgeom,RingMaterial)

scene.add(ringMesh3)
ringMesh3.rotateX(Math.PI/2)
ringMesh3.scale.set(0.1,0.1,0.1)
ringMesh3.position.y=2
ringMesh3.position.x=0.85
ringMesh3.position.z=-1.1

scene.add(ringMesh4)
ringMesh4.rotateX(Math.PI/2)
ringMesh4.scale.set(0.1,0.1,0.1)
ringMesh4.position.y=2
ringMesh4.position.x=-0.85
ringMesh4.position.z=-1.1



scene.add(ringMesh)
ringMesh.rotateX(Math.PI/2)
ringMesh.scale.set(0.1,0.1,0.1)
ringMesh.position.y=2
ringMesh.position.x=0.85
ringMesh.position.z=0.6

scene.add(ringMesh2)
ringMesh2.rotateX(Math.PI/2)
ringMesh2.scale.set(0.1,0.1,0.1)
ringMesh2.position.y=2
ringMesh2.position.x=-0.85
ringMesh2.position.z=0.6

let copter = new T.Group();
copter.add(ringMesh)
copter.add(ringMesh2)
copter.add(ringMesh3)
copter.add(tempMesh)
copter.add(ringMesh4)
scene.add(copter)


// propellers
let propel = new T.CylinderGeometry(0.2,0.2,5)
let propelmaterial= new T.MeshStandardMaterial({color:'yellow'})
let propel1= new T.Mesh(propel,propelmaterial)
propel1.position.set(0.8,2,0.6)
propel1.rotateZ(Math.PI/2)
propel1.scale.set(0.2,0.2,0.2)
scene.add(propel1)

let propel2 = new T.Mesh(propel,propelmaterial)
propel2.position.set(-0.8,2,0.6)
propel2.rotateZ(Math.PI/2)
propel2.scale.set(0.2,0.2,0.2)
scene.add(propel2)


let propel3 = new T.Mesh(propel,propelmaterial)
propel3.position.set(-0.8,2,-1.1)
propel3.rotateZ(Math.PI/2)
propel3.scale.set(0.2,0.2,0.2)
scene.add(propel3)

let propel4 = new T.Mesh(propel,propelmaterial)
propel4.position.set(0.8,2,-1.1)
propel4.rotateZ(Math.PI/2)
propel4.scale.set(0.2,0.2,0.2)
scene.add(propel4)

copter.add(propel1,propel2,propel3,propel4)
copter.scale.set(0.7,0.7,0.7)
copter.translateX(0)
copter.rotateZ(Math.PI/4)
// copter.position.y=1.5

let radarbasegeom = new T.BoxGeometry(1,1,1)
let radarbase = new T.Mesh(radarbasegeom,tempMaterial)
radarbase.position.set(0,0,0)
scene.add(radarbase)


// code from https://threejs.org/docs/#api/en/geometries/LatheGeometry
 const points = [];
for (let i = 0; i < 10; i++) 
{
    points.push(new T.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
}
const lathe = new T.LatheGeometry(points,50);
let radarantgeom = new T.MeshStandardMaterial({color:'lightblue',emissive:'blue',side:DoubleSide})
let radarant = new T.Mesh(lathe,radarantgeom)
radarant.scale.set(0.05,0.05,0.05)
radarant.position.set(0,1.2,0)
radarant.rotateZ(-Math.PI/4)
scene.add(radarant)
// dish POINTS AT THE COPTER

// second copter
let coptergeom2 = new T.MeshStandardMaterial({color:'blue',emissive:'lightgreen'})
let copterbody = new T.BoxGeometry(1,1,3)
let smallcopter = new T.Mesh(copterbody,coptergeom2)
smallcopter.position.set(-2,1,1)
let propelmaterial2= new T.MeshStandardMaterial({color:'black',emissive:'blue'})
let p1 = new T.Mesh(propel,propelmaterial2)
let p2 = new T.Mesh(propel,propelmaterial2)
let p3 = new T.Mesh(propel,propelmaterial2)
p1.position.set(-0.95,1,0.6)
p1.rotateZ(Math.PI/2)
p1.scale.set(0.2,0.2,0.2)
p2.position.set(-3.05,1,0.6)
p2.rotateZ(Math.PI/2)
p2.scale.set(0.2,0.2,0.2)
p3.position.set(-2.05,2.2,2)
p3.rotateY(Math.PI/2)
p3.scale.set(0.2,0.2,0.2)
let propelspace1 = new T.Mesh(ringgeom,RingMaterial)
let propelspace2 = new T.Mesh(ringgeom,RingMaterial)
let propelspace3 = new T.Mesh(ringgeom,RingMaterial)
propelspace1.rotateX(Math.PI/2)
propelspace1.scale.set(0.1,0.1,0.1)
propelspace1.position.y=1
propelspace1.position.x=-0.95
propelspace1.position.z=0.6
propelspace2.rotateX(Math.PI/2)
propelspace2.scale.set(0.1,0.1,0.1)
propelspace2.position.y=1
propelspace2.position.x=-3.05
propelspace2.position.z=0.6
propelspace3.scale.set(0.1,0.1,0.1)
propelspace3.position.y=2.2
propelspace3.rotateX(Math.PI)
propelspace3.position.x=-2.05
propelspace3.position.z=2


let specialcopter = new T.Group()
specialcopter.add(smallcopter,propelspace1,propelspace2,p1,p2,propelspace3,p3)
specialcopter.position.set(-3.5,0,-4)
specialcopter.scale.set(0.4,0.4,0.4)
scene.add(specialcopter)

// pick a new position and go there
let newpositionx = Math.random() * 1
let newpositionz = Math.random() * 10



let dirLight3 = new T.DirectionalLight(0xd0e0f0, 1);
dirLight3.position.set(-1, 1, -0.2);
scene.add(dirLight2);

let lastTimestamp
// animation loop
function animateLoop(timestamp) {
    //** EXAMPLE CODE - STUDENT SHOULD REPLACE */
    // move in a circle
    let theta = timestamp / 1000;
    let timeDelta = 0.001 * (lastTimestamp ? timestamp - lastTimestamp : 0);
    lastTimestamp = timestamp;
    let x = 3 * Math.cos(theta);
    let z = 3 * Math.sin(theta);
    copter.position.x=x
    copter.position.z=z
    specialcopter.position.x=x*timeDelta + 2.5
    specialcopter.position.z=z +2
    specialcopter.lookAt(0,0,3)
    propel1.rotateX(0.25*theta)
    propel2.rotateX(0.25*theta)
    propel3.rotateX(0.25*theta)
    propel4.rotateX(0.25*theta)
    p1.rotateX(.25*theta)
    p2.rotateX(.25*theta)
    p3.rotateX(0.25*theta)
    copter.lookAt(0,0,0)
    copter.rotateX(Math.PI/20)
    radarant.lookAt(copter.position)
    renderer.render(scene, camera);
    window.requestAnimationFrame(animateLoop);
  }
window.requestAnimationFrame(animateLoop);