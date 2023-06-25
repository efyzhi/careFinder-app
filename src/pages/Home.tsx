import React from "react";
import styles from "../styles/Home.module.css";


const Home: React.FC = () => {
  return (
    <>
      <div className={styles.home}>
        <div>
          <h1>Welcome to Carefinder</h1>
          <p>Find and connect with hospitals in your area</p>
        </div>
        <div className={styles.imgs}>
          <img />
        </div>
      </div>
      <div className={styles.search}>
        <h2>Search for Hospitals</h2>
        <input placeholder="find a hospital nearby" />
        <button>Search</button>
      </div>

      <div className={styles.doings}>
        <div className={styles.num}></div>
        <div className={styles.num}></div>
        <div className={styles.num}></div>
        <div className={styles.num}></div>
      </div>
    </>
  );
};

export default Home;
