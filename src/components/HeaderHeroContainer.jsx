import React from "react";
import { Header } from "./HeaderComponents/Header";
import { Hero } from "./HeroComponents/Hero";

export const HeaderHeroContainer = () => {
  return (
    <div className="container__header-hero">
      <Header />
      <Hero />
    </div>
  );
};
