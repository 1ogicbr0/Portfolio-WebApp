import styles from "./MainInfo.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faR } from '@fortawesome/free-solid-svg-icons';
library.add(faR);

const MainInfo = () => {
  const startRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#scroll", {
      scrollTrigger: {
        trigger: "#scroll",
        start: "center center",
        end: "+=500",
        scrub: 1,
        toggleActions: "restart pause reverse pause",
      },
      stagger: 1,
      rotateY: 720,
      rotateX: 100,
      opacity: 0,
      duration: 1,
    });

    gsap.from("#textStartIntro", {
      scrollTrigger: {
        trigger: "#textStartIntro",
        start: "top center",
        end: "+=600",
        scrub: 1,
        pin: "#start",
        toggleActions: "restart pause reverse pause",
      },
      stagger: 1,
      translateY: 200,
      rotateX: 120,
      opacity: 0,
      duration: 5,
    });

  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.beforeStart} id="beforeStart">
      <div className={styles.title}>Scroll Down You will  Like it ;)</div>
        <div className={styles.scrolldowns} id="scroll">
          <div className={styles.mousey}>
            <div className={styles.scroller}><img src="https://img.icons8.com/metro/96/ffffff/long-arrow-down.png/" alt=""/></div>
          </div>
        </div>
      </div>

      <div className={styles.start} id="start">

        <div className={styles.left}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <div className={styles.intro} id="textStartIntro">
              <span>$:~</span>
              <span>whoami</span>
            </div>
            <div className={styles.name} id="textStartName">
              <span>Muhammad</span>
              <span>Shehryaar</span>
              <span>Khan</span>
            </div>
            <div className={styles.fieldWeb} id="textStartField1">
              Creative Web Developer
            </div>
            <div className={styles.fieldCyber} id="textStartField2">
              Bug Bounty Hunter
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mid} id="mid">
        <div className={styles.left}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.info} id="text" ref={startRef}>
            <div>From Pakistan to help the world</div>
            <div>I did my Olevels from OPF College</div>
            <div>and A-levels from Roots International School</div>
            <div>
              I am currently doing my bachelors in Cyber Security from Air
              University
            </div>
          </div>
        </div>
      </div>

      <div className={styles.end}>
        <div className={styles.left}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.info}>
          <div>Motive?</div>
          <div>
            The main thing that motivates me is to stuck in a problem and figure
            most efficient way to get out of it
          </div>
          <div>Creating extraordinary websites using different tecnologies</div>
          <div>
            Learning about new technologies to find bugs and secure them
          </div>
        </div>
      </div>
      <div>END</div>
    </div>
  );
};

export default MainInfo;
