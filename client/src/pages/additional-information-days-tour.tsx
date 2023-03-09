import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Picture from "../components/picture";
import OneDayTour from "../models/OneDay";
import { useState, useEffect } from "react";
import Repository from "../repositories";
import "./additional-information-days-tour.css";
import Swal from "sweetalert2";
import { getUserData } from "../helper";
import Payment from "../models/Payment";
import SeatRemaining from "../models/seatRemaining";
import ReviewData from "../models/Reviewdata";
import ReviewCard from "../components/Review";
import Review from "../models/Review";
import conf from "../conf";

const AdditionalInformationDaysTour = () => {

  const [DataTour, setDataTour] = useState<OneDayTour[]>([]);
  const [bookingDate, setBookingDate] = useState<Date | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewtext, setReviewtext] = useState<string>("");
  
  const navigate = useNavigate();
  const params = useParams();
  const user = getUserData();

  const fetchData = async () => {
    const result = await Repository.Tourdata.get(params.id as string);
    if (result) {
      setDataTour(result);
    }
  };
  const fetchReview = async () => {
    const rev = await Repository.ReviewData.getReview(tour_name);
    if (rev) {
      setReviews(rev);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  useEffect(() => {
    fetchReview();
  }, [reviews]);

  const tour = DataTour.length > 0 ? DataTour[0].attributes : null;
  const tourID = DataTour.length > 0 ? DataTour[0] : null;
  const tour_id = tourID?.id.toString() || 0;
  const tour_name = tour?.name as string;
  const total_price = tour?.price as number * quantity;
  const tour_seat = tour?.remaining as number
  const image = `https://s04x.coe.psu.ac.th${tour?.cover_image.data.attributes.formats.thumbnail.url}`

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

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ReviewText = event.target.value;
    setReviewtext(ReviewText);
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
      total_price: total_price,
      type: 'oneday',
      seat: tour_seat,
      image: image
    }
  }
  const newReview: ReviewData = {
    data : {
      user: user.username,
      tour_id: params.id as string,
      tour_name: tour_name as string,
      review: reviewtext,
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
      await Repository.Tourdata.updateSeat(tour_id as string, updateSeat)
      navigate("/payment");
    }
  };

  const handleReview = async () => {
    if (!user) {
      navigate('/login');
    } else {
      await Repository.ReviewData.createReview(newReview)
    }
  }

  return (
    <div className="information-days-tour-container">
      <Navbar />
      <Picture />
      <div className="payment-container04">
        <span className="payment-text01">{tour?.name}</span>
      </div>
      <div className="information-days-tour-container1">
        <div className="information-days-tour-container2">
          <h2>โปรแกรมทัวร์</h2>
          <div className="information-days-tour-container3">
            <p>{tour?.tour_program}</p>
          </div>
          <h2>สิ่งที่รวมในทัวร์</h2>
          <div className="information-days-tour-container6">
            <p>{tour?.service}</p>
          </div>
        </div>
        <div className="information-days-tour-container4">
          <h2>จองทัวร์</h2>
          <div className="information-days-tour-container5">
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
            <span className="Textt">ราคารวม {total_price} บาท</span>
            <button
              className="information-days-tour-navlink6 button"
              onClick={handleReservation}
            >
              <span className="information-days-tour-text18">
                <span>จองเลย!</span>
                <br />
                <br />
              </span>
            </button>
          </div>
          <h2>รีวิว</h2>
          <div className="information-days-tour-container7">
            <div>
              <form>
                  {reviews.map((item) => (
                  <ReviewCard ReviewData={item} />
                  ))}
                
                <div>
                  <div className="information-days-tour-container8">
                    <div className="information-days-tour-container9">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="information-days-tour-icon"
                      >
                        <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                      </svg>
                      <span className="information-days-tour-text">: </span>
                    </div>
                    <input
                      type="text"
                      className="information-days-tour-textinput input"
                      value={reviewtext}
                      onChange={handleTextChange}
                    />
                    <div className="plane" onClick={handleReview}>
                    <img src="/pictures/planeicon (2).png" alt="" />
                    </div>
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
export default AdditionalInformationDaysTour;
