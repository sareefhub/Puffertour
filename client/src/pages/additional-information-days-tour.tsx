import React from 'react'
import { useNavigate,useParams } from "react-router-dom"
import Navbar from '../components/Navbar'
import Picture from '../components/picture'
import OneDayTour from "../models/OneDay"
import { useState, useEffect } from "react"
import Repository from '../repositories'

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
    <div className="additional-information-days-tour-container">
      <Navbar/>
      <Picture/>
      <div className="additional-information-days-tour-container05">
        <form className="additional-information-days-tour-form08">
          <span className="additional-information-days-tour-text02">
            {tour?.name}
          </span>
        </form>
      </div>
      <div className="additional-information-days-tour-container06">
        <form className="additional-information-days-tour-form09">
          <span className="additional-information-days-tour-text03">
            โปรแกรมทัวร์{tour?.name}
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
          <p className="additional-information-days-tour-text05">
            {tour?.tour_program}
          </p>
        </form>
        <div className="additional-information-days-tour-container08">
          <form className="additional-information-days-tour-form12">
            <form className="additional-information-days-tour-form13">
              <span className="additional-information-days-tour-text15">
                ราคา {tour?.price} บาท/คน
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
            สิ่งที่รวมในทัวร์{tour?.name}
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
            {tour?.service}
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