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
      <div className="main-bodyy">
        <div className="cardd">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
          <div className="user-name">
            <h4>{user.username}</h4>
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
        </form>
      </div>
    </div>
  );
};

export default UserProfile;