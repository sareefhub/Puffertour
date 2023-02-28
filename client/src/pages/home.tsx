import Navbar from "../components/Navbar";
import "./home.css";
import Picture from "../components/picture";
import OneDayCard from "../components/OneDayCard";
import PackageCard from "../components/PackageCard";
import OneDayTour from "../models/OneDay";
import PackageTour from "../models/Package";
import { useState, useEffect } from "react";
import { Grid } from '@mui/material';
import Repository from '../repositories';

const Homepage = () => {
    const [OneDayTour, setOneDayTour] = useState<OneDayTour[]>([]);
    const [PackageTour, setPackageTour] = useState<PackageTour[]>([]);
    const fetchData = async () => {
      const resultday = await Repository.Tourdata.getAll()
      const resultpac = await Repository.Packagedata.getAll()
      if(resultday && resultpac) {
        setOneDayTour(resultday)
        setPackageTour(resultpac)
      }
    }
    
    useEffect(() => {
      fetchData()
    }, [])

  return (
    <header className="home-container">
      <Navbar />
      <Picture/>
      <div className="tap-bar">
          <span className="text-tour">ทัวร์รายวัน</span>
      </div>
      <div className="days-tour-container">
        <Grid container spacing={2} justifyContent="center">
          {OneDayTour.map((item, index) => (
          <Grid item key={index}>
            <OneDayCard Tour={item}/>
          </Grid>
        ))}
        </Grid>
      </div>
      <div className="tap-bar">
          <span className="text-tour">ทัวร์แพ็กเกจ</span>
      </div>
      <div className="days-tour-container">
        <Grid container spacing={2} justifyContent="center">
          {PackageTour.map((item, index) => (
          <Grid item key={index}>
            <PackageCard Tour={item}/>
          </Grid>
        ))}
        </Grid>
      </div>
    </header>
  );
};
export default Homepage;
