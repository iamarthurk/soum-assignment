import { Product, ProductTreeNode } from '../types';
import { Node } from './tree-impl';

// Complexity: O(n^2)
export function buildTree(products: Product[], fieldHierarchy: string[]) {
  const root = new Node<ProductTreeNode>({
    id: 'root',
    type: 'root',
    value: '-',
  });

  for (let product of products) {
    let currentNode = root;

    for (let field of fieldHierarchy) {
      const value = product.metadata[field];

      let existingNode = currentNode
        .getChildren()
        .find((child) => child.getValue().value === value);

      if (typeof existingNode === 'undefined') {
        existingNode = new Node({
          id: `${currentNode.getValue().id}-${field}-${value
            .toLocaleLowerCase()
            .replace(/\s+/g, '-')}`,
          type: field,
          value,
        });
        currentNode.addChild(existingNode);
      }

      currentNode = existingNode;
    }
  }

  return root;
}
