import React from "react";
import styles from "./EventComponents/event.module.css";
import { EventHeader } from "./EventComponents/EventHeader";
import { EventBody } from "./EventComponents/EventBody";

export const EventSectionContainer = () => {
  return (
    <div className={styles["container__event-section"]}>
      <EventHeader />
      <EventBody />
    </div>
  );
};
