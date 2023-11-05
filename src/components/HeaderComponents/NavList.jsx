/*import React, { useEffect, useState } from "react";

export const NavList = () => {
  const [isMobile, setISMobile] = useState(window.innerWidth < 1200);
  const [activeLink, setActiveLink] = useState(null);

  const handlerResize = () => {
    setISMobile(window.innerWidth < 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", handlerResize);

    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  });

  const handlerLinkHover = (link) => {
    setActiveLink(link);
  };


  return (
    <div className="navigation">
      {isMobile ? (
        <div className="navigation__toggle  p-2">
          <i className="fa-solid fa-bars toggle-menu"></i>
        </div>
      ) : (
        <ul className="navigation__container-links  flex items-center justify-center space-x-20">
          <li className="link  py-2 px-3 active">
            <a href="#">Home</a>
          </li>

          <li
            onMouseEnter={() => handlerLinkHover("About")}
            className={`link  py-2 px-3 ${
              activeLink === "About" ? "active" : ""
            }`}
          >
            <a href="#">About</a>
          </li>

          <li className="link  py-2 px-3">
            <a href="#">Example</a>
          </li>

          <li className="link  py-2 px-3">
            <a href="#">Refence</a>
          </li>
        </ul>
      )}
    </div>
  );
};
*/

import React, { useEffect, useState } from "react";

export const NavList = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [activeLink, setActiveLink] = useState(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleLinkHover = (link) => {
    setActiveLink(link);
  };

  const links = [
    { text: "Home", key: "home" },
    { text: "About", key: "about" },
    { text: "Example", key: "example" },
    { text: "Reference", key: "reference" },
  ];

  return (
    <div className="navigation">
      {isMobile ? (
        <div className="navigation__toggle  p-2">
          <i className="fa-solid fa-bars toggle-menu"></i>
        </div>
      ) : (
        <ul className="navigation__container-links  flex items-center justify-center space-x-20">
          {links.map((link) => (
            <li
              key={link.key}
              onMouseEnter={() => handleLinkHover(link.key)}
              className={`link  py-2 px-3 ${
                activeLink === link.key ? "active" : ""
              }`}
            >
              <a href="#">{link.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
