import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { UserLog } from "./UserLog";

export const Header = () => {
  return (
    <div className="header__container--grid  py-5">
      <Logo />
      <Navigation />
      <UserLog />
    </div>
  );
};
