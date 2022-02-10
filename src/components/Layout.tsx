import React, { FC } from "react";
import styles from "./Layout.module.css";
import Navigation from "./Navigation";

const Layout: FC = (props) => {
  const { children } = props;
  return (
    <div className={styles.fullscreen}>
      <div className={styles["gradient-1"]} />
      <div className={styles["gradient-2"]} />
      <header>
        <Navigation />
      </header>
      <main className="flex flex-1 justify-center align-middle">{children}</main>
      <footer className="flex justify-center p-1 align-middle">
        <span>bezgachev.com</span>
      </footer>
    </div>
  );
};

export default Layout;
