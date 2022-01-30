import React from 'react';
import cntl from 'cntl';
import { TreeItemProps } from './TreeViewBroswer';

const labelClassName = cntl`
  text-xs
  ml-1
  mb-2
  text-gray-400
`;

const TreeItemDefault: React.FC<TreeItemProps> = ({
  node,
  level,
  isSelected,
  onToggle,
}) => {
  const nodeValue = node.getValue();

  const handleChange = () => {
    onToggle(node);
  };

  return (
    <div style={{ marginLeft: level * 20 }}>
      <div>
        <input
          type="checkbox"
          id={nodeValue.id}
          onChange={handleChange}
          checked={isSelected}
        />
        <label className="ml-2" htmlFor={nodeValue.id}>
          {nodeValue.value}
        </label>
      </div>
      <div className={labelClassName}>{nodeValue.label}</div>
    </div>
  );
};

export default TreeItemDefault;
