import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.appNavbar}>
      <div className={styles.navContainer}>
        <img src={Logo} alt="logo" />
        <ul className={`${styles.links} ${isOpen ? styles.showMenu : ""}`}>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/about">About Us</Link>
          </li>
          <li className={styles.link}>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className={styles.link}>
            <Link to="/features">Features</Link>
          </li>
        </ul>
       
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
      <button className={styles.navButton}>Download</button>
    </nav>
  );
};

export default Navbar;
