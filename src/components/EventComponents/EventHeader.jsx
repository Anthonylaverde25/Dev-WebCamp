import React from "react";
import styles from "./event.module.css";
import { SearchEventByLocation } from "./SearchEventByLocation";
import { FilterEvent } from "./FilterEvent";

export const EventHeader = () => {
  return (
    <div className={styles["event__header-container"]}>
      <SearchEventByLocation />
      <FilterEvent />
    </div>
  );
};
