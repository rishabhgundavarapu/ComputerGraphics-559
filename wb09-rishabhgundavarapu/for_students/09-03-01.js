// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as SimpleObjects from '../libs/CS559-Framework/SimpleObjects.js'

let parentOfCanvas = document.getElementById("div1");
let world= new GrWorld({ where: parentOfCanvas });
let speed=0.4;
function spinY(obj) { // helps us keep rotating the spheres
    obj.stepWorld = function (delta) {
        obj.objects.forEach(obj => obj.rotateY(speed * delta / 1000 * Math.PI));
    };
    return obj;
}
// BUMP MAP

let normal_map = new T.TextureLoader().load("normal_map.png");
normal_map.wrapS = T.MirroredRepeatWrapping
normal_map.wrapT = T.MirroredRepeatWrapping
let bump_mat = new T.MeshStandardMaterial({ color: "red",bumpMap:normal_map });
let bump_sphere = spinY(new SimpleObjects.GrSphere({x:-2,y:1,z:2,material:bump_mat}));
world.add(bump_sphere);

// NORMAL MAP

let normal_mat = new T.MeshStandardMaterial({ color: "red",normalMap:normal_map });
let normal_sphere = spinY(new SimpleObjects.GrSphere({x:2,y:1,z:2,material:normal_mat}));
world.add(normal_sphere);

// COMBINED (COLOR + NORMAL)
let combined = new T.TextureLoader().load('brick_wall.jpeg')
let combined_mat = new T.MeshStandardMaterial({color:'red',map:combined,normalMap:normal_map})
let combined_sphere = spinY(new SimpleObjects.GrSphere({x:0,y:1,z:2,material:combined_mat}));
world.add(combined_sphere)
world.go();

