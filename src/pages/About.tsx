import {default as AboutIndex} from "../components/About/Index";
import { gsap } from "gsap";
import { useEffect } from "react";

const About:React.FC = () => {
    useEffect(()=>{
        gsap.timeline()
        .from("#aboutdescription", {
            opacity: 0,
            duration: 1,
            translateY:30
          })
    },[])  
    return (<>
    <AboutIndex animateDescription="aboutdescription"/>
    </>)
}

export default About;