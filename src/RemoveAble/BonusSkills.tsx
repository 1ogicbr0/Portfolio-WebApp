import styles from './BonusSkills.module.css'
const BonusSkills = () => {
    return <>
                <div className={styles.skillsTitle}>Bonus skills</div>
                <div className={styles.skills}>
                    <div className={styles.skills1}>
                        <div style={{color:'#8400ff'}}>Linux / Windows</div>
                        <div>Kali, Debian, Ubuntu</div>
                        <div>Server Configuration</div>
                        <div>Bash Scripting</div>
                    </div>
                    <div className={styles.skills2}>
                        <div style={{color:'#8400ff'}}>Tools</div>
                        <div>Nmap, Burp suite,</div>
                        <div>Nessus, Wireshark</div>
                        <div>Nikto, SqlMap</div>
                    </div>
                    <div className={styles.skills3}>
                        <div style={{color:'#8400ff'}}>Hobies</div>
                        <div>Web Penetration Testing</div>
                        <div>Bug Bounty Hunting</div>
                        <div>Vulnerability Assesment</div>
                    </div>
                </div>
    </>
}

export default BonusSkills;