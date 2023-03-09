import Navbar from "../components/Navbar";
import Picture from "../components/picture";
import "./package-tour.css";
import Card from "../components/PackageCard";
import Packagetour from "../models/Package";
import { useState, useEffect } from "react";
import { Grid } from '@mui/material';
import Repository from '../repositories';


const PackagesTour = () => {
  const [DataTour, setDataTour] = useState<Packagetour[]>([]);
  const fetchData = async () => {
    const result = await Repository.Packagedata.getAll()
    if(result) {
      setDataTour(result)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="package-tour-container" >
      <Navbar />
      <Picture />
      <div className="payment-container04">
        <span className="payment-text01">แพ็คเกจทัวร์</span>
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



export default PackagesTour;