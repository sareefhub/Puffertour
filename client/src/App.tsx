import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Homepage from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import AdditionalInformationDaysTour from './pages/additional-information-days-tour';
import AdditionalInformationPackageTour from './pages/additional-information-package-tour';
import DaysTour from './pages/days-tour';
import PackageTour from './pages/package-tour';
import HowToBook from './pages/how-to-book';
import PayMent from './pages/payment';
import AboutUs from './pages/about-us';
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
          <Route path='/package-tour' element={<PackageTour/>}/>
          <Route path='/how-to-book' element={<HowToBook/>}/>
          <Route path='/payment' element={<PayMent/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>

        </Routes>
    </BrowserRouter>
  );
};

export default App;