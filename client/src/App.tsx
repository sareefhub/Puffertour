import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Homepage from './pages/home';
import './style.css';

function App () {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/home' element={<Homepage/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;