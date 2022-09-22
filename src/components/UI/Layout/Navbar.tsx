import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import avatar from '../../../assets/avatar.png'
import { gsap } from "gsap";

const Navbar:React.FC  = () => {

    const animateLineHandler = () => {
         gsap
        .timeline()
        .fromTo("#navLine", {
          opacity: 0,
          duration: 0.5,
          scale:0

        },{
          opacity: 1,
          duration: 0.5,
          scale:0.5
        })
    }
    const logoHandler = () => {
      gsap.timeline()
        .to("#navLogo",0.1,{x:"+=3", yoyo:true, repeat:6,opacity:0.9})
        .to("#navLogo",1,{x:"-=5", yoyo:true, repeat:3,opacity:1})
    }

    return <div className={styles.navbar}>

        <div className={styles.logo} onClick={logoHandler}><img id="navLogo" src={avatar} alt="avatar"></img></div>
        <div className={styles.links}>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} onClick={animateLineHandler} to="/" >.is()<div id="navLine"></div></NavLink>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} onClick={animateLineHandler} to="/work">.work()<div id="navLine"></div></NavLink>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} onClick={animateLineHandler} to="/about">.about()<div id="navLine"></div></NavLink>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} onClick={animateLineHandler} to="/contact">.contact()<div id="navLine"></div></NavLink>
        </div>
    </div>
}

export default Navbar;