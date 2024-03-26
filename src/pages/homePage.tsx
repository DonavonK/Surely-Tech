import React from "react";
import Navbar from "~/components/navBar";
import Banner from "~/components/banner";
import Card from "~/components/card";
import styles from "~/styles/styles.module.css";
import Row from "~/components/row";
import CTA_Banner from "~/components/cta_banner";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner imageUrl="homePage_banner.png" />
      <section className={styles.cardSection}>
        <Row>
          <Card
            title="Sample Card 1"
            topImage="/homePage_banner.png"
            text="This is a sample card description."
          />
          <Card
            title="Sample Card 2"
            topImage="/homePage_banner.png"
            text="This is a sample card description."
          />
          <Card
            title="Sample Card 3"
            topImage="/homePage_banner.png"
            text="This is a sample card description."
          />
        </Row>


      </section>
      <div className={styles.container_center}>
<h1>Are you addicted to tech?</h1>
</div>
<></>
    </>
  );
};

export default HomePage;
