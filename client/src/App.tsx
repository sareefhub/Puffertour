import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Homepage from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import AdditionalInformationDaysTour from './pages/additional-information-days-tour';
import AdditionalInformationPackageTour from './pages/additional-information-package-tour';
import DaysTour from './pages/days-tour';
import './style.css';

function App () {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/additional-information-days-tour' element={<AdditionalInformationDaysTour/>}/>
          <Route path='/additional-information-package-tour' element={<AdditionalInformationPackageTour/>}/>
          <Route path='/days-tour' element={<DaysTour/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;