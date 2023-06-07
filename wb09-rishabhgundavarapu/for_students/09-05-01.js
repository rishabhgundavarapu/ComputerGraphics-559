// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";
import {GrSphere, GrCube} from "../libs/CS559-Framework/SimpleObjects.js";
let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas, groundplane: false, lookfrom: new T.Vector3(0, 0, -300), far: 20000 });
let cubeTexture = new T.CubeTextureLoader()
.setPath( 'skybox_images/' )
.load( [
    'nightsky_ft.png',
    'nightsky_bk.png',
    'nightsky_up.png',
    'nightsky_dn.png',
    'nightsky_rt.png',
    'nightsky_lf.png'
] );
let envmat = new T.MeshBasicMaterial({ envMap: cubeTexture });
let envsphere = new GrSphere({ x: -20, size: 20, material: envmat });
world.add(envsphere);
let envcube = new GrCube({ size: 20, x: 20, material: envmat });
world.scene.background=cubeTexture
world.add(envcube);
world.go();

