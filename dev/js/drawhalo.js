import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {gsap} from "gsap";

gsap.registerPlugin(DrawSVGPlugin);

export const haloTL = gsap.timeline();

function halodraw(){
    const tl = gsap.timeline();
    tl.from("#halo-draw-svg-path",{duration:1, drawSVG: "100", ease:"none"})

    return tl;
}

haloTL.add (halodraw())


