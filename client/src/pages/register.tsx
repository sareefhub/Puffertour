import React from 'react'
import { useNavigate } from 'react-router-dom';

import './register.css'

const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <title>
        <title>Register - Puffer Tour v.1</title>
        <meta property="og:title" content="Register - Puffer Tour v.1" />
      </title>
      <div className="register-container1">
        <form className="register-form">
          <h1 className="register-text">สมัครสมาชิก</h1>
        </form>
        <form className="register-form02">
          <span>
            <span className="register-text05">
              ชื่อ นามสกุล
            </span>
          </span>
        </form>
        <form className="register-form03">
          <input type="text" className="register-textinput input" />
          <input type="text" className="register-textinput1 input" />
        </form>
        <form className="register-form05">
          <span className="register-text10">อีเมล</span>
          <input type="text" className="register-textinput3 input" />
        </form>
        <form className="register-form07">
          <span className="register-text12">รหัสผ่าน</span>
          <input type="text" className="register-textinput5 input" />
        </form>
        <form className="register-form08">
          <span className="register-text13">ยืนยันรหัสผ่าน</span>
          <input type="text" className="register-textinput6 input" />
        </form>
        <form className="register-form09">
          <input
            type="checkbox"
            defaultChecked={true}
            className="register-checkbox2"
          />
          <span className="register-text14">ยอมรับข้อตกลงและเงื่อนไข</span>
        </form>
        <form className="register-form10">
          <button onClick={() => navigate('/login')} className="register-navlink button">
            สมัครสมาชิก
          </button>
        </form>
        <form className="register-form11">
          <text onClick={() => navigate('/login')} className="register-navlink1">
            <span>
              มีบัญชีอยู่แล้ว ?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>เข้าสู่ระบบ</span>
          </text>
        </form>
      </div>
    </div>
  )
}

export default Register
