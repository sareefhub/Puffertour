import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

//10-98
import './payment.css'

const Payment:React.FC  = (props) => {
    const navigate = useNavigate();
    
  return (
    <div className="payment-container"> 
      <Navbar/>
      <div className="payment-container04">
        <form className="payment-form08">
          <svg viewBox="0 0 877.7142857142857 1024" className="payment-icon12">
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className="payment-text01">ชำระเงิน</span>
        </form>
        <form className="payment-form09">
          <svg viewBox="0 0 1024 1024" className="payment-icon14">
            <path d="M768 469.333h-512c-47.104 0-85.333 38.229-85.333 85.333s38.229 85.333 85.333 85.333h512c47.104 0 85.333-38.229 85.333-85.333s-38.229-85.333-85.333-85.333z"></path>
          </svg>
        </form>
        <form className="payment-form10">
          <svg viewBox="0 0 877.7142857142857 1024" className="payment-icon16">
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className="payment-text02">ชำระเงินสำเร็จ</span>
        </form>
      </div>
      <div className="payment-container05">
        <form className="payment-form11">
          <span className="payment-text03">กรุณาสแกนเพื่อชำระเงิน</span>
          <img
            alt="image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
            className="payment-image2"
          />
        </form>
        <div className="payment-container06">
          <h1 className="payment-text04">
            <span>รายละเอียดการโอนเงิน</span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </h1>
          <span className="payment-text27">
            บัญชีที่โอนเงิน :  พร้อมเพย์ 093-xxxxx7-0 นายอดิเทพ แบบเหมือน
          </span>
          <span className="payment-text28">วันที่ชำระเงิน : 2023-02-10</span>
          <div className="payment-container07">
            <div className="payment-container08">
              <div className="payment-container09">
                <div className="payment-container10">
                  <div className="payment-container11">
                    <span className="payment-text29">เวลา (โดยประมาณ) :  </span>
                    <select className="payment-select">
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                      <option value="Option 3">Option 3</option>
                    </select>
                  </div>
                  <span className="payment-text30"> : </span>
                </div>
              </div>
              <select className="payment-select1">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <span className="payment-text31"> น.</span>
          </div>
          <div className="payment-container12">
            <span className="payment-text32">จำนวนเงิน : </span>
            <input
              type="text"
              placeholder="                                 บาท"
              className="payment-textinput input"
            />
          </div>
          <div className="payment-container13">
            <div className="payment-container14">
              <span className="payment-text33">หลักฐานการโอน :  </span>
            </div>
            <input type="text" className="payment-textinput1 input" />
          </div>
          <span className="payment-text34">
            <span>
              การแนบหลักฐานจะช่วยทำให้ตรวจสอบได้เร็วขึ้น
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>[ ไฟล์ jpg,gif,png,pdf ไม่เกิน2MB ]</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Payment
