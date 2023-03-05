import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { TextField, Grid } from '@mui/material';

import './userProfile.css';

const UserProfile:React.FC = (props) => {
  const [userData, setUserData] = useState({ username: '', email: '' });

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/users/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      })
      .then((response) => {
        setUserData({
          username: response.data.username,
          email: response.data.email,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, username: event.target.value });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, email: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .put('http://localhost:1337/api/users/me', userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="user-container">
      <Navbar />
      <div className="main-bodyy">
        <div className="cardd">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
          <div className="user-name">
            <h4>Sola Jang</h4>
          </div>
        </div>
      </div>
      <div className="cardd mb-3">
        <form onSubmit={handleSubmit}>
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
                onChange={handleUsernameChange}
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
                onChange={handleEmailChange}
              />
            </Grid>
          </Grid>
          <div className="row">
              <a className="btn btn-info" target="__blank" href="#">Edit</a>
          </div>
          <div className="row">
              <a className="btn btn-info" target="__blank" href="#">Submit</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;