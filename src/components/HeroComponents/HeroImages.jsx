import React from "react";
import styles from "./hero.module.css";
import speakerImage from "../../assets/images/imagesIconos/hero.png";

export const HeroImages = () => {
  return (
    <div className={styles.hero__images}>
      <img className={styles.image} src={speakerImage} alt="" />
    </div>
  );
};
