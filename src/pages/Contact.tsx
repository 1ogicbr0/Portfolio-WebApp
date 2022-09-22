import IndexContact from "../components/Contact/IndexContact";
import { gsap } from "gsap";
import { useEffect } from "react";

const Contact:React.FC = () => {
    useEffect(()=>{
        gsap.timeline()
        .from("#contact", {
            opacity: 0,
            duration: 2,
            translateY:10
          })
    },[])  
    return <><IndexContact id="contact" /></>
}

export default Contact;