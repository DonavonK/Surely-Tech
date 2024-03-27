import React from "react";
import styles from "~/styles/styles.module.css";
import "tailwindcss/tailwind.css";

type CTA_BannerProps = {
  backgroundColor: string;
  rightImage: string;
};

const CTA_Banner: React.FC<CTA_BannerProps> = ({
  backgroundColor,
  rightImage,
}) => {
  return (
    <div
      className={styles.cta_banner}
      style={{
        backgroundColor: backgroundColor,
        height: "300px",
        width: "100%",
      }}
    >
      <div className={styles.cta_banner_content}>
        <div className={styles.cta_banner_blocks}>
          <div className={styles.cta_banner_left}>
            {/* Empty div to maintain layout */}
            <div>
              <h1 className={styles.h1_light}>Discover the world of Technology</h1>
              <p className={styles.p_light}>
              The Color can change, this section can be used to highlight certain areas. The purpose was to seperate the top from the bellow blog list
              </p>
            </div>
          </div>
          <div className={styles.cta_banner_right}>
            <img
              src={rightImage}
              alt="Right Image"
              className={styles.cta_banner_right_image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA_Banner;
