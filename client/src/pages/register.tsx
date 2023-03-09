import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import conf from '../conf';

import './register.css';

const Register: React.FC = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!username || !email || !password || !confirmPassword) {
      Swal.fire({
        title: 'คุณป้อนข้อมูลไม่ครบถ้วน!',
        text: 'กรุณาป้อนให้ครบ',
        icon: 'warning'
      });
      return;
    }
  
    try {
      const response = await axios.post(`${conf.apiPrefix}/api/auth/local/register`, {
        username,
        email,
        password,
        confirmPassword,
      });
  
      console.log(response.data);
  
      Swal.fire({
        title: 'ลงทะเบียนสำเร็จ!',
        icon: 'success'
      });
  
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
      <div className="container">
        <div className="cardregister">
          <div className="card-header">
            <div className="text-header">สมัครสมาชิก</div>
          </div>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="username">ชื่อบัญชีผู้ใช้:</label>
                <input
                  className="form-control"
                  name="username"
                  id="username"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">อีเมล:</label>
                <input
                  className="form-control"
                  name="email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">รหัสผ่าน:</label>
                <input
                  className="form-control"
                  name="password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">ยืนยันรหัสผ่าน:</label>
                <input
                  className="form-control"
                  name="confirm-password"
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
              <input type="submit" className="btn" value="ยืนยัน" />
              <text onClick={() => navigate('/login')} style={{ textDecoration: 'underline' }} className="text-footer">มีบัญชีแล้ว? เข้าสู่ระบบ</text>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Register;