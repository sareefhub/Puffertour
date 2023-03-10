import React from "react";
import { render, screen } from "@testing-library/react";
import CardBooking from "../components/cardbooking";

describe("CardBooking component", () => {
  const bookingData = {
    id: 1,
    attributes: {
      tour_name: "รายการ ทัวร์Sample Tour",
      tour_id: 1,
      tour_start: new Date(Date.now()),
      status: "สถานะ booked",
      user: "test",
      quantity: 2,
      total_price: 2000,
      seat: 1,
      type: "one day trip",
      image: "test",
    },
  };

  const props = {
    BookingData: bookingData,
  };

  it("should have title in cardbooking", () => {
    render(<CardBooking {...props} />);
    const title = screen.getByText(/รายการ ทัวร์Sample Tour/i);
    expect(title).toBeInTheDocument();
  });
  it("should have quantity in cardbooking", () => {
    render(<CardBooking {...props} />);
    const quantity = screen.getByText(/จำนวน 2 คน/i);
    expect(quantity).toBeInTheDocument();
  });
  it("should have total_price in cardbooking", () => {
    render(<CardBooking {...props} />);
    const total_price = screen.getByText(/ราคาทั้งหมด 2000 บาท/i);
    expect(total_price).toBeInTheDocument();
  });
  it("should have status in cardbooking", () => {
    render(<CardBooking {...props} />);
    const status = screen.getByText(/สถานะ booked/i);
    expect(status).toBeInTheDocument();
  });  it("should have ยกเลิกการจอง buuton in cardbooking", () => {
    render(<CardBooking {...props} />);
    const status = screen.getByText(/ยกเลิกการจอง/i);
    expect(status).toBeInTheDocument();
  });
});
