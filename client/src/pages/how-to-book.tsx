import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Picture from "../components/picture";

import "./how-to-book.css";

const HowToBook: React.FC = (props) => {
  const navigate = useNavigate();

  return (
    <div className="how-to-book-container">
        <Navbar />
        <Picture/>
        <div className="tap-bar">
          <span className="text-tour">วิธีการจอง</span>
        </div>
      <div className="how-to-book-container6">
        <form className="how-to-book-form09">
          <span className="how-to-book-text2">
            <span>1.กดเข้าไปที่ ดูข้อมูลเพิ่มเติม ทัวร์ต้องการ</span>
            <br></br>
          </span>
          <span className="how-to-book-text5">2.กดจองเลย</span>
          <span className="how-to-book-text6">
            3.เลือกระหว่างชำระเงินทันที
            หรือชำระภายหลังหากเลือกชำระภายหลังจะมีระยะเวลากำหนดชำระ 3 วัน
            หากไม่ชำระจะยกเลิกการจอง
          </span>
          <span className="how-to-book-text7">
            4.หากชำระทันทีก็สามารถสแกน QR code ชำระเงิน
            พร้อมแนบสลิปเพื่อเป็นหลักฐานในการชำระเงิน
          </span>
        </form>
      </div>
      <div className="how-to-book-container7">
        <form className="how-to-book-form10">
          <h4 className="how-to-book-text8">อยากจะจองทัวร์ใช่ใหม?</h4>
        </form>
      </div>
      <div className="how-to-book-container8">
        <form className="how-to-book-form11">
          <button onClick={() => navigate('/days-tour')} className="how-to-book-navlink7 button">
            จองทัวร์รายวัน
          </button>
        </form>
        <form className="how-to-book-form12">
          <button onClick={() => navigate('/package-tour')} className="how-to-book-button button">จองทัวร์แพ็กเกจ</button>
        </form>
      </div>
    </div>
  )
}
export default HowToBook;
