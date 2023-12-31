import React from "react";
import styles from "./event.module.css";

export const Card = ({ event }) => {
  const { speakerID, title, description, price, speaker, date, image } = event;
  const imagePath = `assets/images/imagesIconos/${image}`;
  return (
    <div className={styles.card__container}>
      <div className={styles["card__image"]}>
        <div className={styles["card__main-image"]}>
          <img className={styles["image-event"]} src={imagePath} alt="" />
        </div>
      </div>

      <div className={styles["card__info-content"]}>
        <span className={styles.card__price}>{price}</span>

        <div className={styles["card__main-title"]}>{title}</div>
        <div className={styles.card__description}>{description}</div>

        <div className={styles.card__ponente}>
          <div className={styles["ponente__image-container"]}>
            <img
              className={styles.ponente__image}
              src={`assets/images/imagesPonentes/speaker_${speakerID}.png`}
              alt=""
            />
          </div>
          <div className={styles.ponente__info}>
            <span>{speaker}</span>
            <p>{date}</p>
          </div>
        </div>
      </div>
      {/* La siguiente imagen parece estar fuera del conflicto */}
    </div>
  );
};
