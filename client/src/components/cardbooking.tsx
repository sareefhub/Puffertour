import Booking from "../models/Reserve";
import Repository from '../repositories'
import seatRemaining from "../models/seatRemaining";
import "./cardbooking.css"

interface Props {
    BookingData: Booking,
}

function CardBooking(props: Props) {
    const BookingData = props.BookingData ? props.BookingData.attributes : null;
    const tourId = BookingData?.tour_id as string | number;
    const tour_name = BookingData?.tour_name as string
    const quantity = BookingData?.quantity as number
    const total_price = BookingData?.total_price as number
    const status = BookingData?.status as string
    const seat = BookingData?.seat as number
    
    const updateseat: seatRemaining = {
        data: {
            remaining: seat
        }
    }

    const Delete = async () => {
            await Repository.Paymentdata.deletePayment(props.BookingData.id);
            if (props.BookingData.attributes.type === 'oneday') {
                await Repository.Tourdata.updateSeat(tourId, updateseat);
            }
            else{
                await Repository.Packagedata.updateSeat(tourId, updateseat);
            }
            window.location.reload();
        }
    
    return (
        <div className="card">
            <div className="title-card"> รายการ {tour_name} </div>
                <div className="heading"> จำนวน {quantity} คน
                <div className="heading"> ราคาทั้งหมด {total_price} บาท
                <div className="heading"> สถานะ {status} 
                <div className="delete">
                        <button
                            type="submit"
                            onClick={() => {
                                Delete();
                              }}
                            >
                            ยกเลิกการจอง
                        </button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default CardBooking;

