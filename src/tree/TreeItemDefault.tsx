import React from 'react';
import { TreeItemProps } from './TreeViewBroswer';

const TreeItemDefault: React.FC<TreeItemProps> = ({
  node,
  level,
  isSelected,
  onToggle,
}) => {
  const value = node.getValue();

  const handleChange = () => {
    onToggle(node);
  };

  return (
    <div style={{ marginLeft: level * 20 }}>
      <input
        type="checkbox"
        id={value.id}
        onChange={handleChange}
        checked={isSelected}
      />
      <label className="ml-2" htmlFor={value.id}>
        {node.getValue().value}
      </label>
    </div>
  );
};

export default TreeItemDefault;
