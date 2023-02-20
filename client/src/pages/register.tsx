import React from 'react'
import { Link } from 'react-router-dom'

import './register.css'

const Register: React.FC = () => {
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
        <form className="register-form01">
          <span className="register-text01">เพศ</span>
          <input type="checkbox" className="register-checkbox" />
          <span className="register-text02">ชาย</span>
          <input type="checkbox" className="register-checkbox1" />
          <span className="register-text03">หญิง</span>
        </form>
        <form className="register-form02">
          <span>
            <span className="register-text05">
              ชื่อ 
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
                                                   
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="register-text07">นามสกุล </span>
            <span>  </span>
          </span>
        </form>
        <form className="register-form03">
          <input type="text" className="register-textinput input" />
          <input type="text" className="register-textinput1 input" />
        </form>
        <form className="register-form04">
          <span className="register-text09">เลขบัตรประจำตัวประชาชน</span>
          <input type="text" className="register-textinput2 input" />
        </form>
        <form className="register-form05">
          <span className="register-text10">อีเมลล์</span>
          <input type="text" className="register-textinput3 input" />
        </form>
        <form className="register-form06">
          <span className="register-text11">เบอร์โทรศัพท์</span>
          <input type="text" className="register-textinput4 input" />
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
          <Link to="/login" className="register-navlink button">
            สมัครสมาชิก
          </Link>
        </form>
        <form className="register-form11">
          <Link to="/login" className="register-navlink1">
            <span>
              มีบัญชีอยู่แล้ว ?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>เข้าสู่ระบบ</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register
