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

const rightImage = "/cta_banner_image_.png";
const backgroundColor = "#257C9D";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <SecondaryBanner imageUrl="secondayBanner.png" />

      <div style={{marginBottom: "40px"}} className={styles.section_left}>
        <h1 className={styles.h1_dark}>This is the title of a blog post</h1>
        <h4 className={styles.h4_dark}>New Lnie Heading</h4>
        <p className={styles.p_dark}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <br />
        <p className={styles.p_dark}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <br />
        <p className={styles.p_dark}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <CTA_Banner backgroundColor={backgroundColor} rightImage={rightImage} />

      <Footer text={""}></Footer>
    </>
  );
};

export default BlogPage;
