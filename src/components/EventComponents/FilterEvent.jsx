import React from "react";
import styles from "./event.module.css";
import { FilterList } from "./FilterList";

export const FilterEvent = () => {
  return (
    <div className={styles["event__filter-type"]}>
      <FilterList />
    </div>
  );
};
