import React from 'react'
import { useNavigate,useParams } from "react-router-dom"
import Navbar from '../components/Navbar'
import Picture from '../components/picture'
import Packagetour from '../models/Package'
import { useState, useEffect } from "react"
import Repository from '../repositories'

import './additional-information-package-tour.css'

const AdditionalInformationPackageTour = () => {
  const [DataTour, setDataTour] = useState<Packagetour[]>([])
  const navigate = useNavigate();
  const params = useParams();

  const fetchData = async () => {
    try {
        const result = await Repository.Packagedata.get(params.id as string);
        if(result) {
          setDataTour(result)
        }
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    fetchData()
}, [params.id])

  const tour = DataTour.length > 0 ? DataTour[0].attributes : null;
  return (
    <div className="additional-information-package-tour-container">
      <Navbar/>
      <Picture/>
        <div className="additional-information-package-tour-container06">
          <form className="additional-information-package-tour-form08">
            <span className="additional-information-package-tour-text02">
              {tour?.name}
            </span>
          </form>
        </div>
        <div className="additional-information-package-tour-container07">
          <form className="additional-information-package-tour-form09">
            <span className="additional-information-package-tour-text03">
              โปรแกรมทัวร์{tour?.name}
            </span>
          </form>
          <form className="additional-information-package-tour-form10">
            <span className="additional-information-package-tour-text04">
              จองทัวร์
            </span>
          </form>
        </div>
        <div className="additional-information-package-tour-container08">
          <div className="additional-information-package-tour-container09">
            <form className="additional-information-package-tour-form11">
              <p className="additional-information-package-tour-text05">
              {tour?.tour_program}
              </p>
            </form>
          </div>
          <div className="additional-information-package-tour-container10">
            <div className="additional-information-package-tour-container11">
              <div className="additional-information-package-tour-container12">
                <div className="additional-information-package-tour-container13">
                  <div className="additional-information-package-tour-container14">
                    <form className="additional-information-package-tour-form12">
                      <span className="additional-information-package-tour-text34">
                        ราคา {tour?.price} บาท/คน
                      </span>
                    </form>
                    <form className="additional-information-package-tour-form13">
                      <button className="additional-information-package-tour-navlink6 button">
                        <span className="additional-information-package-tour-text37">
                          <span>จองเลย!</span>
                          <br></br>
                          <br></br>
                        </span>
                      </button>
                    </form>
                  </div>
                  <div className="additional-information-package-tour-container15">
                    <form className="additional-information-package-tour-form14">
                      <span className="additional-information-package-tour-text41">
                      สิ่งที่รวมในทัวร์{tour?.name}
                      </span>
                    </form>
                  </div>
                </div>
                <div className="additional-information-package-tour-container16">
                  <span className="additional-information-package-tour-text42">
                    {tour?.service}
                  </span>
                </div>
              </div>
              <div className="additional-information-package-tour-container17">
                <span className="additional-information-package-tour-text54">
                  รีวิวจากลูกค้า
                </span>
              </div>
            </div>
            <div className="additional-information-package-tour-container18">
              <span className="additional-information-package-tour-text55">
                <span>
                  คุณ Sola : ไกด์นำทัวร์ดีมากเลยครับ ไว้จะมาใช้บริการอีกนะครับ
                </span>
                <br></br>
                <span>
                  คุณ Warunyu : สนุกๆสุดเลยครับ คุ้มค่ากับเงินที่เสียไปจริงๆ!
                </span>
                <br></br>
                <span>
                  คุณ Navaphon : สถานที่ท่องเที่ยวสวยมากเลยครับ
                  ไว้วันหลังจะมาอีก
                </span>
                <br></br>
                <span>คุณ Sareef : ดีมากครับ</span>
              </span>
              <div className="additional-information-package-tour-container19">
                <div className="additional-information-package-tour-container20">
                  <div className="additional-information-package-tour-container21">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="additional-information-package-tour-icon14"
                    >
                      <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
              <span className="additional-information-days-tour-text44">
                : 
              </span>
            </div>
                  <input
                    type="text"
                    className="additional-information-package-tour-textinput input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  )
}


export default AdditionalInformationPackageTour
