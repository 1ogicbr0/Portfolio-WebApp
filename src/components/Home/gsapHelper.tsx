import { gsap } from "gsap";


export const gsapStartGoUp:Function = () => {
  const t1 = gsap.timeline({scrollTrigger: {
    trigger:"#rightStart",
    start: "190 center",
    end: "+=600",
    scrub: 5,
    pin: "#start",
    toggleActions: "restart pause reverse pause",
  }});
  t1.from("#line1", {
    translateX:-100,
    opacity: 0,
    duration: 3,
  });
  t1.from("#startText1", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  });
  t1.from("#startText2", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  })
  t1.from("#startText3", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  })
  t1.from("#startText4", {
    translateY: 100,
    opacity: 0,
    duration: 2,
    delay:3,
  })
  t1.to("#startText1", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#startText2", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#startText3", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#startText4", {
    opacity: 0,
    translateY:-100,
    delay:1,
    duration: 1,
  });
  t1.to("#line1", {
    translateX:-100,
    opacity: 0,
    duration: 1,
  });
  
}




export const gsapMidGoUp:Function = () => {
  const t1 = gsap.timeline({scrollTrigger: {
    trigger:"#rightMid",
    start: "50 center",
    end: "+=600",
    scrub: 5,
    pin: "#mid",
    toggleActions: "restart pause reverse pause",
  }});
  t1.from("#line2", {
    translateX:-100,
    opacity: 0,
    duration: 3,
  });
  t1.from("#midText1", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  });
  t1.from("#midText2", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  })
  t1.from("#midText3", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  })
  t1.from("#midText4", {
    translateY: 100,
    opacity: 0,
    duration: 2,
    delay:3,
  })
  t1.to("#midText1", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#midText2", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#midText3", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#midText4", {
    opacity: 0,
    translateY:-100,
    delay:1,
    duration: 1,
  });
  t1.to("#line2", {
    translateX:-100,
    opacity: 0,
    duration: 1,
  });
  
}



export const gsapEndGoUp:Function = () => {
  const t1 = gsap.timeline({scrollTrigger: {
    trigger:"#rightEnd",
    start: "150 center",
    end: "+=600",
    markers:true,
    scrub: 5,
    pin: "#end",
    toggleActions: "restart pause reverse pause",
  }});
  t1.from("#line3", {
    translateX:-100,
    opacity: 0,
    duration: 3,
  });
  t1.from("#endText1", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  });
  t1.from("#endText2", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  })
  t1.from("#endText3", {
    translateY: 100,
    opacity: 0,
    delay:1,
    duration: 2,
  })
  t1.from("#endText4", {
    translateY: 100,
    opacity: 0,
    duration: 2,
    delay:3,
  })
  t1.to("#endText1", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#endText2", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#endText3", {
    delay:1,
    opacity: 0,
    translateY:-100,
    duration: 1,
  });
  t1.to("#endText4", {
    opacity: 0,
    translateY:-100,
    delay:1,
    duration: 1,
  });
  t1.to("#line3", {
    translateX:-100,
    opacity: 0,
    duration: 1,
  });
  
}
