import React from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login: React.FC = (props) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="image">
        <form className="form">
          <p className="heading">เข้าสู่ระบบ</p>
          <input className="input" placeholder="อีเมล" type="text" />
          <input className="input" placeholder="รหัสผ่าน" type="text" />
          <button className="btn">เข้าสู่ระบบ</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
