import React from "react";
import styles from "./event.module.css";

export const EventSelect = ({ events }) => {
  return (
    <div className={styles.event__select}>
      <select className={styles.select}>
        <option value=""> --Seleciona un Categoria de evento--</option>
        {events.map((event, index) => (
          <option key={index} value={event}>
            {event}
          </option>
        ))}
      </select>
    </div>
  );
};
