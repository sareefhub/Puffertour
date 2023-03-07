import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { TextField, Grid } from '@mui/material';

import './userProfile.css';

const UserProfile:React.FC = (props) => {
  const [userData, setUserData] = useState({ username: '', email: '' });

  useEffect(() => {
    const username = localStorage.getItem('username') || '';
    const email = localStorage.getItem('email') || '';
    setUserData({ username, email });
  }, []);

  return (
    <div className="user-container">
      <Navbar />
      <div className="main-bodyy">
        <div className="cardd">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
          <div className="user-name">
            <h4>{userData.username}</h4>
          </div>
        </div>
      </div>
      <div className="cardd mb-3">
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="username"
                required
                fullWidth
                id="username"
                label="ชื่อบัญชีผู้ใช้งาน"
                autoFocus
                value={userData.username}
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
                value={userData.email}
                disabled
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;