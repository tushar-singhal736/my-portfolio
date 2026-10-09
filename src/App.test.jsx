import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio without an availability label', () => {
  render(<App />);

  expect(screen.getAllByText(/Tushar Singhal/i).length).toBeGreaterThan(0);
  expect(screen.queryByText(/Available for work/i)).not.toBeInTheDocument();
});
