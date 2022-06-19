import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Link to="js" className={styles.link}>
          <span className={styles.text}>JS Tasks Page</span>
        </Link>

        <Link to="php" className={styles.link}>
          <span className={styles.text}>PHP</span>
        </Link>

        <Link to="react" className={styles.link}>
          <span className={styles.text}>React JS Tasks Page</span>
        </Link>
      </div>
    );
  }
}
