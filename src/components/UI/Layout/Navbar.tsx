import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar:React.FC  = (props) => {

    return <div className={styles.navbar}>
        <div className={styles.logo}>.me()</div>
        <div className={styles.links}>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} to="/" >.is()</NavLink>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} to="/work">.work()</NavLink>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} to="/about">.about()</NavLink>
        <NavLink className={({isActive}) => (!isActive ? styles.navlink: styles.activeNavlink)} to="/contact">.contact()</NavLink>
        </div>
    </div>
}

export default Navbar;