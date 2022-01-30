import React from 'react';
import { Product, ProductTreeNode } from '../types';
import { Node } from '../utils/tree-impl';
import RecursiveRenderer from './RecursiveRenderer';

interface TreeViewBrowserProps {
  tree: Node<ProductTreeNode>;
  renderItemAs?: React.ComponentType<TreeItemProps>;
  selectedNodeIds: string[];
  onItemToggle: (node: Node<ProductTreeNode>) => void;
}

export interface TreeItemProps {
  node: Node<ProductTreeNode>;
  level: number;
  isSelected: boolean;
  onToggle: (node: Node<ProductTreeNode>) => void;
}

export interface RecursiveRendererProps {
  node: Node<ProductTreeNode>;
  level: number;
  renderItemAs: React.ComponentType<TreeItemProps> | undefined;
  selectedNodeIds: string[];
  onItemToggle: (node: Node<ProductTreeNode>) => void;
}

const TreeViewBrowser: React.FC<TreeViewBrowserProps> = (props) => {
  // Should skip the root
  return (
    <>
      {props.tree.getChildren().map((node) => (
        <RecursiveRenderer
          selectedNodeIds={props.selectedNodeIds}
          onItemToggle={props.onItemToggle}
          key={node.getValue().id}
          renderItemAs={props.renderItemAs}
          node={node}
          level={0}
        />
      ))}
    </>
  );
};

export default TreeViewBrowser;
