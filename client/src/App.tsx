import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import UserProfile from './pages/userProfile';
import Booking from './pages/booking-history';

function App () {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/additional-information-days-tour/:id' element={<AdditionalInformationDaysTour/>}/>
          <Route path='/additional-information-package-tour/:id' element={<AdditionalInformationPackageTour/>}/>
          <Route path='/days-tour' element={<DaysTour/>}/>
          <Route path='/package-tour' element={<PackageTour/>}/>
          <Route path='/how-to-book' element={<HowToBook/>}/>
          <Route path='/payment' element={<PayMent/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/userProfile' element={<UserProfile/>}/>
          <Route path='/booking-history' element={<Booking/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;