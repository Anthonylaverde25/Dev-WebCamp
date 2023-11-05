import React from "react";
import { NavList } from "./NavList";

export const Navigation = () => {
  /* navlist debe renderizar un toggle o una <lista></lista>*/

  return (
    <div className="header__navigation  flex items-center justify-center ">
      <NavList />
    </div>
  );
};
