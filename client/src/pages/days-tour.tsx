import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Picture from "../components/picture";
import Card from "../components/Cardtour";

import "./days-tour.css";


const DaysTour: React.FC = (props) => {
    const navigate = useNavigate();

  return (
    <div className="daystour-container" >
        <Navbar />
        <Picture />
      <div className="tap-bar">
          <span className="text-tour">ทัวร์รายวัน</span>
      </div>
      <div className="days-tour-container6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default DaysTour;