import React from "react";
import Card from "./card";
import styles from "~/styles/styles.module.css";
import Row from "./row";
import Link from "next/link";

type UnderConstructionProps = {
  imageUrl: string;
};

const UnderConstruction: React.FC<UnderConstructionProps> = ({ imageUrl }) => {
  return (
    <div
      className={styles.underConstruction}
      // style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div style={{marginTop: "450px", width: "200px", height: "60px", backgroundColor: "#001F2B", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center", color: "#FFFFFF"}}>

<Link href={"/homePage"}>Click Here</Link>
</div>
    </div>
  );
};

export default UnderConstruction;
