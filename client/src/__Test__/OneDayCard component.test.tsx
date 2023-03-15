import { render, screen } from '@testing-library/react';
import OneDayCard from '../components/OneDayCard';
import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
describe('OneDayCard', () => {
  const Daytour = {
  id: 1,
  attributes: {
    name: "หาดสมิหลา",
    description: 'ทดสอบคำอธิบาย',
    cover_image: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: "img",
            }
          }
        }
      }
    },
    tour_program: "program tour",
    service: "ทดสอบสิ่งที่ได้",
    price: 600,
    remaining: 2,
  }
};
  const props = {
    Tour: Daytour,
  };

  it("Should display tour program in description", () => {
    render(
      <BrowserRouter>
        <OneDayCard {...props} />
      </BrowserRouter>
    );
    const programtext = screen.getByText(/ทดสอบคำอธิบาย/i);
    expect(programtext).toBeInTheDocument();

  });

  it("Should display tour program in name", () => {
    render(
      <BrowserRouter>
        <OneDayCard {...props} />
      </BrowserRouter>
    );
    const nametext = screen.getByText(/หาดสมิหลา/i);
    expect(nametext).toBeInTheDocument();
  });

  it("Should display tour program in program", () => {
    render(
      <BrowserRouter>
        <OneDayCard {...props} />
      </BrowserRouter>
    );
    const nametext = screen.getByText(/2/i);
    expect(nametext).toBeInTheDocument();
  });

});
