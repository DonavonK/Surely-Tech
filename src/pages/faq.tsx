import React from "react";
import Navbar from "~/components/navBar";
import Banner from "~/components/banner";
import Card from "~/components/card";
import styles from "~/styles/styles.module.css";
import Row from "~/components/row";
import CTA_Banner from "~/components/cta_banner";
import FilterBar from "~/components/filterBar";
import Footer from "~/components/footer";
import SecondaryBanner from "~/components/secondaryBanner";
import Accordion from "~/components/accordion";

const rightImage = "/cta_banner_image_.png";
const backgroundColor = "#257C9D";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <SecondaryBanner imageUrl="secondayBanner.png" />
     
<Accordion question={"New question"} answer={"Here is the answer"}/>

      <Footer text={""}></Footer>
    </>
  );
};

export default FAQ;
