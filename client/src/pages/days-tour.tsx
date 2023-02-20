import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import "./days-tour.css";


const DaysTour: React.FC = (props) => {
    const navigate = useNavigate();

  return (
    <div className="days-tour-container" >
        <Navbar />
        <div className="days-tour-container4">
        <img
          alt=""
          src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005279_1.jpeg"
          className="days-tour-image2"
        />
        <svg viewBox="0 0 1024 1024" className="days-tour-icon10">
          <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
        </svg>
        <img
          alt=""
          src="https://www.tripniceday.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftripniceday%2Fuploads%2Fplaces%2F1586852447819.jpg&amp;w=1080&amp;q=75"
          className="days-tour-image3"
        />
        <svg viewBox="0 0 1024 1024" className="days-tour-icon12">
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
        <img
          alt=""
          src="https://news.gimyong.com/attachment/image/50996"
          className="days-tour-image4"
        />
      </div>
      <div className="days-tour-container5">
        <form className="days-tour-form08">
          <span className="days-tour-text02">ทัวร์รายวัน</span>
        </form>
      </div>
      <div className="days-tour-container6">
        <form className="days-tour-form09">
          <span className="days-tour-text03">
            <span>ย่านเมืองเก่าสงขลา</span>
            <br></br>
          </span>
          <img
            alt=""
            src="./pictures/ย่านเมืองเก่าสงขลา.jpg"
            className="days-tour-image5"
          />
          <span className="days-tour-text06">
            ย่านการค้าที่สำคัญในอดีต
            เป็นถนนที่ประกอบไปด้วยอาคารและสถาปัตยกรรมที่งดงามที่ยังคงเอกลักษณ์ดั้งเดิมเอาไว้
          </span>
          <button onClick={() => navigate('/additional-information-days-tour')}
            className="days-tour-navlink6 button"
          >
            ดูเพิ่มเติม
          </button>
          <span className="days-tour-text07">เหลือเพียง 1 ที่ เท่านั้น!!!</span>
        </form>
        <form className="days-tour-form10">
          <span className="days-tour-text08">พิพิธภัณฑ์สถานแห่งชาติสงขลา</span>
          <img
            alt=""
            src="/pictures/พิพิธภัณสงขลา.jpg"
            className="days-tour-image6"
          />
          <span className="days-tour-text09">
            เป็นโบราณสถานของชาติ มีลักษณะสถาปัตยกรรมแบบจีน อายุกว่า 100 ปี
            ภายในจัดแสดงศิลปวัตถุที่เป็นมรดกทางวัฒนธรรม
            อันเป็นเอกลักษณ์ของภาคใต้และของประเทศไทย ดูข้อมูลเพิ่มเติม
          </span>
          <button className="days-tour-button button">ดูเพิ่มเติม</button>
          <span className="days-tour-text10">
            เหลือเพียง 3 ที่นั่งเท่านั้น!!!
          </span>
        </form>
        <form className="days-tour-form11">
          <span className="days-tour-text11">หาดสมิหลา</span>
          <img
            alt=""
            src="/pictures/นางเงือก.jpg"
            className="days-tour-image7"
          />
          <span className="days-tour-text12">
            หาดสมิหลาเป็นหาดทรายขาวละเอียดมากที่เรียกว่า &quot;ทรายแก้ว&quot;
            มีป่าสนร่มรื่นสามารถมองเห็นทิวทัศน์อันงดงามของ เกาะหนูเกาะแมว
            ดูข้อมูลเพิ่มเติม
          </span>
          <button className="days-tour-button1 button">ดูเพิ่มเติม</button>
          <span className="days-tour-text13">เต็ม!!!</span>
        </form>
      </div>
    </div>
  )
}

export default DaysTour;