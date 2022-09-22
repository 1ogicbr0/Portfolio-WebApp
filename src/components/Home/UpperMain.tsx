import styles from "./UpperMain.module.css";

const UpperComponent: React.FC<any> = (props) => {
  return (
    <>
      <div className={styles.beforeStart} id="beforeStart">
        <div className={styles.title} id="title">
          Its nice to have you here ;) Scroll Down Slowly
        </div>
        <div className={styles.scrolldowns} id="scroll">
          <div className={styles.mousey}>
            <div className={styles.scroller}>
              <img
                src="https://img.icons8.com/metro/96/ffffff/long-arrow-down.png/"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperComponent;
