// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { DoubleSide, Group } from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";


let renderer = new T.WebGLRenderer();
renderer.setSize(500, 500);
// @ts-ignore
document.getElementById("div1").appendChild(renderer.domElement);

// student does the rest.
let lowerbodysphere;
let bodysphere;
let snowmanhead;

let scene = new T.Scene();
let camera = new T.PerspectiveCamera();
camera.position.z = 19;
camera.position.y = 10;
camera.position.x = 13;


// lower body
let materialsbody = new T.MeshStandardMaterial({color:'red'});
let geometry = new T.SphereGeometry(1, 20, 20);
bodysphere = new T.Mesh(geometry, materialsbody);
bodysphere.position.set(1, 1,1);
scene.add(bodysphere);

//mid body
let geometry2=new T.SphereGeometry(0.7, 20, 20);
lowerbodysphere=new T.Mesh(geometry2,materialsbody)
lowerbodysphere.position.set(1,2,1)
scene.add(lowerbodysphere)

//head
let geometry3=new T.SphereGeometry(0.5, 20, 20);
snowmanhead=new T.Mesh(geometry3,materialsbody)
snowmanhead.position.set(2,5,1)
scene.add(snowmanhead)

//nose
let materialnose=new T.MeshStandardMaterial({color:'red'})
let conegeometry = new T.ConeGeometry(1, 9, 10)
let snowmannose = new T.Mesh(conegeometry,materialnose)
snowmannose.rotateX(1.57)
snowmannose.scale.set(0.1,0.1,0.1)
snowmannose.position.set(1,3.1,1.5)
scene.add(snowmannose)


// eyes
let materialeyes = new T.MeshStandardMaterial({color:'black'})
let eyegeom = new T.SphereGeometry(0.7,20,20)
let eyes1=new T.Mesh(eyegeom,materialeyes)
eyes1.position.set(1.2,3.2,1.4)
eyes1.scale.set(0.1,0.1,0.1)
scene.add(eyes1)

let eyes2=new T.Mesh(eyegeom,materialeyes)
eyes2.position.set(0.8,3.2,1.4)
eyes2.scale.set(0.1,0.1,0.1)
scene.add(eyes2)

// mouth

let mouthgeom = new T.RingGeometry(3,4,30)
let mouth = new T.Mesh(mouthgeom,materialeyes)
mouth.position.set(1,2.9,1.5)
mouth.scale.set(0.03,0.03,0.03)
scene.add(mouth)

// hat
let materialhat = new T.MeshStandardMaterial({color:'gold',side:DoubleSide})
let hatgeom = new T.RingGeometry(3,4,30)
let hatfirst = new T.Mesh(hatgeom,materialhat)
hatfirst.position.set(1,3.45,1.1)
hatfirst.rotateX(1.57)
hatfirst.scale.set(0.15,0.15,0.15)
scene.add(hatfirst)

//hat ring
let hatringgeom = new T.CylinderGeometry(2.5,3.2,3)
let hatring = new T.Mesh(hatringgeom,materialhat)
hatring.position.set(1,3.65,1.1)
hatring.scale.set(0.15,0.15,0.15)
scene.add(hatring)

// arms

let materialarms = new T.MeshStandardMaterial({color:'brown'})
let armgeom = new T.CylinderGeometry(1,1,10)
let arm1 = new T.Mesh(armgeom,materialarms)
let arm2 = new T.Mesh(armgeom,materialarms)
arm2.position.set(2.25,2.5,1)
arm2.rotateZ(-Math.PI/3)
arm1.position.set(0.3,2.5,1)
arm1.scale.set(0.15,0.15,0.15)
arm2.scale.set(0.15,0.15,0.15)
scene.add(arm1)
scene.add(arm2)

// second snowman rotating is creative




let bodysphere2 = new T.Mesh(geometry, materialsbody);
bodysphere2.position.set(-2, 1,3);
bodysphere2.scale.set(0.7,0.7,0.7)
scene.add(bodysphere2);
let lowerbodysphere2=new T.Mesh(geometry2,materialsbody)
lowerbodysphere2.position.set(-2,2,3)
lowerbodysphere2.scale.set(0.8,0.8,0.8)
scene.add(lowerbodysphere2)
let snowmanhead2=new T.Mesh(geometry3,materialsbody)
snowmanhead2.position.set(-2,2.8,3)
snowmanhead2.scale.set(0.8,0.8,0.8)
scene.add(snowmanhead2)

let eyes11=new T.Mesh(eyegeom,materialeyes)
eyes11.position.set(-1.9,2.95,3.3)
eyes11.scale.set(0.1,0.1,0.1)
scene.add(eyes11)

let eyes12=new T.Mesh(eyegeom,materialeyes)
eyes12.position.set(-2.1,2.95,3.3)
eyes12.scale.set(0.1,0.1,0.1)
scene.add(eyes12)

let mouth2 = new T.Mesh(mouthgeom,materialeyes)
mouth2.position.set(-2,2.8,3.4)
mouth2.scale.set(0.03,0.03,0.4)
scene.add(mouth2)

let arm11 = new T.Mesh(armgeom,materialarms)
let arm12 = new T.Mesh(armgeom,materialarms)
arm12.position.set(-2.75,2,3.1)
arm12.rotateZ(-Math.PI/3)
arm11.position.set(-1.3,2,3.1)
arm11.rotateZ(Math.PI/3)
arm11.scale.set(0.15,0.15,0.15)
arm12.scale.set(0.15,0.15,0.15)
scene.add(arm11)
scene.add(arm12)


const group = new T.Group();
group.add(arm11)
group.add(arm12)
group.add(eyes11)
group.add(eyes12)
group.add(lowerbodysphere2)
group.add(bodysphere2)
group.add(mouth2)
group.add(snowmanhead2)
scene.add(group)

let controls = new OrbitControls(camera, renderer.domElement);

let groundBox = new T.BoxGeometry(15, 0.1, 15);
let groundMesh = new T.Mesh(
groundBox,
new T.MeshStandardMaterial({ color: 'green' })
);
// put the top of the box at the ground level (0)
//groundMesh.position.y = -0.05;
scene.add(groundMesh);



// lights
let dir = new T.DirectionalLight("white", 1);
dir.position.set(5, 125, 10);
scene.add(dir);

let dir2 = new T.DirectionalLight("white", 1);
dir2.position.set(5, 0, 20);
scene.add(dir2);





let box2 = new T.BoxGeometry(1,1,1);
let c3 =new T.Mesh(box2, new T.MeshStandardMaterial({ color: "green" }));
let c4 = new T.Mesh(box2, new T.MeshStandardMaterial({ color: "blue" }));
scene.add(c4,c3)
c3.translateY(2)
c4.translateY(2)

let g = new T. Group();


// some extra shapes
let box = new T.TorusGeometry(1.5, 0.2,4,3);
let cube1 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "blue" }));
cube1.position.set(7, 2, 7);
scene.add(cube1);

let cube2 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "red" }));
cube2.position.set(-7, 2, 7);
cube2.rotateZ(45);
scene.add(cube2);

let cube3 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "yellow" }));
cube3.position.set(0,2,7)
scene.add(cube3);
group.translateX(10);
group.rotateX(90);    // unlike THREE this is degrees
group.translateX(10);
group.rotateX(90);    // unlike THREE this is degrees
group.translateX(10);
group.rotateX(90)
group.translateX(10)
// group.translateX(30)
let counter = 1;
let lastTimestamp
let angle =0
function animate(timestamp) {
  // Convert time change from milliseconds to seconds
  let timeDelta = 0.001 * (lastTimestamp ? timestamp - lastTimestamp : 0);
  lastTimestamp = timestamp;

  cube1.rotateX(0.5 * timeDelta);
  cube1.rotateY(0.5 * timeDelta);
  cube2.rotateX(2.5*timeDelta)
  cube3.rotateY(5*timeDelta)

  cube3.rotateX(2*timeDelta)
  angle = angle + counter * 2
  console.log(angle)
  if(angle>50 || angle <=0){
    counter*= -1;
  }
  arm1.rotateZ(0.01*counter*Math.PI)
  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);

renderer.render(scene, camera);