// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { DoubleSide, ShaderChunk } from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";
import { setupBasicScene } from "./06-09-01-helpers.js";


// students can use the object loader
// uncomment this if necessary
import { OBJLoader } from "../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";

/** Setup the window */
/** @type{number} */
let wid = 670; // window.innerWidth;
/** @type{number} */
let ht = 500; // window.innerHeight;
/** @type{T.WebGLRenderer} */
let renderer = new T.WebGLRenderer();
renderer.setSize(wid, ht);
renderer.shadowMap.enabled = true;

document.getElementById("museum_area").appendChild(renderer.domElement);

/* setupBasicScene creates a scene and puts the pedestals in place */
/** @type{T.Scene} */
let scene = setupBasicScene();

// Here, we add a basic, simple first object to the museum.
/**@type{T.Material} */
let material = new T.MeshPhongMaterial({
  color: "gold",
  shininess: 100,
  specular: "black",
  emissive:'red'
});
/**@type{T.BufferGeometry} */
let geometry = new T.BoxGeometry(0.5, 0.5, 0.5);
/**@type{T.Mesh} */
let cube = new T.Mesh(geometry, material);
cube.position.set(2, 1.35, 2);
cube.rotation.set(Math.PI / 4, 0, Math.PI / 4);
cube.castShadow = true;

let materialsbody = new T.MeshStandardMaterial({color:'red',emissive:1});
let geometry30=new T.TetrahedronGeometry(0.5);
let shinysphere=new T.Mesh(geometry30,materialsbody)
let shinysphere2=new T.Mesh(geometry30,materialsbody)
let shinysphere3=new T.Mesh(geometry30,materialsbody)

shinysphere.position.set(2,1.5,-2)
shinysphere2.position.set(2,2,-2)
shinysphere3.position.set(2,2.5,-2)

scene.add(shinysphere)
scene.add(shinysphere2)
scene.add(shinysphere3)



// astronaut
let astronaut
let loader = new OBJLoader();
loader.load("./objects/07-astronaut.obj", function (obj) {
  astronaut = obj;
  obj.position.set(-2, 2.04, 2);
  obj.scale.set(0.2, 0.2, 0.2);
  obj.children[0].castShadow = true;
  astronaut.rotateX(1.57)
  spotlight_3.target = obj;
  scene.add(obj);
});
// teapot
let teapot
loader.load("./objects/07-teapot.obj", function (obj) {
  teapot = obj;
  obj.position.set(-2, 2.04, -2);
  obj.scale.set(0.01, 0.01, 0.01);
  obj.rotateZ(1.57)
  obj.children[0].castShadow = true;
  spotlight_4.target = obj;
  scene.add(obj);
});


// TODO: You need to create three more objects, and place them on pedestals.

/* put a spotlight on the first object */
/**@type{T.SpotLight} */
let spotlight_1 = new T.SpotLight(0xaaaaff, 1);
spotlight_1.angle = Math.PI / 16;
spotlight_1.position.set(2, 5, 2);
spotlight_1.target = cube;
spotlight_1.castShadow = true;
scene.add(spotlight_1);

// TODO: You need to place the lights.
let spotlight_2 = new T.SpotLight(0xaaaaff, 1);
spotlight_2.angle = Math.PI / 16;
spotlight_2.position.set(2,5,-2)
spotlight_2.castShadow = true;
spotlight_2.target=shinysphere
scene.add(spotlight_2)



let spotlight_3 = new T.SpotLight(0xaaaaff, 1);
spotlight_3.angle = Math.PI / 16;
spotlight_3.position.set(-2,5,2)
spotlight_3.castShadow = true;
scene.add(spotlight_3)

let spotlight_4 = new T.SpotLight('pink', 5);
spotlight_4.angle = Math.PI / 16;
spotlight_4.position.set(-2,5,-2)
spotlight_4.castShadow = true;
scene.add(spotlight_4)

/** create a "main camera" */
/** @type{T.PerspectiveCamera} */
let main_camera = new T.PerspectiveCamera(60, wid / ht, 1, 100);
main_camera.position.set(0, 4, 6);
main_camera.rotation.set(-0.5, 0, 0);

/** this will be the "current camera" - we will switch when a button is pressed */
let active_camera = main_camera;

// TODO: You need to place these cameras.
let camera_1 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_1.position.set(2,4,6)
camera_1.lookAt(2,2,4)
let camera_2 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_2.position.set(2,4,2)
camera_2.lookAt(2,2,-1)
let camera_3 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_3.position.set(-2,4,6)
camera_3.lookAt(-2,2,3)
let camera_4 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_4.position.set(-2,4,2)
camera_4.lookAt(-2,2,-1)
scene.add(cube);

// add orbit controls - but only to the main camera
let controls = new OrbitControls(main_camera, renderer.domElement);

/** Tie the buttons to the cameras */
function setupCamButton(name, camera) {
  const button = document.getElementById(name);
  if (!(button instanceof HTMLButtonElement))
    throw new Error(`Button ${name} doesn't exist`);
  button.onclick = function () {
    active_camera = camera;
    renderer.render(scene, active_camera);
  };
}
setupCamButton("main_cam", main_camera);
setupCamButton("cam_1", camera_1);
setupCamButton("cam_2", camera_2);
setupCamButton("cam_3", camera_3);
setupCamButton("cam_4", camera_4);

// finally, draw the scene. Also, add animation.
renderer.render(scene, active_camera);

let lastTimestamp; // undefined to start
let flag =0;
let flag1 =0
let flag2 =0;
function animate(timestamp) {
  // Convert time change from milliseconds to seconds
  let timeDelta = 0.001 * (lastTimestamp ? timestamp - lastTimestamp : 0);
  lastTimestamp = timestamp;

  // Animate the cube (basic object)
  cube.rotateOnWorldAxis(new T.Vector3(0, 1, 0), timeDelta);

  // TODO: animate your objects
  shinysphere.rotateX(4*timeDelta)
  shinysphere.rotateY(4*timeDelta)
  shinysphere2.rotateY(6*timeDelta)
  shinysphere2.rotateX(6*timeDelta)
  shinysphere3.rotateY(8*timeDelta)
  shinysphere3.rotateX(8*timeDelta)

  if(shinysphere.position.y <=3.55 && flag == 0){
      shinysphere.position.y += 0.01
  }
  else{
    shinysphere.position.y -= 0.01
    flag =1 ;
    if(shinysphere.position.y<1.5 && flag ==1){
      flag =0;
    }
  } 
  if(shinysphere2.position.x <=3.55 && flag1 == 0){
    shinysphere2.position.x += 0.01
}
else{
  shinysphere2.position.x -= 0.01
  flag1 =1 ;
  if(shinysphere2.position.x<1.5 && flag1 ==1){
    flag1=0;
  }
} 
if(shinysphere3.position.x <=2.55 && flag1 == 0){
  shinysphere3.position.x += 0.01
}
else{
shinysphere3.position.x -= 0.01
flag1 =1 ;
if(shinysphere3.position.x<1.5 && flag1 ==1){
  flag1=0;
}
} 
  if (astronaut) astronaut.rotateZ(Math.PI/3 * timeDelta); // SPACEMAN FLOATING
  if (astronaut) astronaut.rotateY(Math.PI/3 * timeDelta);
  if(teapot) teapot.rotateOnAxis(new T.Vector3(0, 1, 0), 5*timeDelta);
  // draw and loop
  renderer.render(scene, active_camera);
  window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
