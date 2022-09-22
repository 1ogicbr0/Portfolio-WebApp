import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import { faB, faCheckSquare, faCoffee, faDatabase, faHouseLaptop, faS, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '../../../assets/avatar.png'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {useEffect} from 'react'
import { gsap } from "gsap";
import "react-hamburger-menus/dist/style.css";

library.add(faB, faS, faHouseLaptop, faCheckSquare, faCoffee, faDatabase, faWindowMaximize);

const Navbar:React.FC  = (props) => {

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
      gsap
      .timeline()
      .to("#navLogo",0.1,{x:"+=3", yoyo:true, repeat:5})
    }

    return <div className={styles.navbar}>

        <div className={styles.logo} onClick={logoHandler}><img id="navLogo" src={avatar}></img></div>
        <div className={styles.links}>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} onClick={animateLineHandler} to="/" >.is()<div id="navLine"></div></NavLink>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} onClick={animateLineHandler} to="/work">.work()<div id="navLine"></div></NavLink>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} onClick={animateLineHandler} to="/about">.about()<div id="navLine"></div></NavLink>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} onClick={animateLineHandler} to="/contact">.contact()<div id="navLine"></div></NavLink>
        </div>
    </div>
}

export default Navbar;