import { useState } from "react";
import Header from "./Header/Header";
import HeaderSection from "./Header/HeaderSection";
import "./Header/Header.scss";

function Main() {
  return (
    <main className="section-header">
      <Header />
      <HeaderSection />
    </main>
  );
}

export default Main;
