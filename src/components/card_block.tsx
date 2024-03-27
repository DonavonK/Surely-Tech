import React from "react";
import Card from "./card";
import styles from "~/styles/styles.module.css";
import Row from "./row";

type Card_blockProps = {
  imageUrl: string;
};

const Card_block: React.FC<Card_blockProps> = ({ imageUrl }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.main_banner_content}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" className={styles.logo_home} />
        </div>
        <h1 className={styles.h1_light}>Surely-Tech</h1>
        <p>Smart people choose tech</p>
      </div>
    </div>
  );
};

export default Card_block;
