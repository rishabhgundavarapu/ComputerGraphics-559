/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define a class of Domino here - it should be a subclass of GrObject
class Dominos extends GrObject{
    constructor(){
        let geometry=new T.BufferGeometry();

        const vertices = new Float32Array([
            // front
            -1, -1, 1, 1, -1, 1, -1, 1,  1,
            -1,  1, 1, 1, -1, 1,  1, 1,  1,
            // back
            1, -1, -1, -1, -1, -1,  1, 1, -1,
            1,  1, -1, -1, -1, -1, -1, 1, -1,
            // left
            -1, -1, -1, -1, -1, 1, -1, 1, -1,
            -1,  1, -1, -1, -1, 1, -1, 1,  1,
            // right
            1, -1, 1, 1, -1, -1, 1, 1,  1,
            1,  1, 1, 1, -1, -1, 1, 1, -1,
            // top
            1,  1, -1, -1, 1, -1,  1, 1, 1,
            1,  1,  1, -1, 1, -1, -1, 1, 1,
            // bottom
            1, -1,  1, -1, -1, 1,  1, -1, -1,
            1, -1, -1, -1, -1, 1, -1, -1, -1,
          ])
         geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
         geometry.computeVertexNormals();
         const uvs = new Float32Array( [
            0.67,0,
            1,0,
            0.67,0.33,        
            0.67,0.33,
            1,0,
            1,0.33
,
            0.67,0.33,
            1,0.33,
            0.67,0.67,        
            0.67,0.67,
            1,0.33,
            1,0.67
,
            0,0,
            1/3,0,
            0,1/3,        
            0,1/3,
            1/3,0,
            1/3,1/3
,
            0,0,
            1/3,0,
            0,1/3,        
            0,1/3,
            1/3,0,
            1/3,1/3
,
            0,0,
            1/3,0,
            0,1/3,        
            0,1/3,
            1/3,0,
            1/3,1/3
,
            0,0,
            1/3,0,
            0,1/3,        
            0,1/3,
            1/3,0,
            1/3,1/3
          ]);
          geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));
          //@@Snippet:end
    
          // @@Snippet:texuse
          let tl = new T.TextureLoader().load('../images/dice_texture.png');
          let material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.75,
            map: tl
          });
          // @@Snippet:end
          //
          let mesh = new T.Mesh(geometry, material);
          super("TwoDice", mesh);
    }

}
function shift(grobj, x,angle,y) {
    grobj.objects[0].translateX(x);
    grobj.objects[0].translateZ(y)
    grobj.objects[0].translateY(0.35);
    grobj.objects[0].rotateX(angle)
    grobj.objects[0].scale.set(0.8,0.8,0.3)
    return grobj;
  }

let world = new GrWorld();
let tt = shift(new Dominos(), 1,-Math.PI/2,1.5);
let tt2 = shift(new Dominos(), 1,-Math.PI/2,0);
world.add(tt);
world.add(tt2)

// put the domino into the world Here
// you can, of course, add more than 1

world.go();
