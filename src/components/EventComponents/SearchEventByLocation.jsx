import React from "react";
import styles from "./event.module.css";

export const SearchEventByLocation = () => {
  return (
    <div className={styles["event__filter-location"]}>
      <h2>Popular in:</h2>
      <input placeholder="BUENOS AIRES..." type="text" />
    </div>
  );
};
