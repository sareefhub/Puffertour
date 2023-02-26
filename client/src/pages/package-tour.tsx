import Navbar from "../components/Navbar";
import Picture from "../components/picture";
import "./package-tour";
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
      <div className="tap-bar">
          <span className="text-tour">แพ็คเกจทัวร์</span>
      </div>
        {DataTour.map((item, index) =>
        <Grid item xs={2} sm={4} md={4} lg={3} xl={2} key={index}>
          <Card Tour={item}/>
        </Grid>
      )}
    </div>
  )
  }



export default PackagesTour;