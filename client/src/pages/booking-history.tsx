import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReserveStatus from "../models/Reserve";
import Repository from "../repositories";
import CardBooking from "../components/cardbooking";
import "./booking-history.css";

const Booking = () => {
    const [Booking, setBooking] = useState<ReserveStatus[]>([]);

    const fetchData = async () => {
      const res = await Repository.Paymentdata.getByUser();
      if(res) {
        setBooking(res)
      }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
                <div className="bookcontainer">
                    <div className="row">
                        {Booking.map((item) => (
                            <CardBooking BookingData={item} />
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default Booking;
