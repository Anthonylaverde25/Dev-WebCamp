import React from "react";
import styles from "./hero.module.css";
import { ButtonFindEvent } from "./ButtonFindEvent";
import { ButtonCreateEvent } from "./ButtonCreateEvent";

export const HeroDescription = () => {
  return (
    <div className={styles.hero__description}>
      <div className={styles.description}>
        <h2>Reliable, secure conference to get the best events</h2>
      </div>
      <div className={styles.small}>
        IHold incredible events, share knowledge, build and grow your product ,
        create opportunity
      </div>

      <div className={styles.button__container}>
        <ButtonFindEvent />
        <ButtonCreateEvent />
      </div>
    </div>
  );
};
