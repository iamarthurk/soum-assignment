import React from 'react';
import { Product } from '../types';
import { Node } from '../utils/tree-impl';
import { buildTree } from '../utils/build-tree';
import RecursiveRenderer from './RecursiveRenderer';

interface TreeViewBrowserProps {
  products: Product[];
  fieldHierarchy: string[];
  renderItemAs?: React.ComponentType<TreeItemProps>;
}

export interface TreeItemProps {
  title: string;
  level: number;
}

export interface RecursiveRendererProps {
  node: Node<string>;
  level: number;
  renderItemAs: React.ComponentType<TreeItemProps> | undefined;
}

const TreeViewBrowser: React.FC<TreeViewBrowserProps> = (props) => {
  const tree = buildTree(props.products, props.fieldHierarchy);

  return (
    <RecursiveRenderer
      renderItemAs={props.renderItemAs}
      node={tree}
      level={0}
    />
  );
};

export default TreeViewBrowser;
