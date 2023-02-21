import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Picture from "../components/picture";

import "./package-tour.css";

const Packagetour: React.FC = (props) => {
    const navigate = useNavigate();

return (
    <div className="package-tour-container">
        <Navbar />
        <Picture/>
      <div className="package-tour-container5">
        <form className="package-tour-form08">
          <span className="package-tour-text02">แพ็กเกจทัวร์</span>
        </form>
      </div>
      <div className="package-tour-container6">
        <form className="package-tour-form09">
          <span className="package-tour-text03">
            <span>แพคเกจ พักหรู</span>
            <br></br>
            <span>ทัวร์สงขลา 2 วัน 1 คืน</span>
          </span>
          <img
            alt=""
            src="/pictures/ทัวร์สงขลาหรู.jpg"
            className="package-tour-image5"
          />
          <span className="package-tour-text07">
            <span>ทัวร์รอบสงขลา เกาะยอ</span>
            <br></br>
            <span>พค-ตค : 3,000 บาท</span>
            <br></br>
            <span>พย-เมย : 3,400 บาท</span>
            <br></br>
          </span>
          <button onClick={() => navigate('/additional-information-package-tour')}
            className="package-tour-navlink6 button"
          >
            ดูเพิ่มเติม
          </button>
          <span className="package-tour-text14">
            เหลือเพียง 1 ที่ เท่านั้น!!!
          </span>
        </form>
        <form className="package-tour-form10">
          <span className="package-tour-text15">
            <span>แพคเกจ ชิวๆ</span>
            <br></br>
            <span>ทัวร์สงขลา 2 วัน 1 คืน</span>
          </span>
          <img
            alt=""
            src="/pictures/ทัวร์สงขลาชิว.jpg"
            className="package-tour-image6"
          />
          <span className="package-tour-text19">
            <span>หาดสมิหลา เกาะยอ ย่านเมืองเก่า</span>
            <br></br>
            <span>พค-ตค : 1,500 บาท</span>
            <br></br>
            <span>พย-เมย : 2,400 บาท</span>
          </span>
          <button className="package-tour-button button">ดูเพิ่มเติม</button>
          <span className="package-tour-text25">
            เหลือเพียง 3 ที่นั่งเท่านั้น!!!
          </span>
        </form>
        <form className="package-tour-form11">
          <span className="package-tour-text26">
            <span>แพคเกจ จัดเต็ม</span>
            <br></br>
            <span>ทัวร์สงขลา 3 วัน 2คืน</span>
          </span>
          <img
            alt=""
            src="/pictures/ทัวร์สงขลาจัดเต็ม.jpg"
            className="package-tour-image7"
          />
          <span className="package-tour-text30">
            <span>ทัวร์รอบสงขลา เกาะยอ</span>
            <br></br>
            <span>พค-ตค : 2,700 บาท</span>
            <br></br>
            <span>พย-เมย : 3,200บาท</span>
            <br></br>
          </span>
          <button className="package-tour-button1 button">ดูเพิ่มเติม</button>
          <span className="package-tour-text37">
            เหลือเพียง 9 ที่ เท่านั้น!!!
          </span>
        </form>
      </div>
    </div>
  )
}
export default Packagetour;