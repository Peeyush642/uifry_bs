// src/components/Footer.js
import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/logos/logo.png";
import Mail from "../../assets/icons/Mail.png";
import Phone from "../../assets/icons/phone.svg";

const Footer = () => {
  return (
    <footer className="app__wrapper">
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.contact}>
            <img src={Logo} alt="uifry logo" className={styles.logo} />
            <p className={styles.email}>
              <img src={Mail} alt="mail" className={styles.mailIcon} />
              Help@Frybix.Com
            </p>
            <p className={styles.phone}>
              <img src={Phone} alt="phone" className={styles.phoneIcon} />
              +1234 456 678 89
            </p>
          </div>
          <div className={styles.links}>
            <h3 className={ styles.navHeadings }>Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Bookings</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className={styles.legal}>
            <h3 className={ styles.navHeadings }>Legal</h3>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className={styles.product}>
            <h3 className={ styles.navHeadings }>Product</h3>
            <ul>
              <li>Take Tour</li>
              <li>Live Chat</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className={styles.newsletter}>
            <h3 className={ styles.navHeadings }>Newsletter</h3>
            <p>Stay Up To Date</p>
            <div className={styles.newsletterInput}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.emailInput}
              />
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright 2022 Uifry.Com All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
