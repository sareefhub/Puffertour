import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./home.css";

const Homepage: React.FC = (props) => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-container04">
        <img
          alt=""
          src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005279_1.jpeg"
          className="home-image02"
        />
        <svg viewBox="0 0 1024 1024" className="home-icon10">
          <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
        </svg>
        <img
          alt=""
          src="https://www.tripniceday.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftripniceday%2Fuploads%2Fplaces%2F1586852447819.jpg&amp;w=1080&amp;q=75"
          className="home-image03"
        />
        <svg viewBox="0 0 1024 1024" className="home-icon12">
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
        <img
          alt=""
          src="https://news.gimyong.com/attachment/image/50996"
          className="home-image04"
        />
      </div>
      <div id="main-section" className="home-main">
        <div className="home-container05">
          <form className="home-form08">
            <span className="home-text02">ทัวร์รายวัน</span>
          </form>
        </div>
        <form className="home-form09">
          <form className="home-form10">
            <span className="home-text03">
              <span>ย่านเมืองเก่าสงขลา</span>
              <br></br>
            </span>
            <img
              alt=""
              src="./pictures/ย่านเมืองเก่าสงขลา.jpg"
              className="home-image05"
            />
            <span className="home-text06">
              ย่านการค้าที่สำคัญในอดีต
              เป็นถนนที่ประกอบไปด้วยอาคารและสถาปัตยกรรมที่งดงามที่ยังคงเอกลักษณ์ดั้งเดิมเอาไว้
            </span>
            <button
              onClick={() => navigate("/additional-information-days-tour")}
              className="home-navlink6 button"
            >
              ดูเพิ่มเติม
            </button>
            <span className="home-text07">เหลือเพียง 1 ที่ เท่านั้น!!!</span>
          </form>
          <form className="home-form11">
            <span className="home-text08">พิพิธภัณฑ์สถานแห่งชาติสงขลา</span>
            <img
              alt=""
              src="/pictures/พิพิธภัณสงขลา.jpg"
              className="home-image06"
            />
            <span className="home-text09">
              เป็นโบราณสถานของชาติ มีลักษณะสถาปัตยกรรมแบบจีน อายุกว่า 100 ปี
              ภายในจัดแสดงศิลปวัตถุที่เป็นมรดกทางวัฒนธรรม
              อันเป็นเอกลักษณ์ของภาคใต้และของประเทศไทย ดูข้อมูลเพิ่มเติม
            </span>
            <button className="home-button button">ดูเพิ่มเติม</button>
            <span className="home-text10">เหลือเพียง 3 ที่นั่งเท่านั้น!!!</span>
          </form>
          <form className="home-form12">
            <span className="home-text11">หาดสมิหลา</span>
            <img alt="" src="/pictures/นางเงือก.jpg" className="home-image07" />
            <span className="home-text12">
              หาดสมิหลาเป็นหาดทรายขาวละเอียดมากที่เรียกว่า &quot;ทรายแก้ว&quot;
              มีป่าสนร่มรื่นสามารถมองเห็นทิวทัศน์อันงดงามของ เกาะหนูเกาะแมว
              ดูข้อมูลเพิ่มเติม
            </span>
            <button className="home-button1 button">ดูเพิ่มเติม</button>
            <span className="home-text13">เต็ม!!!</span>
          </form>
        </form>
        <div className="home-container09">
          <form className="home-form13">
            <span className="home-text14">แพ็กเกจทัวร์</span>
          </form>
        </div>
        <div className="home-container10">
          <form className="home-form14">
            <span className="home-text15">
              <span>แพคเกจ พักหรู</span>
              <br></br>
              <span>ทัวร์สงขลา 2 วัน 1 คืน</span>
            </span>
            <img
              alt=""
              src="/pictures/ทัวร์สงขลาหรู.jpg"
              className="home-image08"
            />
            <span className="home-text19">
              <span>ทัวร์รอบสงขลา เกาะยอ</span>
              <br></br>
              <span>พค-ตค : 3,000 บาท</span>
              <br></br>
              <span>พย-เมย : 3,400 บาท</span>
              <br></br>
            </span>
            <button onClick={() => navigate('/additional-information-package-tour')} className="home-navlink7 button">ดูเพิ่มเติม</button>
            <span className="home-text26">เหลือเพียง 1 ที่ เท่านั้น!!!</span>
          </form>
          <form className="home-form15">
            <span className="home-text27">
              <span>แพคเกจ ชิวๆ</span>
              <br></br>
              <span>ทัวร์สงขลา 2 วัน 1 คืน</span>
            </span>
            <img
              alt=""
              src="/pictures/ทัวร์สงขลาชิว.jpg"
              className="home-image09"
            />
            <span className="home-text31">
              <span>หาดสมิหลา เกาะยอ ย่านเมืองเก่า</span>
              <br></br>
              <span>พค-ตค : 1,500 บาท</span>
              <br></br>
              <span>พย-เมย : 2,400 บาท</span>
            </span>
            <button className="home-button2 button">ดูเพิ่มเติม</button>
            <span className="home-text37">เหลือเพียง 3 ที่นั่งเท่านั้น!!!</span>
          </form>
          <form className="home-form16">
            <span className="home-text38">
              <span>แพคเกจ จัดเต็ม</span>
              <br></br>
              <span>ทัวร์สงขลา 3 วัน 2คืน</span>
            </span>
            <img
              alt=""
              src="/pictures/ทัวร์สงขลาจัดเต็ม.jpg"
              className="home-image10"
            />
            <span className="home-text42">
              <span>ทัวร์รอบสงขลา เกาะยอ</span>
              <br></br>
              <span>พค-ตค : 2,700 บาท</span>
              <br></br>
              <span>พย-เมย : 3,200บาท</span>
              <br></br>
            </span>
            <button className="home-button3 button">ดูเพิ่มเติม</button>
            <span className="home-text49">เหลือเพียง 9 ที่ เท่านั้น!!!</span>
          </form>
        </div>
        <div className="home-footer"></div>
      </div>
    </div>
  );
};
export default Homepage;
