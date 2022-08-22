import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar:React.FC  = (props) => {

    return <div className={styles.navbar}>
        <div className={styles.logo}>.me()</div>
        <div className={styles.links}>
        <NavLink className={styles.navlink} to="/" >.is()</NavLink>
        <NavLink className={styles.navlink} to="/work">.work()</NavLink>
        <NavLink className={styles.navlink} to="/about">.about()</NavLink>
        <NavLink className={styles.navlink} to="/contact">.contact()</NavLink>
        </div>
    </div>
}

export default Navbar;