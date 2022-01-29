import React from 'react';
import TreeViewBrowser from './tree/TreeViewBroswer';
import TreeItemDefault from './tree/TreeItemDefault';
import data from './data.json';

function App() {
  return (
    <TreeViewBrowser
      products={data.products}
      fieldHierarchy={data.fieldHierarchy}
      renderItemAs={TreeItemDefault}
    />
  );
}

export default App;
