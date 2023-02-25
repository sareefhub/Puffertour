import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar: React.FC = (props) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const clickedLink = event.currentTarget;
    const clickedLinkText = clickedLink.textContent || "";
    setActiveLink(clickedLinkText);
  };

  useEffect(() => {
    const links = document.querySelectorAll(".home-navlink");
    links.forEach((link) => {
      const linkText = link.textContent || "";
      if (linkText === activeLink) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [activeLink]);

  return (
    <header className="navbar_container">
      <div className="Logo">
        <img alt="" src="./pictures/logotour.png" className="home-image" />
        <span className="home-text">uffertour</span>
      </div>
      <div className="menu_container">
        <ul>
          <li>
            <a href="/home" onClick={handleLinkClick} className="home-navlink">
              หน้าแรก
            </a>
            <a
              href="/days-tour"
              onClick={handleLinkClick}
              className="home-navlink"
            >
              ทัวร์รายวัน
            </a>
            <a
              href="/package-tour"
              onClick={handleLinkClick}
              className="home-navlink"
            >
              แพ็กเกจทัวร์
            </a>
            <a
              href="/how-to-book"
              onClick={handleLinkClick}
              className="home-navlink"
            >
              วิธีการจอง
            </a>
            <a
              href="/payment"
              onClick={handleLinkClick}
              className="home-navlink"
            >
              แจ้งชำระเงิน
            </a>
            <a
              href="/about-us"
              onClick={handleLinkClick}
              className="home-navlink"
            >
              ติดต่อเรา
            </a>
            <div className="Login">
              <button onClick={() => navigate('/login')} >
                  ลงชื่อเข้าใช้
              </button>
              <button onClick={() => navigate('/register')} >
                  สมัครสมาชิก
              </button>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
