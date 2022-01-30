import { ProductTreeNode, Product } from '../types';
import { Node } from './tree-impl';

// Simple createLabelFunc implementation
export function createLabel(
  products: Product[],
  node: Node<ProductTreeNode>,
): string {
  if (node.getValue().type !== 'variant') {
    return '';
  }

  const deviceNumber = products.filter(({ metadata }) => {
    const { variant, model, brand } = metadata;

    return (
      variant === node.getValue().value &&
      model === node.getParent()?.getValue().value &&
      brand === node.getParent()?.getParent()?.getValue().value
    );
  }).length;

  return `Found ${deviceNumber} product${deviceNumber > 1 ? 's' : ''}`;
}
