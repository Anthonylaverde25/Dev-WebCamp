import React from "react";
import style from "./hero.module.css";

export const ButtonCreateEvent = () => {
  return (
    <button
      className={`${style.buttonCreateEvent}  uppercase font-bold  flex gap-2 items-center te`}
    >
      Create Event
      <i class="fa-solid fa-arrow-right-long"></i>
    </button>
  );
};
