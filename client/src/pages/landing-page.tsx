import React from 'react';
import { useNavigate } from 'react-router-dom';

import './landing-page.css';

const LandingPage: React.FC = (props) => {
  const navigate = useNavigate();

  return (
    <div className="landing-page-container">
      <title>
        <title>Puffer Tour v.1</title>
        <meta property="og:title" content="Puffer Tour v.1" />
      </title>
      <div className="landing-page-container1">
        <button className="landing-page-button button">
          ยินดีต้อนรับเข้าสู่เว็บไซต์
        </button>
        <button onClick={() => navigate('/home')} className="landing-page-navlink button">
          เยี่ยมชมเว็บไซต์
        </button>
      </div>
      <div className="landing-page-container2">
        <button className="landing-page-navlink1 button">
          เข้าสู่ระบบ
        </button>
        <button  className="landing-page-navlink2 button">
          สมัครสมาชิก
        </button>
      </div>
    </div>
  );
};
export default LandingPage;

