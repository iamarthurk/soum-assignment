import React from 'react';
import { render, screen } from '@testing-library/react';
import TreeViewBroswer from '../TreeViewBroswer';
import data from '../../data.json';
import { buildTree } from '../../utils/build-tree';
import { createLabel } from '../../utils/create-label';

test('renders title prop content', () => {
  const tree = buildTree(data.products, data.fieldHierarchy, createLabel);

  render(
    <TreeViewBroswer
      tree={tree}
      selectedNodeIds={[]}
      onItemToggle={() => {}}
    />,
  );
  const textElement = screen.getByText(/Mobile Phones/i);
  expect(textElement).toBeInTheDocument();
});
