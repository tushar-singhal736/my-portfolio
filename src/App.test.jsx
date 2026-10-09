import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio without an availability label', () => {
  render(<App />);

  expect(screen.getAllByText(/Tushar Singhal/i).length).toBeGreaterThan(0);
  expect(screen.queryByText(/Available for work/i)).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /SuperNova - E-Commerce/i })).toHaveAttribute(
    'href',
    'https://github.com/tushar-singhal736/E-commerce-website'
  );
  expect(screen.getByRole('link', { name: /Quizz - CS Quiz Platform/i })).toHaveAttribute(
    'href',
    'https://github.com/tushar-singhal736/quiz-app'
  );
});
