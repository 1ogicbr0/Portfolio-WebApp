import styles from './ExtraProfiles.module.css'
const ExtraProfile =() => {
    return <>
                    <div className={styles.skillsTitle}>Extras</div>
                <div className={styles.skills}>
                    <div className={styles.skills1}>
                        <div style={{color:'#8400ff'}}>HackTheBox ~ Profile</div>
                        <a href="https://app.hackthebox.com/profile/171965"><div className={styles.hackthebox}></div></a>
                    </div>
                    <div className={styles.skills2}>
                       <div style={{color:'#8400ff'}}>BugCrowd ~ Profile</div>
                        <a href="https://bugcrowd.com/MShehryaarK"><div className={styles.bugcrowd}></div></a>
                    </div>
                    <div className={styles.skills3}>
                        <div style={{color:'#8400ff'}}>Medium ~ Report</div>
                        <a href="https://1ogic.medium.com"><div className={styles.medium}></div></a>
                    </div>
                </div></>
}
export default ExtraProfile