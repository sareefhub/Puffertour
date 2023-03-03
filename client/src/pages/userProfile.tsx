import React from 'react'
import Navbar from '../components/Navbar';
import { TextField, Grid } from '@mui/material';

import './userProfile.css'

const UserProfile:React.FC = (props) => {

return (
  <div className="user-container">
  <Navbar/>
  <div className="main-bodyy">
    <div className="cardd">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
          <div className="user-name">
            <h4>Sola Jang</h4>
          </div>
    </div>
    </div>
      <div className="cardd mb-3">
      <Grid item xs={12} sm={6}>
          <TextField
            name="username"
            required
            fullWidth
            id="username"
            label="ชื่อบัญชีผู้ใช้งาน"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="email"
            required
            fullWidth
            id="email"
            label="อีเมล"
            autoFocus
          />
        </Grid>
    </div>
  </div>  
  )
};

export default UserProfile;