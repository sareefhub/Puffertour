import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DayTour from '../pages/additional-information-days-tour';

describe('', () => {
  it('should display "โปรแกรมทัวร์"', () => {
    render(
      <MemoryRouter>
        <DayTour />
      </MemoryRouter>
    );
    expect(screen.getByText('โปรแกรมทัวร์')).toBeInTheDocument();
  });
  it('should display "สิ่งที่รวมในทัวร์"', () => {
    render(
      <MemoryRouter>
        <DayTour />
      </MemoryRouter>
    );
    expect(screen.getByText('สิ่งที่รวมในทัวร์')).toBeInTheDocument();
  });
  it('should display "จองทัวร์"', () => {
    render(
      <MemoryRouter>
        <DayTour />
      </MemoryRouter>
    );
    expect(screen.getByText('จองทัวร์')).toBeInTheDocument();
  });
  it('should display "จองเลย!"', () => {
    render(
      <MemoryRouter>
        <DayTour />
      </MemoryRouter>
    );
    expect(screen.getByText('จองเลย!')).toBeInTheDocument();
  });
  it('should display "รีวิว"', () => {
    render(
      <MemoryRouter>
        <DayTour />
      </MemoryRouter>
    );
    expect(screen.getByText('รีวิว')).toBeInTheDocument();
  });
});