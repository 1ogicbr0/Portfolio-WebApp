import React from "react";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";

const Layout: React.FC<any> = (props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.main}>{props.children}</div>
    </div>
  );
};

export default Layout;
