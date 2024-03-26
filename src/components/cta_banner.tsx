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
              <h1 className={styles.cta_banner_h1}>Surely-Tech</h1>
              <div className="bg-blue-500 text-white p-4 mt-4">
                This div has a blue background and white text with padding.
              </div>
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
