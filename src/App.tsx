import React, { useState } from 'react';
import TreeViewBrowser from './tree/TreeViewBroswer';
import TreeItemDefault from './tree/TreeItemDefault';
import data from './data.json';
import { buildTree } from './utils/build-tree';
import { Node } from './utils/tree-impl';
import { ProductTreeNode } from './types';

function App() {
  const tree = buildTree(data.products, data.fieldHierarchy);
  const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([]);

  const onItemToggle = (node: Node<ProductTreeNode>) => {
    const value = node.getValue();

    if (selectedNodeIds.indexOf(value.id) === -1) {
      setSelectedNodeIds([...selectedNodeIds, value.id]);
    } else {
      setSelectedNodeIds(selectedNodeIds.filter((id) => id !== value.id));
    }
  };

  return (
    <TreeViewBrowser
      selectedNodeIds={selectedNodeIds}
      onItemToggle={onItemToggle}
      tree={tree}
      renderItemAs={TreeItemDefault}
    />
  );
}

export default App;
