import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mobile Phones text', () => {
  render(<App />);
  const textElement = screen.getByText(/Mobile Phones/i);
  expect(textElement).toBeInTheDocument();
});
