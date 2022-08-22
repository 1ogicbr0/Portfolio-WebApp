import styles from "./MainInfo.module.css";
import Anime from "@mollycule/react-anime";

const MainInfo = () => {


  return (
    <div className={styles.main}>
        <div className={styles.beforeStart}></div>
      <div className={styles.start}>
        <div className={styles.line}></div>
        <div className={styles.info}>
        <Anime
        in
        appear
        duration={1000}
        onEntering={{ translateY: [-20,0], opacity:[0,1]}}
        onExiting={{ translateY: -20, opacity:0}}
        easing="easeOutCubic"
        >
          GREAT
        </Anime>
        <div className={styles.intro} >
          <span>$:~</span>
          <span>whoami</span>
        </div>
        <div className={styles.name}><span>Muhammad</span><span>Shehryaar</span><span>Khan</span></div>
        <div className={styles.fieldWeb}> Creative Web Developer </div>
        <div className={styles.fieldCyber}> Bug Bounty Hunter</div>
        </div>
      </div>
      <div className={styles.mid}>Middle</div>
      <div className={styles.end}>End</div>
    </div>
  );
};

export default MainInfo;
