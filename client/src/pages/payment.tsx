import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import "./payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  return (
    <div className="payment-container">
      <Navbar />
      <div className="payment-container04">
        <span className="payment-text01">แจ้งชำระเงิน</span>
      </div>
      <div className="payment-container05">
        <form className="payment-form11">
          <span className="payment-text03">กรุณาสแกนเพื่อชำระเงิน</span>
          <img
            alt=""
            src="./pictures/qrcode.png"
            className="payment-image2"
          />
        </form>
        <div className="payment-container06">
          <h1 className="payment-text04">
            <text>รายละเอียดการโอนเงิน</text>
          </h1>
          <text className="promptpay">ธนาคารกสิกรไทย : หมายเลขบัญชี 141-x-xxxxx-0</text>
          <text className="promptpay">บัญชีที่โอนเงิน : พร้อมเพย์ 093-xxxxx7-0</text>
          <text className="promptpay">ชื่อบัญชี บริษัท Puffertour</text>
          <text className="promptpay">แจ้งการชำระเงินผ่านไลน์</text>
          <img src="/pictures/QRcodeline.jpg" className="img-QRline"/>
        </div>
      </div>
    </div>
  );
};

export default Payment;
