import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";
import { GrCylinder,GrCone,GrCube } from "../libs/CS559-Framework/SimpleObjects.js";
import * as Simple from "../libs/CS559-Framework/SimpleObjects.js";

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas ,lookfrom: new T.Vector3(0, 5, -15), far: 10000});
let cubetext = new T.CubeTextureLoader()
.setPath( 'skybox_images/' )
.load( [
    'nightsky_ft.png',
    'nightsky_bk.png',
    'nightsky_up.png',
    'nightsky_dn.png',
    'nightsky_rt.png',
    'nightsky_lf.png'
] );
class reflect extends GrObject {
constructor(world) {
  let refgrp = new T.Group();
  super("reflect", refgrp);
  let cubeRenderTarget = new T.WebGLCubeRenderTarget(100);
  this.cubecam = new T.CubeCamera(1.1, 1000,cubeRenderTarget);
  this.reflectivegeom = new T.SphereGeometry(1.4);
  this.reflectivemat = new T.MeshStandardMaterial({ envMap: this.cubecam.renderTarget.texture,color: "white",roughness: 0.1,metalness:1});
  this.reflective = new T.Mesh(this.reflectivegeom, this.reflectivemat);
  refgrp.add(this.cubecam);
  refgrp.add(this.reflective);
  refgrp.translateY(2);
  this.world = world;
}
stepWorld(delta, timeOfDay){
  this.cubecam.update(this.world.renderer, this.world.scene);
};
}
let meow=0
function spinY(obj, speed = 3) {
  obj.stepWorld = function(delta, timeOfDay) {
    obj.objects.forEach(obj => obj.rotateZ(((speed * delta) / 1000) * Math.PI));
    meow += delta; obj.objects[0].position.x=3*Math.sin(meow/2000);
  };
  return obj;
}
world.scene.background = cubetext;
world.add(spinY(new Simple.GrCube({ z:3, y: 1,color:'gold'})));
world.add(new GrCone({ x: -4, z: 4, y: 2.5, radius: .4, height: 5, color: "black" }));
world.add(spinY(new Simple.GrTorusKnot({x:-4,y:1,z:-4, size: 0.5 })));
world.add(spinY(new Simple.GrCylinder({ y:5,z:0,size: 0.5 ,color:'red'})));
let reflectivesphere = new reflect(world);
world.add(reflectivesphere);
world.go();