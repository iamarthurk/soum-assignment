import { buildTree } from '../build-tree';
import data from '../../data.json';

test('tree has 2 children categories', () => {
  const tree = buildTree(data.products, data.fieldHierarchy);

  expect(tree.getChildren()).toHaveLength(2);
});
