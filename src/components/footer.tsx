import React from "react";
import Card from "./card";
import styles from "~/styles/styles.module.css";
import Row from "./row";

type FooterProps = {
    text: string;
};

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <div
      className={styles.footer}
    >
<div style={{ display: "flex", gap: "14rem"}}>




            
        <div style={{ display: "row", gap: "5rem"}}>
        <h1 className={styles.h1_light}>Navigation</h1>
        <h4 className={styles.h4_light}>Nav Link</h4>
        <h4 className={styles.h4_light}>Nav Link</h4>
        <h4 className={styles.h4_light}>Nav Link</h4>
        </div>
        
        <div style={{ display: "row", gap: "5rem"}}>
        <h1 className={styles.h1_light}>Navigation</h1>
        <h4 className={styles.h4_light}>Nav Link</h4>
        <h4 className={styles.h4_light}>Nav Link</h4>
        <h4 className={styles.h4_light}>Nav Link</h4>
        </div>

        <div style={{ display: "row", gap: "5rem"}}>
        <h1 className={styles.h1_light}>Navigation</h1>
        <h4 className={styles.h4_light}>Nav Link</h4>
        <h4 className={styles.h4_light}>Nav Link</h4>
        <h4 className={styles.h4_light}>Nav Link</h4>
        </div>

</div>
    </div>
  );
};

export default Footer;
