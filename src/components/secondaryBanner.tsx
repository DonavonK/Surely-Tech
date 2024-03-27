import React from "react";
import Card from "./card";
import styles from "~/styles/styles.module.css";
import Row from "./row";

type SecondaryBannerProps = {
  imageUrl: string;
};

const SecondaryBanner: React.FC<SecondaryBannerProps> = ({ imageUrl }) => {
  return (
    <div
      className={styles.secondaryBanner}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.main_banner_content}>
        <div style={{marginTop: "-130px"}} className={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" className={styles.logo_home} />
        </div>
        <h1 className={styles.h1_light}>Surely-Tech</h1>
        <p>Smart people choose tech</p>
      </div>
    </div>
  );
};

export default SecondaryBanner;