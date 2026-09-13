import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio with professional identity and availability', () => {
  render(<App />);

  expect(screen.getAllByText(/Tushar Singhal/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Available for work/i).length).toBeGreaterThan(0);
});
