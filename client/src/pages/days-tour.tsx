import Navbar from "../components/Navbar";
import Picture from "../components/picture";
import "./days-tour.css";
import Card from "../components/OneDayCard";
import { OneDayRepository } from "../repositories/OneDayRepository";
import OneDayTour from "../models/OneDay";
import { useState, useEffect } from "react";
import { Grid, Box } from '@mui/material';


const DaysTour = () => {
  const [DataTour, setDataTour] = useState<OneDayTour[]>([]);
  const fetchData = async () => {
    const repo = new OneDayRepository();
    const result = await repo.getAll()
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
      <div className="tap-bar">
          <span className="text-tour">ทัวร์รายวัน</span>
      </div>
        {DataTour.map((item, index) =>
        <Grid item xs={2} sm={4} md={4} lg={3} xl={2} key={index}>
          <Card Tour={item}/>
        </Grid>
      )}
    </div>
  )
  }



export default DaysTour;