import styles from "./Loading.module.css";

const Loading = () => {
  return (
      <div className={styles.loadingMain}>
        <div className={styles.loadingName}>Loading</div>
        <div className={styles.progress}>
          <div className={styles.color}></div>
        </div>
      </div>
  );
};

export default Loading;
