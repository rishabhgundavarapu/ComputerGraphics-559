// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let fcg = new T.TextureLoader().load("./phone_texture.jpeg");
fcg.flipY=false;


// size of the phone in inches
const phoneWidth = 8  / 12;
const phoneLength =11.99/ 12;
const phoneHeight = 0.8/ 12; 
const overhang = 0;


export class Phone extends GrObject {
    constructor(plain) {
        const positions = new Float32Array( [
            // bottom
            0,0,0, 
            phoneWidth,0,0,
            phoneWidth,0,phoneLength,
            0,0,phoneLength,
            // top
            0,phoneHeight,0,
            phoneWidth,phoneHeight,0,
            phoneWidth,phoneHeight,phoneLength,
            0,phoneHeight,phoneLength,
            // back spine (X=0)
            0,0,0,
            0,0,phoneLength,
            0,phoneHeight,phoneLength,
            0,phoneHeight,0,
            // front edge (Z=0)
            0,0,overhang,
            phoneWidth-overhang,0,overhang,
            phoneWidth-overhang,phoneHeight,overhang,
            0,phoneHeight,overhang,
            // side edge X=1
            phoneWidth-overhang,0,overhang,
            phoneWidth-overhang,0,phoneLength-overhang,
            phoneWidth-overhang,phoneHeight,phoneLength-overhang,
            phoneWidth-overhang,phoneHeight,overhang,
            // away edge (Z=1)
            0,0,phoneLength-overhang,
            phoneWidth-overhang,0,phoneLength-overhang,
            phoneWidth-overhang,phoneHeight,phoneLength-overhang,
            0,phoneHeight,phoneLength-overhang,

        ]);
        const normals = new Float32Array( [
            // bottom
            0,-1,0,
            0,-1,0,
            0,-1,0,
            0,-1,0,
            // top
            0,1,0,
            0,1,0,
            0,1,0,
            0,1,0,
            // back spine
            -1,0,0,
            -1,0,0,
            -1,0,0,
            -1,0,0,
            // front edge Z=0
            0,0,-1,
            0,0,-1,
            0,0,-1,
            0,0,-1,
            // right edge x=1;
            1,0,0,
            1,0,0,
            1,0,0,
            1,0,0,
            // away edge z=1
            0,0,1,
            0,0,1,
            0,0,1,
            0,0,1
        ]);
        const uvs = new Float32Array( [
            // bottom (back of phone)
            232/768,0,
            0      ,0,
            0,      311/768,
            232/768,311/768,
            // top (front of phone)
            142/768, 90/1024,
            554/768, 90/1024,
            604/768,1010/1024,
            142/768,1010/1024,
            160/768,1070/1024,
            180/768,1070/1024,
            200/768,1070/1024,
            160/768,1070/1024,

            160/768,1070/1024,
            180/768,1070/1024,
            200/768,1070/1024,
            160/768,1070/1024,
            160/768,1070/1024,
            180/768,1070/1024,
            200/768,1070/1024,
            160/768,1070/1024,
            160/768,1070/1024,
            180/768,1070/1024,
            200/768,1070/1024,
            160/768,1070/1024,
        ]);


        let geometry = new T.BufferGeometry();
        geometry.setAttribute("position",new T.BufferAttribute(positions,3));
        geometry.setAttribute("normal",new T.BufferAttribute(normals,3));
        geometry.setAttribute("uv",new T.BufferAttribute(uvs,2));
        geometry.setIndex([
            0,1,2,  // bottom
            0,2,3,
            6,5,4,  // top
            7,6,4,
            8,10,9, // spine
            8,11,10,
            12,13,14, // front
            12,14,15,

            16,17,18,   // side
            16,18,19,
            20,22,21,
            20,23,22 
        ]);
        

        let mat = new T.MeshStandardMaterial(plain ? {color:"orange"} : {color:"white", map:fcg, side:T.DoubleSide});
        let mesh = new T.Mesh(geometry,mat);
        super("phone"+(plain?"-plane":"-texture"),mesh);
        this.bgeom = geometry;
        this.mat = mat;
    }

}
let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas });
let phone = new Phone();
phone.objects[0].scale.set(4,4,4);
world.add(phone);
world.go();

