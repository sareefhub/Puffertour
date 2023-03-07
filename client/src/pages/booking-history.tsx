import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReserveStatus from "../models/Reserve";
import { PaymentRepository } from "../repositories/PaymentRepository";

import "./booking-history.css";

const paymentRepository = new PaymentRepository();

const Booking: React.FC = () => {
  const [payments, setPayments] = useState<ReserveStatus[]>([]);

  useEffect(() => {
    async function fetchPayments() {
      const paymentData = await paymentRepository.getByUser();
      if (paymentData) {
        setPayments(paymentData);
      }
    }
    fetchPayments();
  }, []);

  const handleCancelBooking = (bookingId: string) => {
    // Implement cancel booking logic here
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
