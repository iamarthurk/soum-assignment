import React from 'react';
import { TreeItemProps } from './TreeViewBroswer';

const TreeItemDefault: React.FC<TreeItemProps> = ({
  title,
  level,
  children,
}) => {
  return (
    <div>
      <div style={{ marginLeft: level * 20 }}>{title}</div>
      {children}
    </div>
  );
};

export default TreeItemDefault;
