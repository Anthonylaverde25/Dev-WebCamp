import React from "react";
import styles from "./event.module.css";
import { EventsCurrenTitle } from "./EventsCurrenTitle";
import { EventCards } from "./EventCards";

export const EventBody = () => {
  return (
    <div className={styles["event__body-container"]}>
      <div className={styles.body__container}>
        <EventsCurrenTitle />
        <EventCards />
      </div>
    </div>
  );
};
