import React from 'react'
import { useNavigate } from "react-router-dom";

import './additional-information-package-tour.css'

const AdditionalInformationPackageTour: React.FC = (props) => {
    const navigate = useNavigate();
    
  return (
    <div className="additional-information-package-tour-container">
      <title>
        <title>Additional-information-PackageTour - Puffer Tour v.1</title>
        <meta
          property="og:title"
          content="Additional-information-PackageTour - Puffer Tour v.1"
        />
      </title>
      <div className="additional-information-package-tour-container01">
        <div className="additional-information-package-tour-container02">
          <header
            data-role="Header"
            className="additional-information-package-tour-header"
          >
            <div className="additional-information-package-tour-container03"></div>
            <form className="additional-information-package-tour-form">
              <img
                alt=""
                src="/playground_assets/logo-200h.png"
                className="additional-information-package-tour-image"
              />
              <span className="additional-information-package-tour-text">
                Puffertour
              </span>
            </form>
            <div className="additional-information-package-tour-nav"></div>
            <div
              data-role="BurgerMenu"
              className="additional-information-package-tour-burger-menu"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="additional-information-package-tour-icon"
              >
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-role="MobileMenu"
              className="additional-information-package-tour-mobile-menu"
            >
              <div className="additional-information-package-tour-nav1">
                <div className="additional-information-package-tour-container04">
                  <img
                    alt=""
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="additional-information-package-tour-image1"
                  />
                  <div
                    data-role="CloseMobileMenu"
                    className="additional-information-package-tour-menu-close"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="additional-information-package-tour-icon02"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="additional-information-package-tour-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="additional-information-package-tour-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="additional-information-package-tour-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
            <form className="additional-information-package-tour-form01">
              <form className="additional-information-package-tour-form02">
                <button onClick={() => navigate('/home')}className="additional-information-package-tour-navlink">
                  หน้าแรก
                </button>
              </form>
              <form className="additional-information-package-tour-form03">
                <text onClick={() => navigate('/days-tour')}
                  className="additional-information-package-tour-navlink1"
                >
                  ทัวร์รายวัน
                </text>
              </form>
              <form className="additional-information-package-tour-form04">
                <text onClick={() => navigate('/package-tour')}
                  className="additional-information-package-tour-navlink2"
                >
                  แพ็คเกจทัวร์
                </text>
              </form>
              <form className="additional-information-package-tour-form05">
                <text onClick={() => navigate('/how-to-book')}
                  className="additional-information-package-tour-navlink3"
                >
                  วิธีการจอง
                </text>
              </form>
              <form className="additional-information-package-tour-form06">
                <text onClick={() => navigate('/payment')}
                  className="additional-information-package-tour-navlink4"
                >
                  แจ้งชำระเงิน
                </text>
              </form>
              <form className="additional-information-package-tour-form07">
                <span className="additional-information-package-tour-text01">
                  เกี่ยวกับเรา
                </span>
              </form>
            </form>
            <div className="additional-information-package-tour-btn-group">
              <text onClick={() => navigate('/register')}
                className="additional-information-package-tour-navlink5 button"
              >
                เข้าสู่ระบบ
              </text>
            </div>
          </header>
        </div>
        <div className="additional-information-package-tour-container05">
          <img
            alt=""
            src="https://www.touronthai.com/gallery/photo/74000016/khoyor12.jpg"
            className="additional-information-package-tour-image2"
          />
          <svg
            viewBox="0 0 1024 1024"
            className="additional-information-package-tour-icon10"
          >
            <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
          </svg>
          <img
            alt=""
            src="/playground_assets/maxresdefault-300h.jpg"
            className="additional-information-package-tour-image3"
          />
          <svg
            viewBox="0 0 1024 1024"
            className="additional-information-package-tour-icon12"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
          <img
            alt=""
            src="https://s359.thaibuffer.com/pagebuilder/81d0f802-5715-4950-8bb2-7896ce7a3059.jpg"
            className="additional-information-package-tour-image4"
          />
        </div>
        <div className="additional-information-package-tour-container06">
          <form className="additional-information-package-tour-form08">
            <span className="additional-information-package-tour-text02">
              แพ็คเกจ พักหรูทัวร์สงขลา 2 วัน 1 คืน
            </span>
          </form>
        </div>
        <div className="additional-information-package-tour-container07">
          <form className="additional-information-package-tour-form09">
            <span className="additional-information-package-tour-text03">
              โปรแกรมทัวร์ย่านเมืองเก่าสงขลา
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
              <span className="additional-information-package-tour-text05">
                <span>
                  วันที่ 1
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  บริการรับท่านจาก บขส.สงขลา ตำบลบ่อยาง อำเภอเมืองสงขลา
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  9.30 น. นำท่านสู่หาดสมิหลา
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  10.30น. พาชมรอบหอด
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  12.00น. พักรับประทานอาหาร
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  13.30น. พาขึ้นเรือชมเกาะหนูเกาะแมว
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  16.30น. เดินทางกลับที่พัก โดยสวัสดิภาพ
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  วันที่ 2
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  7.00น. รับประทานอาหาร
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  8.30น. รถรับส่งไปย่านเมืองเก่า
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  9.00น. พาชมรอบๆย่านเมืองเก่า
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  12.00น. รับประทานอาหาร
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  13.30น. เดินทางพากลับที่พัก ส่งกลับที่พัก
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>14.30น. รถรอรับส่งไปบขส. ตำบลบ่อยาง อำเภอเมืองสงขลา</span>
              </span>
            </form>
          </div>
          <div className="additional-information-package-tour-container10">
            <div className="additional-information-package-tour-container11">
              <div className="additional-information-package-tour-container12">
                <div className="additional-information-package-tour-container13">
                  <div className="additional-information-package-tour-container14">
                    <form className="additional-information-package-tour-form12">
                      <h1 className="additional-information-package-tour-text34">
                        ราคาเริ่มต้น
                      </h1>
                      <span className="additional-information-package-tour-text35">
                        บาท/คน
                      </span>
                      <h1>2,500</h1>
                    </form>
                    <form className="additional-information-package-tour-form13">
                      <button
                        className="additional-information-package-tour-navlink6 button"
                      >
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
                        สิ่งที่รวมในทัวร์ย่านเมืองเก่าสงขลา
                      </span>
                    </form>
                  </div>
                </div>
                <div className="additional-information-package-tour-container16">
                  <span className="additional-information-package-tour-text42">
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
                    <span className="additional-information-package-tour-text63">
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
    </div>
  )
}

export default AdditionalInformationPackageTour
