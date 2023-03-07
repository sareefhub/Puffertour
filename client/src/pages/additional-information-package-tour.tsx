import React, {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Picture from "../components/picture";
import Packagetour from "../models/Package";
import { useState } from "react";
import Repository from "../repositories";
import "./additional-information-package-tour.css";
import Swal from "sweetalert2";
import { getUserData } from "../helper";
import Payment from "../models/Payment";
import SeatRemaining from "../models/seatRemaining";

const AdditionalInformationPackageTour = () => {
  const [DataTour, setDataTour] = useState<Packagetour[]>([]);
  const [bookingDate, setBookingDate] = useState<Date | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const navigate = useNavigate();
  const params = useParams();
  const user = getUserData();

  const fetchData = async () => {
    const result = await Repository.Packagedata.get(params.id as string);
    if (result) {
      setDataTour(result);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const tour = DataTour.length > 0 ? DataTour[0].attributes : null;
  const tourID = DataTour.length > 0 ? DataTour[0] : null;
  const tour_id = tourID?.id.toString() || 0;
  const tour_name = tour?.name;
  const total_price = tour?.price as number * quantity;

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const Datebooking = new Date(event.target.value);
    setBookingDate(Datebooking);
  };

  const handleNumPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const NumPeople = Number(event.target.value)
    const remainingSeats = tour?.remaining as number;
    if (NumPeople <= remainingSeats) {
      setQuantity(NumPeople);
    }
  };
  
  const seatLeft = tour?.remaining as number - quantity

  const updateSeat : SeatRemaining = {
    data : {
        remaining: seatLeft
    }
  }

  const newPayment: Payment = {
    data : {
      status: 'Unpaid',
      tour_id: params.id as string,
      tour_name: tour_name as string,
      tour_start: bookingDate,
      user: user.username,
      quantity: quantity,
      total_price: total_price
    }
  }

  const handleReservation = async () => {
    if (!user) {
      navigate('/login');
    } else if (!bookingDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "กรุณาระบุวันเดินทางให้เรียบร้อยด้วยครับ",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "จองสำเร็จ",
        text: "กรุณาชำระเงินด้วยครับ",
      })
      await Repository.Paymentdata.createPayment(newPayment)
      await Repository.Packagedata.updateSeat(tour_id as string, updateSeat)
      navigate("/payment");
    }
  };
  return (
    <div className="information-package-tour-container">
      <Navbar />
      <Picture />
      <div className="tap-bar">
        <span className="text-tour">{tour?.name}</span>
      </div>
      <div className="information-package-tour-container1">
        <div className="information-package-tour-container2">
          <h2>โปรแกรมทัวร์{tour?.name}</h2>
          <div className="information-package-tour-container3">
            <p>{tour?.tour_program}</p>
          </div>
        </div>
        <div className="information-package-tour-container4">
        <h2>สิ่งที่รวมในทัวร์{tour?.name}</h2>
          <div className="information-package-tour-container6">
            <p>{tour?.service}</p>
          </div>
          <h2>จองทัวร์</h2>
          <div className="information-package-tour-container5">
          <span className="Text">ราคา {tour?.price} บาท/คน</span>
          <form>
            <label htmlFor="Tourday" className="Tourday">
              วันเดินทาง:
            </label>
            <input
              type="date"
              id="tourstart"
              name="tourstart"
              className="date-input"
              value={bookingDate?.toISOString().slice(0, 10)}
              onChange={handleDateChange}
              min={new Date().toISOString().slice(0, 10)}
            />
            </form>
            <label htmlFor="numPeople" className="Tourday">
              จำนวนผู้เข้าร่วมทัวร์:
            </label>
            <input
              type="number"
              id="numPeople"
              name="numPeople"
              className="input"
              value={quantity}
              onChange={handleNumPeopleChange}
              min={1}
            />
            <span className="Text2">ราคารวม {total_price} บาท</span>
            <button
              className="information-package-tour-navlink6 button"
              onClick={handleReservation}
            >
              <span className="information-package-tour-text18">
                <span>จองเลย!</span>
                <br />
                <br />
              </span>
            </button>
          </div>
          <h2>รีวิวจากลูกค้า</h2>
          <div className="information-package-tour-container7">
            <div>
              <form>
                <span>
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
                <div>
                  <div className="information-package-tour-container8">
                    <div className="information-package-tour-container9">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="information-package-tour-icon"
                      >
                        <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                      </svg>
                      <span className="information-package-tour-text">: </span>
                    </div>
                    <input
                      type="text"
                      className="information-package-tour-textinput input"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformationPackageTour;
