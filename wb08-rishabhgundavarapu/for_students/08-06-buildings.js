/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class House1 extends GrObject{
    constructor(params={}){
        let geometry=new T.BufferGeometry();
        const vertices = new Float32Array([

            -1, -1, 1, 1, -1, 1, -1, 1,  1,
            -1,  1, 1, 1, -1, 1,  1, 1,  1,

            1, -1, -1, -1, -1, -1,  1, 1, -1,
            1,  1, -1, -1, -1, -1, -1, 1, -1,

            -1, -1, -1, -1, -1, 1, -1, 1, -1,
            -1,  1, -1, -1, -1, 1, -1, 1,  1,

            1, -1, 1, 1, -1, -1, 1, 1,  1,
            1,  1, 1, 1, -1, -1, 1, 1, -1,

            1,  1, -1, -1, 1, -1,  1, 1, 1,
            1,  1,  1, -1, 1, -1, -1, 1, 1,

            1, -1,  1, -1, -1, 1,  1, -1, -1,
            1, -1, -1, -1, -1, 1, -1, -1, -1,


            
          ])
         geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
         geometry.computeVertexNormals();
         const uvs = new Float32Array( [
            0,0,
            1,0,
            0,1,        
            0,1,
            1,0,
            1,1
,
            0.38,0,
            0.76,0,
            0.38,1,        
            0.38,1,
            0.76,0,
            0.76,1
,
            0,0,
            0.21,0,
            0,1,        
            0,1,
            0.21,0,
            0.21,1
,
            0,0,
            0.21,0,
            0,1,        
            0,1,
            0.21,0,
            0.21,1
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
            1/3,2/3,
          0,1/3,
          1/3,1/3,
          0,2/3,        
          0,2/3,
          1/3,1/3,
          1/3,2/3,

          0,1/3,
          1/3,1/3,
          0,2/3,        
          0,2/3,
          1/3,1/3,
          1/3,2/3,

          0,1/3,
          1/3,1/3,
          0,2/3,        
          0,2/3,
          1/3,1/3,
          1/3,2/3
          ]);
          geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));
          let tl = new T.TextureLoader().load('../textures/house.png');
          let material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.85,
            metalness:0.1,
            map: tl,
            side:T.DoubleSide
          });
          let mesh = new T.Mesh(geometry, material);
          mesh.translateY(1.5)
          mesh.scale.set(4,1.5,4)
          mesh.position.set(-10,1.5,3)
          super("House1", mesh);
    }

}
export class Roof1 extends GrObject{
    constructor(params={}){
        let geometry=new T.BufferGeometry();

        const vertices = new Float32Array([
            0, 2,  0, -1, 1, 1,  1, 1, 1,
            0, 2, 0 ,1, 1, -1,-1, 1, -1,

            0, 2,  0, 1, 1, 1,  1, 1, -1,
            0, 2, 0 ,1, 1, -1,-1, 1, -1,

            0, 2,  0, -1, 1, 1,  -1, 1, -1,
            0, 2, 0 ,1, 1, -1,-1, 1, -1,
          ])
        geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
        geometry.computeVertexNormals();
        const uvs = new Float32Array( [
            0,0,
            1,0,
            0,1,        
            0,1,
            1,0,
            1,1
,
0,0,
1,0,
0,1,        
0,1,
1,0,
1,1
,
0,0,
1,0,
0,1,        
0,1,
1,0,
1,1
    
          ]);
          geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));
          let tl = new T.TextureLoader().load('../textures/roof_texture.jpg');
          let material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.85,
            metalness:0.1,
            map: tl,
            side:T.DoubleSide
          });
          let mesh = new T.Mesh(geometry, material);
          mesh.translateY(1.5)
          mesh.scale.set(4,1.5,4)
          mesh.position.set(-10,1.5,3)
          super("Roof1", mesh);
    }

}

export class House2 extends GrObject{
  constructor(params={}){
      let geometry=new T.BufferGeometry();
      const vertices = new Float32Array([
          -1, -1, 1, 1, -1, 1, -1, 1,  1,
          -1,  1, 1, 1, -1, 1,  1, 1,  1,

          1, -1, -1, -1, -1, -1,  1, 1, -1,
          1,  1, -1, -1, -1, -1, -1, 1, -1,

          -1, -1, -1, -1, -1, 1, -1, 1, -1,
          -1,  1, -1, -1, -1, 1, -1, 1,  1,

          1, -1, 1, 1, -1, -1, 1, 1,  1,
          1,  1, 1, 1, -1, -1, 1, 1, -1,
  
          1,  1, -1, -1, 1, -1,  1, 1, 1,
          1,  1,  1, -1, 1, -1, -1, 1, 1,

          1, -1,  1, -1, -1, 1,  1, -1, -1,
          1, -1, -1, -1, -1, 1, -1, -1, -1,


          
        ])
       geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
       geometry.computeVertexNormals();
       const uvs = new Float32Array( [
          0,0,
          1,0,
          0,1,        
          0,1,
          1,0,
          1,1
,
          0.38,0,
          0.76,0,
          0.38,1,        
          0.38,1,
          0.76,0,
          0.76,1
,
          0,0,
          0.21,0,
          0,1,        
          0,1,
          0.21,0,
          0.21,1
,
          0,0,
          0.21,0,
          0,1,        
          0,1,
          0.21,0,
          0.21,1
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
          1/3,2/3,
        0,1/3,
        1/3,1/3,
        0,2/3,        
        0,2/3,
        1/3,1/3,
        1/3,2/3,

        0,1/3,
        1/3,1/3,
        0,2/3,        
        0,2/3,
        1/3,1/3,
        1/3,2/3,

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
        let tl = new T.TextureLoader().load('../textures/red_bricks.jpeg');
        let material = new T.MeshStandardMaterial({
          color: "lightpink",
          roughness: 0.85,
          metalness:0.1,
          map: tl,
          side:T.DoubleSide
        });
        // @@Snippet:end
        //
        let mesh = new T.Mesh(geometry, material);
        mesh.scale.set(4.5,4,4.5)
        mesh.position.set(5,4,-10)
        super("House2", mesh);
  }
}
export class Roof2 extends GrObject{
  constructor(params={}){
      let geometry=new T.BufferGeometry();

      const vertices = new Float32Array([
          1.3, 2,  0, -1.3, 1, 1,  1.3, 1, 1,
          1.3, 2, 0 ,-1.3, 2, 0,-1.3, 1, 1,

          1.3, 2,  0, 1.3, 1, 1,  1.3, 1, -1,
          1.3, 2, 0 ,1.3, 1, -1,-1.3, 2, 0,

          -1.3, 2,  0, -1.3, 1, 1,  -1.3, 1, -1,
          -1.3, 2, 0 ,1.3, 1, -1,-1.3, 1, -1,
        ])
      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      geometry.computeVertexNormals();
      const uvs = new Float32Array( [
          0,0,
          1,0,
          0,1,        
          0,1,
          1,0,
          1,1
,
0,0,
1,0,
0,1,        
0,1,
1,0,
1,1
,
0,0,
1,0,
0,1,        
0,1,
1,0,
1,1
  
        ]);
        geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));
        let tl = new T.TextureLoader().load('../textures/roof_texture2.jpeg');
        let material = new T.MeshStandardMaterial({
          color: "white",
          roughness: 0.85,
          metalness:0.1,
          map: tl,
          side:T.DoubleSide
        });
        let mesh = new T.Mesh(geometry, material);
        mesh.translateY(1.5)
        mesh.scale.set(4.5,4,4.5)
        mesh.position.set(5,4,-10)
        super("Roof2", mesh);
  }

}

export class Tree extends GrObject{
  constructor(params={}){
      let geometry=new T.CylinderGeometry(1,1,2);
        let material = new T.MeshStandardMaterial({
          color: "#5C4025",
          roughness: 0.85,
          side:T.DoubleSide
        });
        let trunk = new T.Mesh(geometry, material);
       let branchgeom = new T.ConeGeometry(4,4,30);
       let branchmaterial = new T.MeshStandardMaterial({color:'green',side:T.DoubleSide})
       let branch = new T.Mesh(branchgeom,branchmaterial)
        const tree = new T.Group();
        branch.translateY(6)
        tree.add(branch,trunk)
        trunk.translateY(1.5)
        trunk.scale.set(1,3.5,1)
        trunk.position.set(0,3.5,0)
        super("Tree", tree);
  }

}