import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../helper";

import "./Navbar.css";

const Navbar: React.FC = (props) => {
  const navigate = useNavigate();
  const user = getUserData();
  const [activeLink, setActiveLink] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const clickedLink = event.currentTarget;
    const clickedLinkText = clickedLink.textContent || "";
    setActiveLink(clickedLinkText);

    if (clickedLinkText === "แจ้งชำระเงิน" && !CheckUserToken()) {
      event.preventDefault();
      navigate("/login");
    }
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

  const CheckUserToken = () => {
    const checkuser = localStorage.getItem("user");
    if (checkuser) {
      return true;
    }
    return false;
  };

  const handleProfileClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove token from local storage
    navigate("/home"); // navigate to login page
  };

  return (
    <header className="navbar_container">
      <div className="Logo">
        <img alt="" src="/pictures/logotour.png" className="home-image" />
        <span className="home-text">uffertour</span>
      </div>
      <div className="menu_container">
      <div className="dropdownb">
  <div className="burger">
    <img src="/pictures/hamburgericon.jpg" alt="" />
  </div>
  {CheckUserToken() ? (
    <ul className="dropdown-content">
      <li><a href="/home" onClick={handleLinkClick}>หน้าแรก</a></li>
      <li><a href="/days-tour" onClick={handleLinkClick}>ทัวร์รายวัน</a></li>
      <li><a href="/package-tour" onClick={handleLinkClick}>แพ็กเกจทัวร์</a></li>
      <li><a href="/how-to-book" onClick={handleLinkClick}>วิธีการจอง</a></li>
      <li><a href="/payment" onClick={handleLinkClick}>แจ้งชำระเงิน</a></li>
      <li><a href="/about-us" onClick={handleLinkClick}>ติดต่อเรา</a></li>
      <li><a href="/userProfile" onClick={handleLinkClick}>ข้อมูลส่วนตัว</a></li>
      <li><a href="/booking-history" onClick={handleLinkClick}>ประวัติการจอง</a></li>
      <li><a href="/home" onClick={handleLogout}>ออกจากระบบ</a></li>
    </ul>
  ) : (
    <ul className="dropdown-content">
      <li><a href="/home" onClick={handleLinkClick}>หน้าแรก</a></li>
      <li><a href="/days-tour" onClick={handleLinkClick}>ทัวร์รายวัน</a></li>
      <li><a href="/package-tour" onClick={handleLinkClick}>แพ็กเกจทัวร์</a></li>
      <li><a href="/how-to-book" onClick={handleLinkClick}>วิธีการจอง</a></li>
      <li><a href="/payment" onClick={handleLinkClick}>แจ้งชำระเงิน</a></li>
      <li><a href="/about-us" onClick={handleLinkClick}>ติดต่อเรา</a></li>
      <li><a href="/login" onClick={handleLinkClick}>เข้าสู่ระบบ</a></li>
      <li><a href="/register" onClick={handleLinkClick}>สมัครสมาชิก</a></li>
    </ul>
  )}
</div>
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
            {CheckUserToken() && (
              <div className="action">
                <div className="Profileuser" onClick={handleProfileClick}>
                  <img src="/pictures/Profileuser.png" alt="" />
                  <span>{user.username}</span>
                </div>
                {isDropdownVisible && (
                  <div className="dropdownp">
                    <a href="/userProfile">ข้อมูลส่วนตัว</a>
                    <a href="/booking-history">ประวัติการจอง</a>
                    <a href="/home" onClick={handleLogout}>
                      ออกจากระบบ
                    </a>
                  </div>
                )}
              </div>
            )}
            {!CheckUserToken() && (
              <div className="Login">
                <button onClick={() => navigate("/login")}>
                  ลงชื่อเข้าใช้
                </button>
                <button onClick={() => navigate("/register")}>
                  สมัครสมาชิก
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
