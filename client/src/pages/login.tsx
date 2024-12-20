import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { storeUser } from "../helper";
import conf from "../conf";

import "./login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`${conf.apiPrefix}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      storeUser(data);
      Swal.fire(
        "เข้าสู่ระบบสำเร็จ!",
        "ยินดีต้อนรับเข้าสู่เว็บไซต์ PufferTour",
        "success"
      );
      navigate("/home");
    } else {
      Swal.fire(
        "คุณป้อนอีเมลหรือรหัสผ่านไม่ถูกต้อง!",
        "กรุณาป้อนอีกครั้ง",
        "error"
      );
    }
  };

  return (
    <div className="container">
      <div className="loginimage">
        <form className="form" onSubmit={handleSubmit}>
          <p className="heading">เข้าสู่ระบบ</p>
          <input
            className="input"
            placeholder="อีเมล"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            placeholder="รหัสผ่าน"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">
            เข้าสู่ระบบ
          </button>
          <span
            onClick={() => navigate("/register")}
            style={{ textDecoration: "underline" }}
          >
            ยังไม่มีบัญชี ผู้ใช้งาน?
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
