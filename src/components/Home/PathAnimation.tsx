import './PathAnimation.css';
import { useEffect} from 'react';
import { gsap } from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin"
import ScrollTrigger from "gsap/ScrollTrigger";
const PathAnimation: React.FC = () => {

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
        gsap.defaults({ease: "none"});
        
        gsap.set(".ball", {xPercent: -50, yPercent: -50})
        
        let tl = gsap.timeline({
          defaults: {
            duration: 0.05, 
            autoAlpha: 1, 
            transformOrigin: 'center', 
            ease: "elastic(2.5, 1)"
          }})
        .fromTo(".ball02, .text01", {scale:1.5},{scale:2}, 0.13) 
        .fromTo(".ball03, .text02", {scale:1.5},{scale:2}, 0.44)
        .fromTo(".ball04, .text03", {scale:1.5},{scale:2.1}, 0.73)
        
        let action = gsap.timeline({defaults: {duration: 1},
          scrollTrigger: {
            trigger: "#svg",
            scrub: true,
            start: "0 center",
            end: "4320 center"
          }})
        .to(".ball01", {duration: 0.01, autoAlpha: 1})
        .from(".theLine", {drawSVG: 0}, 0)
        .to(".ball01", {motionPath: {path: ".theLine", alignOrigin: [0.5, 0.5]}}, 0)
        .add(tl, 0);
    } ,[])

    return <>
    
<svg id="svg"  viewBox="0 0 600 1200">
  <path className="line01 line" d="M 10 220  600 220" ></path>
  <path className="line02 line" d="M 10 400  600 400" ></path>
  <path className="line03 line" d="M 10 600  600 600" ></path>
  <path className="line04 line" d="M 10 800  600 800" ></path>
  <path className="line05 line" d="M 10 1000  600 1000" ></path>
  <text className="text01" x="70" y="230">Introduction</text>
  <text className="text02" x="70" y="390">Background</text>
  <text className="text03" x="90" y="550">Aim</text>

  <path className="theLine" 
        d="M -5,0
        Q 450 230 300 450 
        T 130 750
        Q 100 850 300 1000
        T -25 1200"
        fill="none" stroke="white" stroke-width="3px" />
  
  <circle className="ball ball01" r="20" cx="25" cy="25"></circle>
  <circle className="ball ball02" r="20" cx="230" cy="151"></circle>
  <circle className="ball ball03" r="20" cx="223" cy="621"></circle>
  <circle className="ball ball04" r="20" cx="342" cy="1040"></circle>

</svg>
</>
}

export default PathAnimation;