import styles from './CustomSkill.module.css'

interface CustomSkillsProps {
    title:string,
    skills1_heading?:string, 
    skills1_a:string,
    skills1_b:string,
    skills1_c:string,
    skills2_heading?:string,
    skills2_a:string,
    skills2_b:string,
    skills2_c:string,
    skills3_heading?:string,
    skills3_a:string,
    skills3_b:string,
    skills3_c:string,
}

const CustomSkill:React.FC<CustomSkillsProps> = (props) => {
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