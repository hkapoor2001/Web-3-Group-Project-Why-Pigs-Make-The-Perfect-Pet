import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {gsap} from "gsap";
import { HorizontalScroll } from "./famouspigs";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

gsap.set("#path",{transformOrigin:"center top"});
gsap.set("#pool",{transformOrigin:"center bottom"});

// import {loaderTL} from "./preloader";

gsap.registerPlugin(DrawSVGPlugin);


gsap.registerPlugin(DrawSVGPlugin);

HorizontalScroll();
const haloTL = gsap.timeline();

function halodraw(){
    const tl = gsap.timeline();
    tl.to("#halo-draw-svg-path",{duration:.4, drawSVG: "0", ease:"power1.in", delay:2.8})

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

const loaderTL = gsap.timeline();

function loaderanimation(){
  const tl = gsap.timeline();
  tl.from("#Pig",{duration:1.5, alpha: 0, translateX: -200}, "one")
  .from("#board",{duration:1.5, alpha: 0, translateX: -200}, "one")
  .from("#pool",{duration:1, alpha: 0, translateY: 200}, "one")
  .to("#Pig",{duration:0.25, translateY: -100, translateX: 50}, "two")
  .to("#Pig",{duration:1, alpha: 0, motionPath: { path: "#path", align:"#path", alignOrigin: [0.5, 0.5], autoRotate: 20}, ease: "none", scale:1}, "two")
  .to("#white",{duration:4, translateY: -10000, delay: 0.5}, "two")
  .to("#pool",{duration:4, translateY: -5000, delay: 0.5, alpha: 0}, "two")
  .to("#Background",{duration:4, translateY: -10000, delay: 0.5}, "two")
  .to("#board",{duration:4, translateY: -5000, delay: 0.5, alpha: 0},  "two")

  return tl;
}
loaderTL.add (loaderanimation())
