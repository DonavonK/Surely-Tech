import React from "react";
import Card from "./card";
import styles from "~/styles/styles.module.css";
import Row from "./row";

type UnderConstructionProps = {
  imageUrl: string;
};

const UnderConstruction: React.FC<UnderConstructionProps> = ({ imageUrl }) => {
  return (
    <div
      className={styles.underConstruction}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
    </div>
  );
};

export default UnderConstruction;
