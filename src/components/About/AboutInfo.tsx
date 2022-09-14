import styles from './AboutInfo.module.css'
import image from '../../assets/shehry-image-10.png';
import MainSkills from './MainSkills';
import BonusSkills from './BonusSkills';
import SocialMedias from '../UI/SocialMedias';
import ExtraProfile from './ExtraProfiles';
const AboutInfo = () => {

    return <>
    <div className={styles.mainAboutInfo}>
    <div  className={styles.myImage}><img src={image} alt="Shehryaar"></img></div>
        <div className={styles.aboutMe}>
            <div className={styles.leftAboutMe}></div>
            <div className={styles.rightAboutMe}>
                <div className={styles.title}><span className={styles.color}>abo</span>ut(<span className={styles.shehryaar}> shehryaar </span>)</div>
                <SocialMedias />
                <div className={styles.info}>
                    <div>I am an ambitios Cyber Security Student and</div>
                    <div> a driven individual with the ability to adapt different</div>
                    <div> situations and I have potential to grow self.</div>
                    <div className={styles.pakistan}>From <span style={{color:'green',fontWeight:'1000'}}>Pakistan</span>, based in Islamabad.</div>
                </div>
                <MainSkills />
                <BonusSkills />
                <ExtraProfile />
            </div>
        </div>
    </div>

    </>
}

export default AboutInfo