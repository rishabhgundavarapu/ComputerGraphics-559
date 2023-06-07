/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// your buildings are defined in another file... you should import them
// here
import { House2,House1,Roof1,Roof2,Tree} from './08-06-buildings.js'
let world = new GrWorld({groundplanesize:20,groundplanecolor:'grey'});
world.add(new House1());
world.add(new Roof1());
world.add(new House2());
world.add(new Roof2());
world.add(new Tree());
// place your buildings and trees into the world here

world.go();


