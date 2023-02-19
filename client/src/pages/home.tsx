import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css'

const Homepage: React.FC = (props) => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
          <title>
            <title>Home - Puffer Tour v.1</title>
            <meta property="og:title" content="Home - Puffer Tour v.1" />
          </title>
          <div className="home-top-container">
            <div className="home-container01">
              <header data-role="Header" className="home-header">
                <div className="home-container02"></div>
                <form className="home-form">
                  <img
                    alt=""
                    src="./pictures/logo.png"
                    className="home-image"
                  />
                  <span className="home-text">Puffertour</span>
                </form>
                <div className="home-nav"></div>
                <div data-role="BurgerMenu" className="home-burger-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <div data-role="MobileMenu" className="home-mobile-menu">
                  <div className="home-nav1">
                    <div className="home-container03">
                      <div data-role="CloseMobileMenu" className="home-menu-close">
                        <svg viewBox="0 0 1024 1024" className="home-icon02">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon04"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon08"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
                <form className="home-form01">
                  <form className="home-form02">
                    <text className="home-navlink">
                      หน้าแรก
                    </text>
                  </form>
                  <form className="home-form03">
                    <text className="home-navlink1">
                      ทัวร์รายวัน
                    </text>
                  </form>
                  <form className="home-form04">
                    <text className="home-navlink2">
                      แพ็คเกจทัวร์
                    </text>
                  </form>
                  <form className="home-form05">
                    <text className="home-navlink3">
                      วิธีการจอง
                    </text>
                  </form>
                  <form className="home-form06">
                    <text className="home-navlink4">
                      แจ้งชำระเงิน
                    </text>
                  </form>
                  <form className="home-form07">
                    <span className="home-text01">เกี่ยวกับเรา</span>
                  </form>
                </form>
                <div className="home-btn-group">
                  <button className="home-navlink5 button">
                    เข้าสู่ระบบ
                  </button>
                </div>
              </header>
            </div>
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
                <button className="home-navlink6 button">
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
                <img
                  alt=""
                  src="/pictures/นางเงือก.jpg"
                  className="home-image07"
                />
                <span className="home-text12">
                  หาดสมิหลาเป็นหาดทรายขาวละเอียดมากที่เรียกว่า &quot;ทรายแก้ว&quot;
                  มีป่าสนร่มรื่นสามารถมองเห็นทิวทัศน์อันงดงามของ เกาะหนูเกาะแมว
                  ดูข้อมูลเพิ่มเติม
                </span>
                <button className="home-button1 button">ดูเพิ่มเติม</button>
                <span className="home-text13">เต็ม!!!</span>
              </form>
            </form>
            <div className="home-container06">
              <div className="home-container07">
                <div className="home-container08"></div>
              </div>
            </div>
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
                <button
                  className="home-navlink7 button"
                >
                  ดูเพิ่มเติม
                </button>
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
          </div>
          <div className="home-footer"></div>
        </div>
      )
    }
    
    export default Homepage