import styles from './Navbar.module.css'

const Navbar:React.FC  = (props) => {

    return <div className={styles.navbar}>
        <div className={styles.logo}>.me()</div>
        <div className={styles.links}>
        <div className={styles.navlink}>.is()</div>
        <div className={styles.navlink}>.work()</div>
        <div className={styles.navlink}>.about()</div>
        <div className={styles.navlink}>.contact()</div>
        </div>
    </div>
}

export default Navbar;