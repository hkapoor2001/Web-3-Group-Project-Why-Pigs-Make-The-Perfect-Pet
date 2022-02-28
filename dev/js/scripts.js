import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {gsap} from "gsap";

gsap.registerPlugin(DrawSVGPlugin);

const haloTL = gsap.timeline();

function halodraw(){
    const tl = gsap.timeline();
    tl.to("#halo-draw-svg-path",{duration:.4, drawSVG: "0", ease:"power1.in"})

    return tl;
}

haloTL.add (halodraw())