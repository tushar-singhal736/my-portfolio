import { act, fireEvent, render, screen } from '@testing-library/react';
import Contact from './Contact';

test('does not report success when the contact service rejects a message', async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: false });
  render(<Contact />);

  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  expect(screen.getByLabelText('Message')).toBeInTheDocument();

  await act(async () => {
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form'));
  });

  expect(screen.queryByText(/message sent/i)).not.toBeInTheDocument();
  expect(screen.getByRole('alert')).toHaveTextContent(/couldn't send/i);
});

test('reports success after the contact service accepts a message', async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: true });
  render(<Contact />);

  await act(async () => {
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form'));
  });

  expect(screen.getByRole('status')).toHaveTextContent(/message sent/i);
});
