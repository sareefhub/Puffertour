import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./how-to-book.css";

const HowToBook: React.FC = (props) => {
  const navigate = useNavigate();

  return (
    <div className="how-to-book-container">
        <Navbar />
        <div className="how-to-book-container4">
        <img
          alt=""
          src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005279_1.jpeg"
          className="how-to-book-image2"
        />
        <svg viewBox="0 0 1024 1024" className="how-to-book-icon10">
          <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
        </svg>
        <img
          alt=""
          src="https://www.tripniceday.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftripniceday%2Fuploads%2Fplaces%2F1586852447819.jpg&amp;w=1080&amp;q=75"
          className="how-to-book-image3"
        />
        <svg viewBox="0 0 1024 1024" className="how-to-book-icon12">
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
        <img
          alt=""
          src="https://news.gimyong.com/attachment/image/50996"
          className="how-to-book-image4"
        />
      </div>
      <div className="how-to-book-container5">
        <form className="how-to-book-form08">
          <span className="how-to-book-text1">วิธีการจอง</span>
        </form>
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
          <span className="how-to-book-text8">อยากจะจองทัวร์ใช่ใหม?</span>
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
