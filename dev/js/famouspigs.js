import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export function HorizontalScroll(){

    gsap.registerPlugin(ScrollTrigger);
    
    let scrollContainer = document.querySelector("#hscroll");
    
    gsap.to(scrollContainer, {
      x: () => -(scrollContainer.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: "#famous-pigs",
        pin: true,
        scrub: 1,
        start:"top 5%",
        end: () => "+=" + (scrollContainer.offsetWidth),
        markers: true
      }
    })
    }