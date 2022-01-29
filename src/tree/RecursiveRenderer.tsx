import React from 'react';
import { RecursiveRendererProps } from './TreeViewBroswer';
import TreeItemDefault from './TreeItemDefault';

const RecursiveRenderer: React.FC<RecursiveRendererProps> = ({
  node,
  level,
  renderItemAs,
}) => {
  const nodeChildren = node.getChildren();

  // Fallback to default component
  // If renderItemAs is not specified
  const ItemRenderer =
    typeof renderItemAs === 'undefined' ? TreeItemDefault : renderItemAs;

  return (
    <ItemRenderer level={level} title={node.getValue()}>
      {nodeChildren.length
        ? nodeChildren.map((child) => {
            return (
              <RecursiveRenderer
                key={child.getValue()}
                renderItemAs={renderItemAs}
                node={child}
                level={level + 1}
              />
            );
          })
        : null}
    </ItemRenderer>
  );
};

export default RecursiveRenderer;
