import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.appNavbar}>
      <div className={styles.navContainer}>  
      <img src={Logo} alt="logo" />
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={styles.link}>
          <Link to="/contact">Pricing</Link>
        </li>
        <li className={styles.link}>
          <Link to="/contact">Features</Link>
        </li>
      </ul>
      </div>
      <button className={styles.navButton}>Download</button>
    </nav>
  );
};

export default Navbar;
