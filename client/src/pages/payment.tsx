import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Swal from 'sweetalert2';
import './payment.css'

const Payment: React.FC = (props) => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 2 * 1024 * 1024) {
        Swal.fire({
          title: 'File too large',
          text: 'Please select a file that is no more than 2 MB in size.',
          icon: 'error'
        })
        return;
      }
      const { value: file } = await Swal.fire({
        title: 'Select image',
        input: 'file',
        inputAttributes: {
          'accept': 'image/*',
          'aria-label': 'Upload your profile picture'
        }
      })
      if (file) {
        setFile(file);
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target && e.target.result) { // add null check
            Swal.fire({
              title: 'Your uploaded picture',
              imageUrl: e.target.result.toString(),
              imageAlt: 'The uploaded picture'
            })
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }  

  return (
    <div className="payment-container"> 
      <Navbar/>
      <div className="payment-container04">
        <form className="payment-form08">
          <svg viewBox="0 0 877.7142857142857 1024" className="payment-icon12">
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className="payment-text01">ชำระเงิน</span>
        </form>
        <form className="payment-form09">
          <svg viewBox="0 0 1024 1024" className="payment-icon14">
            <path d="M768 469.333h-512c-47.104 0-85.333 38.229-85.333 85.333s38.229 85.333 85.333 85.333h512c47.104 0 85.333-38.229 85.333-85.333s-38.229-85.333-85.333-85.333z"></path>
          </svg>
        </form>
        <form className="payment-form10">
          <svg viewBox="0 0 877.7142857142857 1024" className="payment-icon16">
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className="payment-text02">ชำระเงินสำเร็จ</span>
        </form>
      </div>
      <div className="payment-container05">
        <form className="payment-form11">
          <span className="payment-text03">กรุณาสแกนเพื่อชำระเงิน</span>
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
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
        <text className="promptpay">
          ชื่อบัญชี บริษัท Puffertour
        </text>
        <text className="promptpay">
        กรุณาแนบไฟล์สลิปการโอนเงิน
        </text>
          <input type="file" accept="image/*,.pdf" onChange={handleFileChange}/>
        <div className="limit-file"> 
            <text>[ ไฟล์ jpg,gif,png,pdf ไม่เกิน2MB ]</text>
        </div>
        <button className="button"> ยืนยันการส่ง </button>
      </div>
    </div>
    </div>
  )
}

export default Payment