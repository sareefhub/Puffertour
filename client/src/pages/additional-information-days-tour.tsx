import React from 'react'
import { useNavigate } from "react-router-dom";

import Navbar from '../components/Navbar';
import Picture from '../components/picture';

import './additional-information-days-tour.css'

const AdditionalInformationDaysTour: React.FC = (props) => {
    const navigate = useNavigate();

  return (
    <div className="additional-information-days-tour-container">
      <Navbar/>
      <Picture/>
      <div className="additional-information-days-tour-container05">
        <form className="additional-information-days-tour-form08">
          <span className="additional-information-days-tour-text02">
            ย่านเมืองเก่าสงขลา
          </span>
        </form>
      </div>
      <div className="additional-information-days-tour-container06">
        <form className="additional-information-days-tour-form09">
          <span className="additional-information-days-tour-text03">
            โปรแกรมทัวร์ย่านเมืองเก่าสงขลา
          </span>
        </form>
        <form className="additional-information-days-tour-form10">
          <span className="additional-information-days-tour-text04">
            จองทัวร์
          </span>
        </form>
      </div>
      <div className="additional-information-days-tour-container07">
        <form className="additional-information-days-tour-form11">
          <span className="additional-information-days-tour-text05">
            <span>
              08.30 น. รถรับท่านเดินทาง สู่ย่านเมืองเก่าสงขลา
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              09.00 น. พาชมเมืองเก่าสงขลา
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              12.00 น. พักรับประทานอาหารเที่ยงบนเกาะ
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              13.30 น. พาชมเมืองเก่าสงขลาต่อ
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              14.00 น. ส่งท่านกลับที่พักโดยสวัสดิภาพ สิ้นสุด one day trip
              ย่านเมืองเก่าสงขลา
            </span>
          </span>
        </form>
        <div className="additional-information-days-tour-container08">
          <form className="additional-information-days-tour-form12">
            <form className="additional-information-days-tour-form13">
              <span className="additional-information-days-tour-text15">
                ราคา 500 บาท/คน
              </span>
            </form>
            <form className="additional-information-days-tour-form14">
              <button className="additional-information-days-tour-navlink6 button">
                <span className="additional-information-days-tour-text18">
                  <span>จองเลย!</span>
                  <br></br>
                  <br></br>
                </span>
              </button>
            </form>
          </form>
        </div>
      </div>
      <div className="additional-information-days-tour-container09">
        <form className="additional-information-days-tour-form15">
          <span className="additional-information-days-tour-text22">
            สิ่งที่รวมในทัวร์ย่านเมืองเก่าสงขลา
          </span>
        </form>
        <form className="additional-information-days-tour-form16">
          <span className="additional-information-days-tour-text23">
            รีวิวจากลูกค้า
          </span>
        </form>
      </div>
      <div className="additional-information-days-tour-container10">
        <form className="additional-information-days-tour-form17">
          <span className="additional-information-days-tour-text24">
            <span>
              - รถรับ - ส่ง
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>- ผลไม้ , เกาลัดเจ๊จู</span>
            <br></br>
            <span>- ประกันภัยนักท่องเที่ยว</span>
            <br></br>
            <span>- อาหารกลางวันแบบปิกนิค</span>
            <br></br>
            <span>- มัคคุเทศก์ชำนาญงาน</span>
            <br></br>
            <span>- น้ำดื่ม , น้ำแข็ง</span>
          </span>
        </form>
        <form className="additional-information-days-tour-form18">
          <span className="additional-information-days-tour-text36">
            <span>
              คุณ Sola : ไกด์นำทัวร์ดีมากเลยครับ ไว้จะมาใช้บริการอีกนะครับ
            </span>
            <br></br>
            <span>
              คุณ Warunyu : สนุกๆสุดเลยครับ คุ้มค่ากับเงินที่เสียไปจริงๆ!
            </span>
            <br></br>
            <span>
              คุณ Navaphon : สถานที่ท่องเที่ยวสวยมากเลยครับ ไว้วันหลังจะมาอีก
            </span>
            <br></br>
            <span>คุณ Sareef : ดีมากครับ</span>
          </span>
          <div className="additional-information-days-tour-container11">
            <div className="additional-information-days-tour-container12">
              <svg
                viewBox="0 0 1024 1024"
                className="additional-information-days-tour-icon14"
              >
                <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
              <span className="additional-information-days-tour-text44">
                : 
              </span>
            </div>
            <input
              type="text"
              className="additional-information-days-tour-textinput input"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
export default AdditionalInformationDaysTour