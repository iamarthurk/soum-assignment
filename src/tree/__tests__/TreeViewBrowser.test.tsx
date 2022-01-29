import React from 'react';
import { render, screen } from '@testing-library/react';
import TreeViewBroswer from '../TreeViewBroswer';
import data from '../../data.json';

test('renders title prop content', () => {
  render(
    <TreeViewBroswer
      fieldHierarchy={data.fieldHierarchy}
      products={data.products}
    />,
  );
  const textElement = screen.getByText(/Mobile Phones/i);
  expect(textElement).toBeInTheDocument();
});
