/*jshint esversion: 6 */
// @ts-check

// get things we need
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import {
  GrSimpleSwing,
  GrColoredRoundabout,
  GrSimpleRoundabout,
  GrCarousel,
  GrAdvancedSwing,
  NewRide
} from "./07-08-parkobjects.js";
//import { SimpleBouncer } from "./07-08-simplepark.js";

let parkDiv = document.getElementById("div1");
let world = new GrWorld({ groundplanesize: 20, where: parkDiv });

let horses = []
//world.add(new SimpleBouncer(0, 5));

let swing_new = new GrSimpleSwing({x:16,z:5,size:2})
world.add(swing_new)

let carousel_new = new GrCarousel({x:-10})
world.add(carousel_new)

let roundabout = new GrSimpleRoundabout({ x: -2 });
world.add(roundabout);

let roundabout_2 = new GrColoredRoundabout({ x: 5 });
world.add(roundabout_2);


let swing_3 = new GrAdvancedSwing({x:10});
world.add(swing_3)


let my_ride = new NewRide({x:10,z:10})
world.add(my_ride)
world.go();
