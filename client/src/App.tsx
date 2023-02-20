import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Homepage from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import './style.css';

function App () {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;