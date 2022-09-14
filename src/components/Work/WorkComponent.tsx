import styles from './WorkComponent.module.css';
const WorkComponent =(props:any) => {
    let sourceCode = !props.gitLink ? false: true;
    let deployed = !props.deployLink ? false: true;
    let downloadable = !props.exeFile ? false: true;
    

    return <>
            <div className={styles.work}>
            <div className={styles.workHeading}>{props.title}</div>
            <div className={styles.workDescription}>
                <span>{props.desc1}</span>
                <span>{props.desc2}</span>
            </div>
            <div className={styles.workLink}>
                {sourceCode && <a href={props.gitLink}><span>GitHub Link</span></a>}
                {deployed && <a href={props.deployLink}><span>Deployed</span></a>}
                {downloadable && <a href={props.exeFile}><span>Download</span></a>}
            </div>
        </div>
    </>
}

export default WorkComponent;