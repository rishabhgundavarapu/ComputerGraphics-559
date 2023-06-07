/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define your vehicles here - remember, they need to be imported
// into the "main" program

export class car extends GrObject{
    constructor(params={}){
        let redcolor = new T.MeshStandardMaterial({color:'red'})
        let gcolor = new T.MeshStandardMaterial({color:'green'})
        let ycolor = new T.MeshStandardMaterial({color:'yellow'})
        let group = new T.Group();
        let cube1 = new T.BoxGeometry(1,1,1)
        let cubered= new T.Mesh(cube1,redcolor)
        let cubey= new T.Mesh(cube1,ycolor)
        let cubeg= new T.Mesh(cube1,gcolor)
        group.add(cubered,cubeg)
        cubered.translateX(2)
        group.translateX(2)

        

        







        //wheels
        const wheelgeometry = new T.BoxGeometry(6, 6, 6);
        const wheelmaterial = new T.MeshLambertMaterial({ color: 0x333333 });
        const wheel = new T.Mesh(wheelgeometry, wheelmaterial);
        const wheel2 = new T.Mesh(wheelgeometry,wheelmaterial)
        const wheel4 = new T.Mesh(wheelgeometry,wheelmaterial)
        const wheel3 = new T.Mesh(wheelgeometry,wheelmaterial)
        wheel.translateY(0.5)
        wheel.scale.set(0.1,0.1,0.1)
        wheel2.translateY(0.5)
        wheel2.scale.set(0.1,0.1,0.1)
        wheel2.position.set(2,0.5,0)
        wheel3.translateY(0.5)
        wheel3.scale.set(0.1,0.1,0.1)
        wheel3.position.set(2,0.5,-2)
        wheel4.translateY(0.5)
        wheel4.scale.set(0.1,0.1,0.1)
        wheel4.position.set(0,0.5,-2)

        // wheel rims
        const wheelrimgeom = new T.BoxGeometry(6, 6, 6);
        const wheelrimmat = new T.MeshLambertMaterial({ color: 'white' });
        const rim  = new T.Mesh(wheelrimgeom,wheelrimmat)
        const rim2  = new T.Mesh(wheelrimgeom,wheelrimmat)
        const rim3  = new T.Mesh(wheelrimgeom,wheelrimmat)
        const rim4  = new T.Mesh(wheelrimgeom,wheelrimmat)

        rim.translateY(0.5)
        rim.translateX(-0.2)
        rim.scale.set(0.05,0.05,0.05)
        rim2.translateY(0.5)
        rim2.translateZ(-2)
        rim2.translateX(-0.2)
        rim2.scale.set(0.05,0.05,0.05)
        rim3.translateY(0.5)
        rim3.translateZ(-2)
        rim3.translateX(2.2)
        rim3.scale.set(0.05,0.05,0.05)
        rim4.translateY(0.5)
        rim4.translateZ(0)
        rim4.translateX(2.2)
        rim4.scale.set(0.05,0.05,0.05)


        // car body

        const bodygeom = new T.BoxGeometry(6,3,12)
        const bodymat = new T.MeshLambertMaterial({color:'red',reflectivity:0.3})
        const body = new T.Mesh(bodygeom,bodymat)
        body.scale.set(0.3,0.3,0.3)
        body.position.set(1,1,-1)

        // car roof

        const roofgeom = new T.BoxGeometry(3,3,4)
        const roofmat = new T.MeshLambertMaterial({color:'white'})
        const roof = new T.Mesh(roofgeom,roofmat)
        roof.scale.set(0.5,0.5,0.5)
        roof.position.set(1,1.5,-1)


  

        function stepWorld(params) {
            
        }
}