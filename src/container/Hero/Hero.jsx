import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow.png";
import styles from "./Hero.module.css";
import Mockup1 from "../../assets/mockups/mockup1.svg";
import Mockup2 from "../../assets/mockups/mockup2.svg";
import Rings from "../../assets/rings.png";
import ColorMesh1 from "../../assets/colorMesh/colorMesh1.svg";
import ColorMesh2 from "../../assets/colorMesh/colorMesh2.svg";
import Star1 from "../../assets/stars/star1.png";
import Star2 from "../../assets/stars/star2.png";
import Star3 from "../../assets/stars/star3.png";
import Star4 from "../../assets/stars/star4.png";
import LeftImage from "../../assets/achievements.svg";
import MediaIcon from "../../assets/icons/mediaIcon.svg";

const Hero = () => {
  return (
    <div className="app__wrapper">
      <div className={styles.heroLeftContent}>
        <p className={styles.mainHeading}>Make the best</p>
        <p className={styles.mainHeading}>Financial Decisions</p>
        <p className={styles.subText}>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className={styles.leftButtons}>
          <button className={styles.getStartedButton}>
            <Link to="">Get Started</Link>
            <i className="arrow">
              {" "}
              <img src={Arrow} alt="arrow" />
            </i>
          </button>
          <Link to="">
          <button className={styles.watchNowButton}>
            
              <img src={MediaIcon} alt="mediaIcon" />
            Watch Video
          </button></Link>
        </div>
        <div className={styles.leftImage}>
          <img src={LeftImage} alt="leftImage" />
        </div>
        <div className={styles.colorMesh1}>
          <img src={ColorMesh1} alt="colorMesh1" />
        </div>
        <div className={styles.star3}>
          <img src={Star3} alt="star3" />
        </div>
        <div className={styles.star4}>
          <img src={Star4} alt="star4" />
        </div>
      </div>
      <div className={styles.heroRightContent}>
        <div className={styles.mockupContainer}>
          <img src={Mockup1} alt="mockup1" className={styles.mockup1} />
          <img src={Mockup2} alt="mockup2" className={styles.mockup2} />
          <img src={Mockup1} alt="mockup3" className={styles.mockup3} />
        </div>
        <div className={styles.heroRings}>
          <img src={Rings} alt="rings" />
        </div>
        <div className={styles.colorMesh2}>
          <img src={ColorMesh2} alt="colorMesh2" />
        </div>
        <div className={styles.star1}>
          <img src={Star1} alt="star1" />
        </div>
        <div className={styles.star2}>
          <img src={Star2} alt="star2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
