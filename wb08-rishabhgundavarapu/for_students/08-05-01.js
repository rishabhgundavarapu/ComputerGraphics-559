/*jshint esversion: 6 */
// @ts-check
// vertices inspiratoin from https://codepen.io/pr-o/pen/GRWZmOr
import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

// define a class of Dice here - it should be a subclass of GrObject
class TwoDice extends GrObject{
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
            1/3,1/3,
            2/3,1/3,
            1/3,2/3,        
            1/3,2/3,
            2/3,1/3,
            2/3,2/3
,
            1/3,0,
            2/3,0,
            1/3,1/3,        
            1/3,1/3,
            2/3,0,
            2/3,0.33
,
            1/3,2/3,
            2/3,2/3,
            1/3,3/3,        
            1/3,3/3,
            2/3,2/3,
            2/3,3/3
,
            0,1/3,
            1/3,1/3,
            0,2/3,        
            0,2/3,
            1/3,1/3,
            1/3,2/3
          ]);
          geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));
          //@@Snippet:end
    
          // @@Snippet:texuse
          let tl = new T.TextureLoader().load('../images/dice_texture.png');
          let material = new T.MeshStandardMaterial({
            color: "teal",
            roughness: 0.15,
            metalness:0.1,
            map: tl
          });
          // @@Snippet:end
          //
          let mesh = new T.Mesh(geometry, material);
          super("TwoDice", mesh);
    }

}
function shift(grobj, x,angle) {
    grobj.objects[0].translateX(x);
    grobj.objects[0].translateY(0.8);
    grobj.objects[0].rotateX(angle)
    grobj.objects[0].scale.set(0.8,0.8,0.8)
    return grobj;
  }

let world = new GrWorld();
let tt = shift(new TwoDice(), 3,0);
let tt2 = shift(new TwoDice(), -3,-Math.PI/2);
world.add(tt2)
world.add(tt);

// put the two dice into the world Here
// don't forget to orient them so they have different numbers facing up

world.go();

