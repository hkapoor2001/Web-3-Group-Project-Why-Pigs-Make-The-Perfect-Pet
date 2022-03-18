import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// window.addEventListener("resize", )

export function HorizontalScroll(){
  // console.log(scrollContainer.offsetWidth + "this is Scrollcontainer width")
    gsap.registerPlugin(ScrollTrigger);
    
    let scrollContainer = document.querySelector("#hscroll");
    
    gsap.to(scrollContainer, {
      x: () => -(scrollContainer.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: "#famous-pigs",
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        start:"top 5%",
        end: () => "+=" + (scrollContainer.offsetWidth),
        // markers: true
      }
    })
    }