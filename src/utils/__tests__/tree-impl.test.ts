import { Node } from '../tree-impl';

test('root node value should be Hello World!', () => {
  const tree = new Node('Hello World!');

  expect(tree.getValue()).toEqual('Hello World!');
});

test('root children length should be 2', () => {
  const tree = new Node('Hello World!');

  tree.addChild(new Node('1st child'));
  tree.addChild(new Node('2nd child'));

  expect(tree.getChildren()).toHaveLength(2);
});
