import React from "react";
import styles from "~/styles/styles.module.css"; // Adjust the path as needed

type CardProps = {
  topImage: string;
  title: string;
  text: string;
};

const Card: React.FC<CardProps> = ({ topImage, title, text }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={topImage} alt={title} className={styles.cardImage} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  );
};

export default Card;
