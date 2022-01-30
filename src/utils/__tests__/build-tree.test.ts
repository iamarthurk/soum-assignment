import { buildTree } from '../build-tree';
import data from '../../data.json';
import { createLabel } from '../create-label';

test('tree has 2 children categories', () => {
  const tree = buildTree(data.products, data.fieldHierarchy, createLabel);

  expect(tree.getChildren()).toHaveLength(2);
});
