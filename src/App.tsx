import React, { useState, useMemo } from 'react';
import TreeViewBrowser from './tree/TreeViewBroswer';
import TreeItemDefault from './tree/TreeItemDefault';
import data from './data.json';
import { buildTree } from './utils/build-tree';
import { Node } from './utils/tree-impl';
import { ProductTreeNode } from './types';
import { createLabel } from './utils/create-label';

function App() {
  const { products, fieldHierarchy } = data;

  // Memoize tree
  const tree = useMemo(
    () => buildTree(products, fieldHierarchy, createLabel),
    [products, fieldHierarchy],
  );

  // Initialize state
  const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([]);

  // Handle toggle of checkboxes
  const onItemToggle = (node: Node<ProductTreeNode>) => {
    const value = node.getValue();

    if (selectedNodeIds.indexOf(value.id) === -1) {
      setSelectedNodeIds([...selectedNodeIds, value.id]);
    } else {
      setSelectedNodeIds(selectedNodeIds.filter((id) => id !== value.id));
    }
  };

  return (
    <>
      <div className="mb-2">Browse products</div>
      <TreeViewBrowser
        selectedNodeIds={selectedNodeIds}
        onItemToggle={onItemToggle}
        tree={tree}
        renderItemAs={TreeItemDefault}
      />
    </>
  );
}

export default App;
