import {default as WorkIndex} from '../components/Work/Index'
import {useEffect} from 'react';
import { gsap } from "gsap";


const Work:React.FC = () => {
    useEffect(()=>{
        gsap.timeline()
        .from("#work", {
            opacity: 0,
            duration: 1,
            translateY:15
          })
    },[])   
    return (
    <>
    <WorkIndex id="work"/>
    </>)
}

export default Work;