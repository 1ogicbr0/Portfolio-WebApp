import styles from "./MainInfo.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {MotionPathPlugin} from "gsap/MotionPathPlugin"
import { useEffect, useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faR } from "@fortawesome/free-solid-svg-icons";
import {gsapGoUp} from './gsapHelper'
library.add(faR);

const MainInfo = () => {
  const startRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);
    gsap
      .timeline()
      .to("#title", {
        scrollTrigger: {
          trigger: "#title",
          start: "0 250",
          end: "+=100",
          scrub: 1,
          toggleActions: "restart pause reverse pause",
        },
        stagger: 1,
        opacity: 0,
        duration: 2,
        translateY:-50
      })
      .to("#scroll", {
        scrollTrigger: {
          trigger: "#scroll",
          start: "-20 250",
          end: "+=300",
          scrub: 1,
          toggleActions: "restart pause reverse pause",

        },
        stagger: 1,
        rotateY: 360,
        rotateX: 100,
        opacity: 0,
        duration: 3,
      })
      gsapGoUp();
      const t2 = gsap.timeline();
      gsap.set("#line",{xPercent:-50,yPercent:-50,transformOrigin:"50% 50%"})
      t2.to("#line",{
        duration:5,
        motionPath:{
          path:"M40.546,224.82 C48.144,14.824 28.509,24.477 101.516,24.609 423.972,25.189 284.606,24.142 322.862,24.053 494.027,23.638 461.747,10.905 461.741,58.574 461.73,133.786 460.127,89.596 457.32,217.693 ",
          autoRotate:true,
        }
      })
      // const t2 = gsap.timeline({scrollTrigger: {
      //   trigger: "#text2",
      //   start: "190 center",
      //   end: "300 center",
      //   scrub: 1,
      //   pin: "#start",
      //   toggleActions: "restart pause reverse pause",
      //   markers:true
      // }})
      // t2.from("#text2", {
      //   translateY: 100,
      //   opacity: 0,
      //   duration: 5,
      // });
      // t2.to("#text2", {
      //   opacity: 0,
      //   duration: 5,
      //   translateY:-100
      // });

      // const t3 = gsap.timeline({scrollTrigger: {
      //   trigger: "#text3",
      //   start: "190 center",
      //   end: "300 center",
      //   scrub: 1,
      //   pin: "#start",
      //   toggleActions: "restart pause reverse pause",
      //   markers:true
      // }})
      // t3.from("#text3", {
      //   translateY: 100,
      //   opacity: 0,
      //   duration: 5,
      // });
      // t3.to("#text3", {
      //   opacity: 0,
      //   duration: 5,
      //   translateY:-50
      // });

      // const t4 = gsap.timeline({scrollTrigger: {
      //   trigger: "#text4",
      //   start: "190 center",
      //   end: "300 center",
      //   scrub: 1,
      //   pin: "#start",
      //   toggleActions: "restart pause reverse pause",
      // }})
      // t4.from("#text4", {
      //   translateY: 100,
      //   opacity: 0,
      //   duration: 5,
      // });
      // t4.to("#text4", {
      //   opacity: 0,
      //   duration: 5,
      //   translateY:-50
      // });
      // gsapGoUp("#text2","-95 500","0px 500px",100);
      // gsapGoUp("#text3","-45 500","50px 500px",100);
      // gsapGoUp("#text4","15 500","100px 500px",100);
      ScrollTrigger.refresh();


  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.beforeStart} id="beforeStart">
        <div className={styles.title} id="title">
          Scroll Down Its nice to have you here ;)
        </div>
        <div className={styles.scrolldowns} id="scroll">
          <div className={styles.mousey}>
            <div className={styles.scroller}>
              <img
                src="https://img.icons8.com/metro/96/ffffff/long-arrow-down.png/"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.start} id="start" >
        <div className={styles.left}>
          <div className={styles.line} id="line"></div>
        </div>
        <div className={styles.right} id="right">
          <div className={styles.info}>
            <div className={styles.intro} id="text1">
              <span>$:~</span>
              <span>whoami</span>
            </div>
            <div className={styles.name} id="text2">
              <span>Muhammad</span>
              <span>Shehryaar</span>
              <span>Khan</span>
            </div>
            <div className={styles.fieldWeb} id="text3">
              Creative Web Developer
            </div>
            <div className={styles.fieldCyber} id="text4">
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
          <div className={styles.info}  ref={startRef}>
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
