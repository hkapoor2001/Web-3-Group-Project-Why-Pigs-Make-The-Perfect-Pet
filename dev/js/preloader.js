import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

gsap.set("#path",{transformOrigin:"center top"});


// gsap.set("#small-mini-logo",{transformOrigin:"center"});

const loaderTL = gsap.timeline
loaderTL.from("#Pig", {duration:0.25, alpha: 0, translateX: 200}, "loader")
        // .from("#Pig", {duration:0.5, translateX: 50, rotation: -35, y: 10 }, "loader")

export function loadScreenAnimation(){
            return loaderTL;
}