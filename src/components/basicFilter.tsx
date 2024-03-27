import React from "react";
import styles from "~/styles/styles.module.css"; // Adjust the path as needed

type BasicFilterProps = {
  topImage: string;
  title: string;
  text: string;
};

const BasicFilter: React.FC<BasicFilterProps> = ({ topImage, title, text }) => {
  return (
    <div className={styles.filterCard}>
  
        <div className="font-bold text-xl mb-2">{title}</div>
    </div>
  );
};

export default BasicFilter;
