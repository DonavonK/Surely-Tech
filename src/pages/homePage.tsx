import React from "react";
import Navbar from "~/components/navBar";
import Banner from "~/components/banner";
import Card from "~/components/card";
import styles from "~/styles/styles.module.css";
import Row from "~/components/row";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner imageUrl="homePage_banner.png" />
      <section className={styles.cardSection}>
        <Row>
          <Card
            title="Sample Card 1"
            topImage="/background_1.png"
            text="This is a sample card description."
          />
          <Card
            title="Sample Card 2"
            topImage="/background_1.png"
            text="This is a sample card description."
          />
          <Card
            title="Sample Card 3"
            topImage="/background_1.png"
            text="This is a sample card description."
          />
        </Row>
      </section>
    </>
  );
};

export default HomePage;
