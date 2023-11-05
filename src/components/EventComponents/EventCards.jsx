import React, { useState } from "react";
import styles from "./event.module.css";
import { Card } from "./Card";
import { useCardData } from "../../hooks/useCardData";

export const EventCards = () => {
  const { eventData } = useCardData();

  const [startIndex, setStartIndex] = useState(0); // Cambiar "setStarIndex" a "setStartIndex"

  const cardsPerPage = () => {
    if (window.innerWidth >= 1024) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  };

  const prevPage = () => {
    setStartIndex(Math.max(0, startIndex - cardsPerPage()));
    console.log("funciona");
  };

  const nextPage = () => {
    setStartIndex(
      Math.min(eventData.length - cardsPerPage(), startIndex + cardsPerPage())
    );
  };

  return (
    <div className={styles.cards__container}>
      {eventData.map((event, index) => (
        <Card key={index} event={event} />
      ))}
    </div>
  );
};
