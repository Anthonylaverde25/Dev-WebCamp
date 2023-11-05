import React, { useEffect, useState } from "react";
import { Login } from "./Login";
import { SingUp } from "./SingUp";

export const UserLog = () => {
  const [isMobile, setISMobile] = useState(window.innerWidth < 1200);

  const handlerResize = () => {
    setISMobile(window.innerWidth < 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", handlerResize);

    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  });

  return isMobile ? null : (
    <div className="header__userLog  flex items-center justify-center ">
      <Login />
      <SingUp />
    </div>
  );
};
