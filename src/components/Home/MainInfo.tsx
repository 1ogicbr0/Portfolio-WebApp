import styles from "./MainInfo.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faR } from "@fortawesome/free-solid-svg-icons";
import Typewriter from 'typewriter-effect';
import {gsapStartGoUp} from './gsapHelper';
import PathAnimation from "./PathAnimation";
import './PathAnimation.css';
import { Link } from "react-router-dom";

library.add(faR);

const MainInfo = () => {

  
  let NameTypeWrite = (<Typewriter
    options={{
      strings: ['Pakistan', 'پاکستان'],
      cursor: " |",
      autoStart: true,
      loop: true,}}/>)

  const startRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline()
      .to("#title", {
        scrollTrigger: {
          trigger: "#title",
          start: "0 190",
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
      
      gsapStartGoUp();
      


      // const t2 = gsap.timeline();
      // t2.from("#line",{
      //   duration:10,
      //   opacity: 0,
      // })
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

      <div className={styles.div} id="div" >
        <div className={styles.left}>
          <div className={styles.line1} id="line1"></div>
          <div className={styles.line2} id="line2"></div>
          <div className={styles.line3} id="line3"></div>
        </div>
        <div className={styles.right} id="right">
        <div className={styles.start}>
             <div className={styles.infoStart}>
              <div className={styles.introStart} id="startText1"><span>$:~</span><span>whoami</span></div>
              <div className={styles.nameStart} id="startText2"><span>Muhammad</span><span>Shehryaar</span><span>Khan</span></div>
              <div className={styles.fieldWeb} id="startText3">Creative Web Developer</div>
              <div className={styles.fieldCyber} id="startText4">Bug Bounty Hunter</div>
            </div>
        </div>

          <div className={styles.mid} >
          <div className={styles.infoMid}  >
            <div className={styles.midText1} id="midText1">From <span style={{color:'green',fontWeight:1000}}>Pakistan</span> to help the <span style={{color:'#639cd9',fontWeight:800}}>world!</span></div>
            <div className={styles.midText2} id="midText2">I did my Olevels from OPF College</div>
            <div className={styles.midText3} id="midText3">and A-levels from Roots International School</div>
            <div className={styles.midText4} id="midText4"> Currently doing my bachelors in Cyber Security from AirUniversity</div>
          </div>
          </div>

        <div className={styles.end} >
          <div className={styles.infoEnd}>
          <div className={styles.endText1} id="endText1">Motive<span style={{color:'#8400ff'}}>?</span></div>
          <div className={styles.endText2} id="endText2">The main thing that motivates me is to figure out most efficient way to solve a complex-problem, when stuck in it.</div>
          <div className={styles.endText4} id="endText3">Creating extraordinary websites using different tecnologies</div>
          <div className={styles.endText5} id="endText4">Learning about new technologies to find bugs and secure them.</div>
          <div className={styles.endText6} id="endText6"><Link to="/contact">Contact Me</Link></div> 
          </div>
        </div>

        </div>

      <div className={styles.divAnimate}> <PathAnimation /></div>

      </div>
    

    </div>
  );
};

export default MainInfo;
