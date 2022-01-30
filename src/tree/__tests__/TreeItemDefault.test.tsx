import React from 'react';
import { render, screen } from '@testing-library/react';
import TreeItemDefault from '../TreeItemDefault';
import { ProductTreeNode } from '../../types';
import { Node } from '../../utils/tree-impl';

test('renders title prop content', () => {
  const node = new Node<ProductTreeNode>({
    id: 'root',
    value: 'Hello World!',
    type: 'root',
    label: 'root',
  });

  render(
    <TreeItemDefault
      isSelected={false}
      onToggle={() => {}}
      node={node}
      level={0}
    />,
  );

  const textElement = screen.getByText(/Hello World!/i);
  expect(textElement).toBeInTheDocument();
});
