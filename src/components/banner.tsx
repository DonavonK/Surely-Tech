import React from "react";
import Card from "./card";
import styles from "~/styles/styles.module.css";
import Row from "./row";

type BannerProps = {
  imageUrl: string;
};

const Banner: React.FC<BannerProps> = ({ imageUrl }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.main_banner_content}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" className={styles.logo_home} />
        </div>
        <h1 className={styles.h1}>Surely-Tech</h1>
        <p>Smart people choose tech</p>
      </div>
    </div>
  );
};

export default Banner;
