import { gsap } from "gsap";
export const gsapFrontAnimationHelper:Function = () => {
  gsap
  .timeline()
  .to("#title", {
    scrollTrigger: {
      trigger: "#title",
      start: "0 190",
      end: "+=20",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    stagger: 1,
    opacity: 0,
    duration: 2,
    translateY:-50,
    rotateX:30
  })
  .to("#scroll", {
    scrollTrigger: {
      trigger: "#scroll",
      start: "-60 190",
      end: "+=400",         
      scrub: 2,
      toggleActions: "restart pause reverse pause",

    },
    stagger: 1,
    rotateY: 720,
    rotateX: 100,
    opacity: 0,
    duration: 3,
  })
}

export const gsapScrollAnimationHelper:Function = () => {
  const t1 = gsap.timeline({scrollTrigger: {
    trigger:"#right",
    start: "center center",
    end: "4000 center",
    scrub: 2,
    pin: "#div",
    toggleActions: "restart pause reverse pause",
  }});
  t1.from("#line1", {
    translateX:-60,
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
    duration: 1,
  });
  t1.to("#line1", {
    translateX:-80,
    duration: 2,
    opacity: 0,

  });

  //MID
  t1.from("#line2", {
    delay:2,
    translateX:-60,
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
    translateX:-80,
    opacity: 0,
    duration: 2,
  });

  //END
  t1.from("#line3", {
    translateX:-60,
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
    translateX:-80,
    opacity: 0,
    duration: 2,
  });
  t1.fromTo("#endText6",{
    scale: 0,
    opacity: 0,
    duration: 2,
  },{
    scale: 1,
    opacity: 1,
    duration: 2,
  })
  
}

