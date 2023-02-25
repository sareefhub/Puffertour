import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import Picture from "../components/picture";
import Card from "../components/Cardtour";

const Homepage: React.FC = (props) => {

  return (
    <header className="home-container">
      <Navbar />
      <Picture/>
      <div className="tap-bar">
          <span className="text-tour">ทัวร์รายวัน</span>
      </div>
      <div className="days-tour-container">
        <Card />
        <Card />
        <Card />
      </div>
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
export default Homepage;
