import React from 'react'
import Navbar from '../components/Navbar'
import Picture from '../components/picture'

import './about-us.css'

const AboutUs:React.FC = (props) => {
  return (
    <div className="about-us-container">
      <Navbar/>
      <Picture/>
      <div className="payment-container04">
        <span className="payment-text01">ติดต่อเรา</span>
      </div>
      <div className="about-us-container06">
        <div className="about-us-container07">
          <div className="about-us-container08">
            <img
              alt=""
              src="./pictures/iconFacebook.png"
              className="about-us-image5"
            />
            <span className="about-us-text03">: Puffer Tour Official</span>
          </div>
          <div className="about-us-container09">
            <img
              alt=""
              src="./pictures/iconInstagram.png"
              className="about-us-image6"
            />
            <span className="about-us-text04">: Puffer Tour Official</span>
          </div>
          <div className="about-us-container10">
            <span className="about-us-text05">: Puffer Tour Official</span>
            <img
              alt=""
              src="./pictures/iconTwitter .png"
              className="about-us-image7"
            />
          </div>
        </div>
        <form className="about-us-form09">
          <span className="about-us-text06">
            <span>
                   บริษัท Puffer tour เป็นบริษัทท่องเที่ยว
              ดําเนินธุรกิจโดยคนในท้องถิ่นที่คุณสามารถมั่นใจได้ ว่าคุณจะ
              ได้ชื่นชมสงขลา
              อย่างแท้จริงเราบริการลูกค้าด้วยความประทับใจเราสัญญาว่าจะรักษา
              บริการของเราได้ดียิ่งขึ้น เพราะคุณคือครอบครัวของเรา
            </span>
            <br></br>
            <br></br>
            <span>
                 
               ประกันภัยอุบัติเหตุการเดินทางสําหรับธุรกิจนําเที่ยวและมัคคุเทศก์
              บริษัท Puffer tour ได้ให้
            </span>
            <span>
              ความใส่ใจในเรื่องความปลอดภัยในการเดินทางของลูกค้าทุกท่านเราได้ทําประกันภัยอุบัติเหตุสําหรับ
              ธุรกิจนําเที่ยวและมัคคุเทศก์ กรมธรรม์เลขที่ 0222455485
              ทุนประกันภัยค่ารักษาพยาบาลต่อครั้ง 500,000 บาท กรณีเสียชีวิต 1,000,000 บาท
            </span>
          </span>
        </form>
      </div>
    </div>
  )
}

export default AboutUs