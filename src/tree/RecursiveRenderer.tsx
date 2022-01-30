import React from 'react';
import { RecursiveRendererProps } from './TreeViewBroswer';
import TreeItemDefault from './TreeItemDefault';

const RecursiveRenderer: React.FC<RecursiveRendererProps> = ({
  node,
  level,
  renderItemAs,
  selectedNodeIds,
  onItemToggle,
}) => {
  const nodeChildren = node.getChildren();

  // Fallback to default component
  // If renderItemAs is not specified
  const ItemRenderer =
    typeof renderItemAs === 'undefined' ? TreeItemDefault : renderItemAs;

  return (
    <>
      <ItemRenderer
        isSelected={selectedNodeIds.indexOf(node.getValue().id) !== -1}
        onToggle={onItemToggle}
        level={level}
        node={node}
      />
      {nodeChildren.length
        ? nodeChildren.map((child) => {
            return (
              <RecursiveRenderer
                selectedNodeIds={selectedNodeIds}
                onItemToggle={onItemToggle}
                key={child.getValue().id}
                renderItemAs={renderItemAs}
                node={child}
                level={level + 1}
              />
            );
          })
        : null}
    </>
  );
};

export default RecursiveRenderer;
