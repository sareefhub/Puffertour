import React from "react";

import Navbar from "../components/Navbar";
import Picture from "../components/picture";

import "./package-tour.css";
import Card from "../components/Cardtour";

const Packagetour: React.FC = (props) => {

  return (
    <header className="home-container">
      <Navbar />
      <Picture />
      <div className="tap-bar">
        <span className="text-tour">ทัวร์แพ็กเกจ</span>
      </div>
      <div className="days-tour-container">
        <Card />
        <Card />
        <Card />
      </div>
    </header>
  );
};
export default Packagetour;
