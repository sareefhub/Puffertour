import React from 'react'
import { useNavigate,useParams } from "react-router-dom"
import Navbar from '../components/Navbar'
import Picture from '../components/picture'
import OneDayTour from "../models/OneDay"
import { useState, useEffect } from "react"
import Repository from '../repositories'
import Information from '../components/Informationtour'
import './additional-information-days-tour.css'

const AdditionalInformationDaysTour = () => {
  const [DataTour, setDataTour] = useState<OneDayTour[]>([])
  const navigate = useNavigate();
  const params = useParams();

  const fetchData = async () => {
    const result = await Repository.Tourdata.get(params.id as string);
    if(result) {
      setDataTour(result)
    }
  }

  useEffect(() => {
    fetchData()
  }, [params.id])

  const tour = DataTour.length > 0 ? DataTour[0].attributes : null;
  return (
    <div className="information-days-tour-container">
      <Navbar/>
      <Picture/>
      <div className="tap-bar">
        <span className="text-tour">{tour?.name}</span>
      </div>
        <div className="information-days-tour-form09">
          <a>โปรแกรมทัวร์{tour?.name}</a>
          <a>จองทัวร์</a>
        </div>
      <div className='information-days-tour-container01'>
        <Information>
          <a>{tour?.tour_program}</a>
        </Information>
            <Information>
              <a className='Text'>ราคา {tour?.price} บาท/คน</a>
              <button className="information-days-tour-navlink6 button" onClick={() => navigate("/payment")}>
                <span className="information-days-tour-text18">
                  <span>จองเลย!</span>
                  <br></br>
                  <br></br>
                </span>
              </button>
            </Information>
      </div>
      <div className="information-days-tour-form09">
          <a>สิ่งที่รวมในทัวร์{tour?.name}</a>
          <a>รีวิวจากลูกค้า</a>
      </div>
      <div className="information-days-tour-container01">
        <Information>
          <a>{tour?.service}</a>
        </Information>
        <Information>
        <form className="additional-information-days-tour-form18">
          <span className="information-days-tour-text36">
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
          <div className="information-days-tour-container11">
            <div className="information-days-tour-container12">
              <svg
                viewBox="0 0 1024 1024"
                className="information-days-tour-icon14"
              >
                <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
              <span className="information-days-tour-text44">
                : 
              </span>
            </div>
            <input
              type="text"
              className="information-days-tour-textinput input"
            />
          </div>
        </form>
        </Information>
      </div>
    </div>
  )
}
export default AdditionalInformationDaysTour