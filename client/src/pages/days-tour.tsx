import Navbar from "../components/Navbar";
import Picture from "../components/picture";
import "./days-tour.css";
import Card from "../components/OneDayCard";
import OneDayTour from "../models/OneDay";
import { useState, useEffect } from "react";
import { Grid } from '@mui/material';
import Repository from '../repositories';

const DaysTour = () => {
  const [DataTour, setDataTour] = useState<OneDayTour[]>([]);
  const fetchData = async () => {
    const result = await Repository.Tourdata.getAll()
    if(result) {
      setDataTour(result)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="daystour-container" >
      <Navbar />
      <Picture />
      <div className="payment-container04">
        <span className="payment-text01">ทัวร์รายวัน</span>
      </div>
      <Grid container spacing={2} justifyContent="center">
        {DataTour.map((item, index) => (
          <Grid item key={index}>
            <Card Tour={item}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default DaysTour;
