import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReserveStatus from "../models/Reserve";
import { PaymentRepository } from "../repositories/PaymentRepository";
import SeatRemaining from "../models/seatRemaining";
import Packagetour from "../models/Package";
import { PackageRepository } from "../repositories/PackageRepository";

import "./booking-history.css";

const paymentRepository = new PaymentRepository();
const packageRepository = new PackageRepository();

const Booking: React.FC = () => {
  const [payments, setPayments] = useState<ReserveStatus[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [DataTour, setDataTour] = useState<Packagetour[]>([]);

  useEffect(() => {
    async function fetchPayments() {
      const paymentData = await paymentRepository.getByUser();
      if (paymentData) {
        setPayments(paymentData);
      }
    }
    fetchPayments();

    async function fetchPackage() {
      const packageData = await packageRepository.getAll();
      if (packageData) {
        setDataTour(packageData);
      }
    }
    fetchPackage();
  }, []);

  const tour = DataTour.length > 0 ? DataTour[0].attributes : null;
  const seatLeft = (tour?.remaining as number) + quantity;

  const updateSeat: SeatRemaining = {
    data: {
      remaining: seatLeft,
    },
  };

  const handleCancelBooking = async (
    bookingId: string | number,
    seatLeft: number
  ) => {
    try {
      await paymentRepository.deletePayment(bookingId);
      // filter out the cancelled payment from the payments array
      const updatedPayments = payments.filter(
        (payment) => payment.id !== bookingId
      );
      setPayments(updatedPayments);
      alert("Reservation cancelled successfully.");

      // update the seat remaining count
      const tourId = DataTour.length > 0 ? DataTour[0].id : null;
      if (tourId) {
        await packageRepository.updateSeat(tourId, updateSeat);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to cancel reservation.");
    }
  };

  return (
    <div className="bookcontainer">
      <Navbar />
      <div className="header">
        <h1>ประวัติการจอง</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>รายการ</th>
            <th>จำนวน</th>
            <th>ราคา</th>
            <th>สถานะ</th>
            <th>รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.attributes.tour_id}>
              <td>{payment.attributes.tour_name}</td>
              <td>{payment.attributes.quantity}</td>
              <td>{payment.attributes.total_price} บาท</td>
              <td>{payment.attributes.status}</td>
              <td>
                <button
                  className="button1"
                  onClick={() => {
                    handleCancelBooking(payment.id, seatLeft);
                  }}
                >
                  ยกเลิกการจอง
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
