import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import "./payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size > 2 * 1024 * 1024) {
      Swal.fire({
        icon: "error",
        title: "File size too large",
        text: "Please select a file that is smaller than 2MB",
      });
    } else {
      setSelectedFile(file);
    }
  };
  
  const handleImageUpload = async () => {
    if (!selectedFile) {
      Swal.fire({
        icon: "error",
        title: "No file selected",
        text: "Please select a file to upload",
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        navigate("/booking-history");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error uploading image",
          text: "Please try again later",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error uploading image",
        text: "Please try again later",
      });
    }
  };
  return (
    <div className="payment-container">
      <Navbar />
      <div className="payment-container04">
        <form className="payment-form08">
          <svg viewBox="0 0 877.7142857142857 1024" className="payment-icon12">
            <image
              xlinkHref="./pictures/whitecircle-removebg-preview.png"
              width="100%"
              height="100%"
            />
          </svg>
          <span className="payment-text01">ชำระเงิน</span>
        </form>
        <form className="payment-form10">
          <svg viewBox="0 0 877.7142857142857 1024" className="payment-icon16">
            <image
              xlinkHref="./pictures/whitecircle-removebg-preview.png"
              width="100%"
              height="100%"
            />
          </svg>
          <span className="payment-text02">ชำระเงินสำเร็จ</span>
        </form>
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
          <text className="promptpay">
            ธนาคารกสิกรไทย : หมายเลขบัญชี 141-x-xxxxx-0
          </text>
          <text className="promptpay">
            บัญชีที่โอนเงิน : พร้อมเพย์ 093-xxxxx7-0
          </text>
          <text className="promptpay">ชื่อบัญชี บริษัท Puffertour</text>
          <form onSubmit={handleImageUpload}>
            <div className="input-container">
              <label htmlFor="file-input" className="promptpay">
                แนบไฟล์สลิปการโอนเงิน
              </label>
              <input
                id="file-input"
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileSelect}
              />
            </div>
            {selectedFile && (
              <div className="limit-file">
                <text>[ ไฟล์ jpg, gif, png, pdf ไม่เกิน 2MB ]</text>
              </div>
            )}
            {!selectedFile && (
              <div className="limit-file">
                <text>[ กรุณาแนบไฟล์สลิปการโอนเงิน ]</text>
              </div>
            )}
            <button className="button" type="submit" disabled={!selectedFile}>
              ยืนยันการส่ง
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
