import React from 'react';
import { render, screen } from '@testing-library/react';
import TreeItemDefault from '../TreeItemDefault';

test('renders title prop content', () => {
  render(<TreeItemDefault level={0} title="Hello World!" />);
  const textElement = screen.getByText(/Hello World!/i);
  expect(textElement).toBeInTheDocument();
});
