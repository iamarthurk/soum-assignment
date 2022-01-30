import { Product, ProductTreeNode } from '../types';
import uniqid from 'uniqid';
import { Node } from './tree-impl';

// Complexity: O(n^2)
export function buildTree(
  products: Product[],
  fieldHierarchy: string[],
  createLabelFunc: (products: Product[], node: Node<ProductTreeNode>) => string,
) {
  const root = new Node<ProductTreeNode>({
    id: 'root',
    type: 'root',
    value: '-',
    label: '',
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
          id: uniqid(),
          type: field,
          value,
          label: '',
        });

        // Important to set node parent
        // Which can be useful for createLabelFunc
        currentNode.addChild(existingNode);

        existingNode.setValue({
          ...existingNode.getValue(),
          label: createLabelFunc(products, existingNode),
        });
      }

      currentNode = existingNode;
    }
  }

  return root;
}
