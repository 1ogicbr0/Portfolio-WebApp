import styles from "./Index.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Typewriter from 'typewriter-effect';
import {gsapScrollAnimationHelper, gsapFrontAnimationHelper} from './gsapHelper';
import PathAnimation from "./PathAnimation";
import './PathAnimation.css';
import { Link } from "react-router-dom";
import UpperComponent from "./UpperMain";

const MainInfo:React.FC<{id:string}> = (props) => {
  let NameTypeWrite = (<Typewriter
    options={{
      strings: ['Pakistan', 'پاکستان'],
      cursor: "|",
      autoStart: true,
      loop: true,}}/>)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
      gsapFrontAnimationHelper(); 
      gsapScrollAnimationHelper();
      ScrollTrigger.refresh();
  }, []);

  return (
    <div className={styles.main} id={props.id}>
      <UpperComponent/>
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
            <div className={styles.midText1} id="midText1">From <span style={{color:'green',fontWeight:1000}}>{NameTypeWrite}</span>to help the <span style={{color:'#639cd9',fontWeight:800}}> world!</span></div>
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

        <div className={styles.divAnimate}><PathAnimation /></div>

      </div>
    

    </div>
  );
};

export default MainInfo;
