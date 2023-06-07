// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";
import * as SimpleObjects from '../libs/CS559-Framework/SimpleObjects.js'

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas });
let speed=0.4;
function spinY(obj) { // helps us keep rotating the spheres
    obj.stepWorld = function (delta) {
        obj.objects.forEach(obj => obj.rotateY(speed * delta / 1000 * Math.PI));
    };
    return obj;
}
let normal_map = new T.TextureLoader().load("diamond_color.jpeg");
const text = new T.TextureLoader().load("diamond_map.jpeg");
let material1 = {roughnessMap:text,roughness:1,metalness:1 ,map:normal_map}
let mat1 =  new T.MeshStandardMaterial(material1);
let material2 ={metalnessMap:text,metalness:0,roughness:1,map:normal_map}
let mat2 = new T.MeshStandardMaterial(material2)
let roughsphere = spinY(new SimpleObjects.GrSphere({x:-2,y:1,z:2,material:mat1}));
let metalsphere = spinY(new SimpleObjects.GrSphere({x:2,y:1,z:2,material:mat2}));
world.add(roughsphere)
world.add(metalsphere)
world.go();


