import React from "react";
import { Link } from "react-router-dom";


import "./login.css";

const Login: React.FC = (props) => {
  return (
    <div className="login-container">
      <title>
        <title>Login - Puffer Tour v.1</title>
        <meta property="og:title" content="Login - Puffer Tour v.1" />
      </title>
      <div className="login-container1">
        <form className="login-form">
          <h1 className="login-text">เข้าสู่ระบบ</h1>
        </form>
        <form className="login-form1">
          <span className="login-text1">เบอร์โทรศัพท์/อีเมล</span>
        </form>
        <form className="login-form2">
          <input
            type="text"
            placeholder="******@email.com"
            className="login-textinput input"
          />
        </form>
        <form className="login-form3">
          <span className="login-text2">รหัสผ่าน</span>
        </form>
        <form className="login-form4">
          <input
            type="text"
            placeholder="******"
            className="login-textinput1 input"
          />
        </form>
        <form className="login-form5">
          <Link to="/home" className="login-navlink button">
            เข้าสู่ระบบ
          </Link>
        </form>
        <form className="login-form6">
          <Link to="/register" className="login-navlink1">
            <span>
              ยังไม่มีบัญชี
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span className="login-text4">ผู้ใช้งาน?</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;