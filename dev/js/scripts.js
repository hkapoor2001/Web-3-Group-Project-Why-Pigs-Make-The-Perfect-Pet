import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {gsap} from "gsap";
import { HorizontalScroll } from "./famouspigs";

gsap.registerPlugin(DrawSVGPlugin);

HorizontalScroll();
const haloTL = gsap.timeline();

function halodraw(){
    const tl = gsap.timeline();
    tl.to("#halo-draw-svg-path",{duration:.4, drawSVG: "0", ease:"power1.in"})

    return tl;
}

haloTL.add (halodraw())


import {Carousel} from "@fancyapps/ui";

window.addEventListener('load', function (){

    const myCarousel = new Carousel(document.querySelector(".carousel"), {
      'center' : false
    });
   
});


// test