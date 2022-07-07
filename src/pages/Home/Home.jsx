import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

const Home = (props) => {
  const { arrayPages } = props;
  return (
    <div className={styles.home}>
      {arrayPages.map((obj) => (
        <Link key={obj.name} to={obj.path} className={styles.link}>
          <span className={styles.text}>{obj.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Home;
