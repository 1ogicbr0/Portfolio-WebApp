import { gsap } from "gsap";


export const gsapGoUp:Function = () => {
  const t1 = gsap.timeline({scrollTrigger: {
    trigger:"#right",
    start: "190 center",
    end: "+=600",
    scrub: 5,
    pin: "#start",
    toggleActions: "restart pause reverse pause",
  }});
  t1.from("#text1", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  });
  t1.from("#text2", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  })
  t1.from("#text3", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  })
  t1.from("#text4", {
    translateY: 100,
    opacity: 0,
    duration: 2,
    delay:3,
  })
  t1.to("#text1", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#text2", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#text3", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#text4", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  
}
