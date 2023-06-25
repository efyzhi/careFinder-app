import React from "react";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div>
      <header>
        <div className={styles.logo}>
          <p> CareFinder</p>
        </div>
        <nav className={styles.menu}>
          <ul className={styles.menuList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/find">Find Hospital</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Sign up</Link>
            </li>
            <li>
              <Link to={"/dashboard"}> Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
