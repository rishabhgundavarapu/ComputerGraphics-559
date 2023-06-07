/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

/*
 * Define your 3 objects here. If the objects fit inside +/- 1,
 * the world code below will place them nicely.
 * Otherwise, you need to modify the world code below to make the
 * world bigger and space the objects out differently.
 */

class Object1 extends GrObject {
    // student, fill this in
    // you will need a call to "super"
    constructor() {
      let geometry = new T.BufferGeometry();
      //
      // while the two triangles have 4 certices, we need to split the vertices
      // so that they can have different normals
      const vertices = new Float32Array( [
         -1, 1, 0,     // 1A note that we need to keep this ccw
         0, 0, 0,       // 1B
         0, 2, 0,       // 1C   
         1, 1, 0,      // second triangle
         0, 2, 0,       // 2B
         0, 0, 0 ,       // 2C
         -1, 1, 0,      // second triangle
         -1, -1, 0,       // 2B
         0, 0, 0,
         1,1,0,
         1,-1,0,
         0,0,0
      ]);
      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      // in the previous example, we computed them explicitly - here we let three
      // do it for us
      geometry.computeVertexNormals();

      // the colors
      const colors = new Float32Array( [
          1,1,0,    // yellow (3 vertices)
          1,1,0,
          1,1,0,
          1,.65,0,  // orange (#FFA500)
          1,.65,0,
          1,.65,0 ,
          1,.35,0.35,  // orange (#FFA500)
          1,.35,0.35,
          1,.35,0.35 ,
          1,.35,0.35,  // orange (#FFA500)
          1,.35,0.35,
          1,.35,0.35 
      ]);
      geometry.setAttribute("color",new T.BufferAttribute(colors,3));

      let material = new T.MeshStandardMaterial({
        roughness: 0.75,
        vertexColors: true,
        side:T.DoubleSide
      });
      let mesh = new T.Mesh(geometry, material);
      mesh.translateY(1.5)

    super('Object1',mesh);
  }
}
class Object2 extends GrObject {
  constructor() {
      let geometry = new T.BufferGeometry();

      const vertices = new Float32Array( [
          //for front
          -1,-1,1,
          1,-1,1,
          -1,1,1,

          -1,1,1,
          1,-1,1,
          1,1,1,

          //for left
          -1,-1,-1, 
          -1,-1,1, 
          -1,1,-1,

          -1,1,-1,
          -1,-1,1,
          -1,1,1,

          //for right
          1,-1,1,
          1,-1,-1,
          1,1,1,

          1,1,1,
          1,-1,-1,
          1,1,-1,

          //for back
          1,-1,-1,
          -1,-1,-1,
          1,1,-1,

          1,1,-1,
          -1,-1,-1,
          -1,1,-1,

          //for bottom
          1,-1,1,
          -1,-1,1,
          1,-1,-1,

          1,-1,-1,
          -1,-1,1,
          -1,-1,-1,

          //for top
          1,1,-1,
          -1,1,-1,
          1,1,1,

          1,1,1,
          -1,1,-1,
          -1,1,1,
      ]);
      const colors = new Float32Array( [
        0.2,0.51,0.3,    // yellow (3 vertices)
        0.2,0.51,0.1,
        0.3,0.51,0.1,
        1,1,0,    // yellow (3 vertices)
        1,1,0,
        1,1,0,
        1,1,0,    // yellow (3 vertices)
        1,.35,0.35,  // orange (#FFA500)
        1,.35,0.35,
        1,.35,0.35 ,
        1,.35,0.35,  // orange (#FFA500)
        1,.35,0.35,
        1,.35,0.35 ,   // yellow (3 vertices)
        1,.35,0.35,  // orange (#FFA500)
        1,.35,0.35,
        1,.35,0.35 ,
        1,.35,0.35,  // orange (#FFA500)
        1,.35,0.35,
        1,.35,0.35 ,   // yellow (3 vertices)
        1,.35,0.35,  // orange (#FFA500)
        1,.35,0.35,
        1,.35,0.35 ,
        1,.35,0.35,  // orange (#FFA500)
        1,.35,0.35,
        1,.35,0.35 ,   // yellow (3 vertices)
        1,.35,0.35,  // orange (#FFA500)
        1,.35,0.35,
        1,.35,0.35 ,
        1,.35,0.35,  // orange (#FFA500)
        1,.35,0.35,
        1,.35,0.35 ,    // yellow (3 vertices)
        1,.35,0.35,  // orange (#FFA500)
        1,.35,0.35,
        1,.35,0.35 ,
        1,.35,0.35,  // orange (#FFA500)
        1,.35,0.35,
        1,.35,0.35 



    ]);
    geometry.setAttribute("color",new T.BufferAttribute(colors,3));

      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      geometry.computeVertexNormals();

      const uvs = new Float32Array([
          //front-3
          1/3,0,
          2/3,0,
          1/3,1/3,

          1/3,1/3,
          2/3,0,
          2/3,1/3,

          // left- 6
          2/3,0,
          1,0,
          2/3,1/3,

          2/3,1/3,
          1,0,
          1,1/3,

          //right- 5
          2/3,1/3,
          1,1/3,
          2/3,2/3,
  
          2/3,2/3,
          1,1/3,
          1,2/3,

          //back- 1
          1/3,1/3,
          2/3,1/3,
          1/3,2/3,
  
          1/3,2/3,
          2/3,1/3,
          2/3,2/3,

          //bottom- 2
          0,1/3,
          1/3,1/3,
          0,2/3,
  
          0,2/3,
          1/3,1/3,
          1/3,2/3,

          //top- 4
          1/3,2/3,
          2/3,2/3,
          1/3,1,
  
          1/3,1,
          2/3,2/3,
          2/3,1
      ])

      geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));


            // @@Snippet:texuse
      let tl = new T.TextureLoader().load("../images/dice_texture.png");
      let material = new T.MeshStandardMaterial({
          color: "red",
          vertexColors:true,
          roughness: 0.75,
          map: tl,
          side: T.DoubleSide
      });

      let mesh = new T.Mesh(geometry, material);
      mesh.scale.set(0.5,0.5,0.5);
      mesh.translateY(0.5);

      //
      super("Object2", mesh);
  }
}
class Object3 extends GrObject {
  constructor() {
    const s2 = Math.sqrt(2) / 2;
    let geometry = new T.BufferGeometry();
    const vertices = new Float32Array( [
        -1, 1, 0,     // 1A note that we need to keep this ccw
        0, 0, 0,       // 1B
        0, 2, 0,       // 1C
        1, 1, 0,      // second triangle
        -1,0,0, // third triangle
        1,0,0
        

    ]);

    geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
    const normals = new Float32Array([
        -s2,0,s2,
        0,0,1,      // point forward - which is the average direction
        0,0,1,      // or the way it would be facing if it were curved
        s2,0,s2,
        0,0,1,
        0,0,1
    ]);
    geometry.setAttribute("normal",new T.BufferAttribute(normals,3));

    geometry.setIndex([0,1,2, 3,2,1,0,4,1,1,5,3]);
    let material = new T.MeshStandardMaterial({
    color: "yellow",
    roughness: 0.75,side:T.DoubleSide
    });
    let mesh = new T.Mesh(geometry, material);
    let mesh2 = new T.Mesh(geometry,material)
    mesh.translateY(2.5)
    super("Object3", mesh2);

  }
}

// translate an object in the X direction
function shift(grobj, x) {
    grobj.objects.forEach(element => {
        element.translateX(x);
    });
  return grobj;
}

// Set the Object's Y rotate
function roty(grobj, ry) {
    grobj.objects.forEach(element => {
        element.rotation.y = ry;
    });
  return grobj;
}

/*
 * The world making code here assumes the objects are +/- 1
 * and have a single mesh as their THREE objects.
 * If you don't follow this convention, you will need to modify
 * the code below.
 * The code is a little funky because it is designed to work for
 * a variety of demos.
 */
let mydiv = document.getElementById("div1");

let box = InputHelpers.makeBoxDiv({ width: mydiv ? 640 : 820 }, mydiv);
if (!mydiv) {
    InputHelpers.makeBreak(); // sticks a break after the box
}
InputHelpers.makeHead("Three Different Objects", box);

let world = new GrWorld({ width: mydiv ? 600 : 800, where: box });
let tt = shift(new Object1(), -3);
world.add(tt);

let t2 = shift(new Object2(), 0);
world.add(t2);

let t3 = shift(new Object3(), 3);
world.add(t3);

let div = InputHelpers.makeBoxDiv({}, box);

let sl = new InputHelpers.LabelSlider("ry", { min: -2, max: 2, where: div });

InputHelpers.makeBreak(box);

sl.oninput = function(evt) {
    let v = sl.value();
    roty(tt,v);
    roty(t2,v);
    roty(t3,v);
};

world.go();
