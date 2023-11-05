import React from "react";
import styles from "./hero.module.css";
import { HeroDescription } from "./HeroDescription";
import { HeroImages } from "./HeroImages";
import { Container } from "postcss";

export const Hero = () => {
  return (
    <div className={styles["hero__container"]}>
      <div className={`${styles["hero__container--grid"]}`}>
        <HeroDescription />
        <HeroImages />
      </div>
    </div>
  );
};
