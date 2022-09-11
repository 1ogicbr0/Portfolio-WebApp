import styles from './MainSkills.module.css'
const MainSkills = () => {
return <>
                <div className={styles.skillsTitle}>Main skills</div>
                <div className={styles.skills}>
                    <div className={styles.skills1}>
                        <div>Web App Developer,</div>
                        <div>Statigic Thinker,</div>
                        <div>Tools Developer</div>
                    </div>
                    <div className={styles.skills2}>
                        <div>Frontend, UX/UI,</div>
                        <div>Backend Integration</div>
                        <div>REST APIs, Express.js</div>
                    </div>
                    <div className={styles.skills3}>
                        <div>JavaScript, CSS, HTML,</div>
                        <div>React, GSAP, TypeScript,</div>
                        <div>Node, MongoDB, Firebase</div>
                    </div>
                </div>
</>
}

export default MainSkills;