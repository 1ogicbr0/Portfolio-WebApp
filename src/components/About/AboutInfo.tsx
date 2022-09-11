import styles from './AboutInfo.module.css'
import image from '../../assets/shehry-image-10.png';
import MainSkills from './MainSkills';
import gitHubIcon from '../../assets/github.svg'
import linkedInIcon from '../../assets/linkedin.svg';
import twitterIcon from '../../assets/square-twitter.svg'
import BonusSkills from './BonusSkills';
const AboutInfo = () => {
    return <>
    <div className={styles.main}>
        <div className={styles.me}>
            <div className={styles.myImage}><div className={styles.image}><img src={image} alt="Shehryaar"></img></div></div>
        </div>
        <div className={styles.aboutMe}>
            <div className={styles.leftAboutMe}></div>
            <div className={styles.rightAboutMe}>
                <div className={styles.title}><span className={styles.color}>abo</span>ut(<span className={styles.shehryaar}> shehryaar </span>)</div>
                <div className={styles.socialMedia}>
                <img src={gitHubIcon} alt="github"/>
                <img src={linkedInIcon} alt="linkedIn"/>
                <img src={twitterIcon} alt="linkedIn"/>
                    LinkedIn GitHub</div>
                <div className={styles.info}>
                    <div>I am an ambitios Cyber Security Student and</div>
                    <div> a driven individual with the ability to adapt different</div>
                    <div> situations and I have potential to grow self.</div>
                    <div className={styles.pakistan}>From <span style={{color:'green',fontWeight:'1000'}}>Pakistan</span>, based in Islamabad.</div>
                </div>
                <MainSkills />
                <BonusSkills />
            </div>
        </div>
    </div>
    </>
}

export default AboutInfo