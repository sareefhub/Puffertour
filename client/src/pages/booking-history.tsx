import React from "react";
import Navbar from "../components/Navbar";

import "./booking-history.css";

const Booking: React.FC = (props) => {
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
          <tr>
            <td>ย่านเมืองเก่าสงขลา</td>
            <td>5/10</td>
            <td>500 บาท</td>
            <td>ยังไม่ชำระ</td>
            <td>ชำระเงิน</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
