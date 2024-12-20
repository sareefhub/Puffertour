import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PackageTour from '../pages/additional-information-package-tour';

describe('', () => {
  it('should display "โปรแกรมทัวร์"', () => {
    render(
      <MemoryRouter>
        <PackageTour />
      </MemoryRouter>
    );
    expect(screen.getByText('โปรแกรมทัวร์')).toBeInTheDocument();
  });
  it('should display "สิ่งที่รวมในทัวร์"', () => {
    render(
      <MemoryRouter>
        <PackageTour />
      </MemoryRouter>
    );
    expect(screen.getByText('สิ่งที่รวมในทัวร์')).toBeInTheDocument();
  });
  it('should display "จองทัวร์"', () => {
    render(
      <MemoryRouter>
        <PackageTour />
      </MemoryRouter>
    );
    expect(screen.getByText('จองทัวร์')).toBeInTheDocument();
  });
  it('should display "จองเลย!"', () => {
    render(
      <MemoryRouter>
        <PackageTour />
      </MemoryRouter>
    );
    expect(screen.getByText('จองเลย!')).toBeInTheDocument();
  });
  it('should display "รีวิว"', () => {
    render(
      <MemoryRouter>
        <PackageTour />
      </MemoryRouter>
    );
    expect(screen.getByText('รีวิว')).toBeInTheDocument();
  });
});