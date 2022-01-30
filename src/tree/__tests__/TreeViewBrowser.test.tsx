import React from 'react';
import { render, screen } from '@testing-library/react';
import TreeViewBroswer from '../TreeViewBroswer';
import data from '../../data.json';
import { buildTree } from '../../utils/build-tree';

test('renders title prop content', () => {
  const tree = buildTree(data.products, data.fieldHierarchy);

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
