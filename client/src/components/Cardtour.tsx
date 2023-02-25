import React from 'react'
import { useNavigate } from "react-router-dom";

import "./Cardtour.css"

const Card: React.FC = (props) => {
  const navigate = useNavigate(); 
  
  return (
    <div className="card">
      <div className="title-card">ย่านเมืองเก่าสงขลา</div>
      <div className="card-image">
        <img alt="" src="./pictures/ย่านเมืองเก่าสงขลา.jpg" className="picture1"/>
      </div>
      <div className="heading">
          ย่านการค้าที่สำคัญในอดีตเป็นถนนที่ประกอบไปด้วยอาคารและสถาปัตยกรรมที่งดงามที่ยังคงเอกลักษณ์ดั้งเดิมเอาไว้
      <div className="see-more">
        <button onClick={() => navigate('/additional-information-days-tour')} >
          ดูเพิ่มเติม
        </button>
      </div>
      <div className="author">เหลือเพียง 1 ที่ เท่านั้น!!!</div>
      </div>
    </div>
  )
};

export default Card