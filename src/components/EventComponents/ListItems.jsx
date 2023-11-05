import React from "react";
import styles from "./event.module.css";

export const ListItems = ({ key, event }) => {
  return (
    <>
      <li key={key} className={styles.items}>
        <a href="#">{event}</a>
      </li>
    </>
  );
};
