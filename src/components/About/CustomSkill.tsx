import styles from './CustomSkill.module.css'

const CustomSkill:React.FC<any> = (props) => {
    const skills1_heading = !props.skills1_heading ? false : props.skills1_heading 
    const skills2_heading = !props.skills2_heading ? false : props.skills2_heading 
    const skills3_heading = !props.skills3_heading ? false : props.skills3_heading 
    return(
        <>
            <div className={styles.skillsTitle}>{props.title}</div>
                <div className={styles.skills}>
                    <div className={styles.skills1}>
                        {skills1_heading && <div style={{color:'#8400ff'}}>{skills1_heading}</div>}
                        <div>{props.skills1_a}</div>
                        <div>{props.skills1_b}</div>
                        <div>{props.skills1_c}</div>
                    </div>
                    <div className={styles.skills2}>
                        {skills2_heading && <div style={{color:'#8400ff'}}>{skills2_heading}</div>}
                        <div>{props.skills2_a}</div>
                        <div>{props.skills2_b}</div>
                        <div>{props.skills2_c}</div>
                    </div>
                    <div className={styles.skills3}>
                        {skills3_heading && <div style={{color:'#8400ff'}}>{skills3_heading}</div>}
                        <div>{props.skills3_a}</div>
                        <div>{props.skills3_b}</div>
                        <div>{props.skills3_c}</div>
                    </div>
                </div>
        </>
    )
}

export default CustomSkill;