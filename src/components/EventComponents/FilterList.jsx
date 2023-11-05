import React, { useEffect, useState } from "react";
import { ListItems } from "./ListItems";
import styles from "./event.module.css";
import { EventsIT } from "./../../hooks/EventIT";
import { EventSelect } from "./EventSelect";

export const FilterList = () => {
  const { events } = EventsIT({});
  const [windowWidth, setWinddowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handlerResize = () => {
      setWinddowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handlerResize);

    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  });

  return (
    <div className={styles.filter__container}>
      {windowWidth <= 1482 ? (
        <EventSelect events={events} />
      ) : (
        <ul className={styles.list__items}>
          {events.map((event, index) => (
            <ListItems key={index} event={event} />
          ))}
        </ul>
      )}
    </div>

    /*
    <ul className={styles.list__items}>
      {events.map((event, index) => (
        <ListItems key={index} event={event} />
      ))}
    </ul>*/
  );
};
