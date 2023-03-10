import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Picture from "../components/picture";

describe("Picture component", () => {
  it("renders without crashing", () => {
    render(<Picture />);
  });

  it("displays the first image on initial render", () => {
    const { getByAltText } = render(<Picture />);
  });

  it("displays the next image when clicking the right arrow", () => {
    const { getByTestId, getByAltText } = render(<Picture />);
  });
  
  it("displays the previous image when clicking the left arrow", () => {
    const { getByTestId, getByAltText } = render(<Picture />);
  });
});
