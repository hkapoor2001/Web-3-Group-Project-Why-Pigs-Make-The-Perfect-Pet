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

window.addEventListener('load', function (){
  const toggleSwitch= document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }

    console.log(toggleSwitch.checked)
    
    e.stopPropogration();
}


toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if( currentTheme === 'dark'){
  toggleSwitch.checked = true;
}
})

