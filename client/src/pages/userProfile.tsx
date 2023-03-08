import React from 'react';
import Navbar from '../components/Navbar';
import { TextField, Grid } from '@mui/material';
import { getUserData } from '../helper';
import './userProfile.css';

const UserProfile:React.FC = (props) => {
  const user = getUserData()

  return (
    <div className="user-container">
      <Navbar />
      <div className="payment-container04">
        <span className="payment-text01">ข้อมูลส่วนตัว</span>
      </div>
      <div className="cardd-container">
        <div className="cardd1">
          <img src="./pictures/Profileuser.png" alt="Admin" className="rounded-circle" width="150" />
          <div className="user-name">
            <h4>{user.username}</h4>
          </div>
        </div>
        <div className="cardd2">
          <div className="text-container">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="ชื่อบัญชีผู้ใช้งาน"
                  autoFocus
                  value={user.username}
                  disabled
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
                  value={user.email}
                  disabled
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>  
    </div> 
  );
};

export default UserProfile;