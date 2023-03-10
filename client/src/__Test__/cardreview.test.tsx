import React from "react";
import { render, screen } from "@testing-library/react";
import ReviewCard from "../components/Review";

describe("CardReview component", () => {
  const Review = {
    id : 3,
    attributes: {
        tour_name: "พิพิธภัณฑ์สถานแห่งชาติสงขลา",
        tour_id: "2",
        review: "Test review",
        user: "testuser",
    }
}

  const props = {
    ReviewData: Review,
  };

  it("Should have reviewtext in CardReview", () => {
    render(<ReviewCard {...props} />);
    const reviewtext = screen.getByText(/Test review/i);
    expect(reviewtext).toBeInTheDocument();
  });
  it("Should have username in CardReview", () => {
    render(<ReviewCard {...props} />);
    const username = screen.getByText(/testuser/i);
    expect(username).toBeInTheDocument();
  });
});