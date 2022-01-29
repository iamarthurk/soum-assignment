import { Product } from '../types';
import { Node } from './tree-impl';

// Complexity: O(n^2)
export function buildTree(
  products: Product[],
  fieldHierarchy: string[],
): Node<string> {
  const root = new Node('-');

  for (let product of products) {
    let currentNode = root;

    for (let field of fieldHierarchy) {
      const value = product.metadata[field];

      let existingNode = currentNode
        .getChildren()
        .find((child) => child.getValue() === value);

      if (typeof existingNode === 'undefined') {
        existingNode = new Node(value);
        currentNode.addChild(existingNode);
      }

      currentNode = existingNode;
    }
  }

  return root;
}
