import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
// import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';
// import FileExplorerTheme from 'react-sortable-tree-theme-minimal';



export default class DOMtree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: 'Div1', children: [{ title: 'Div1.1' },{ title: 'Div1.2' },{ title: 'Div1.3' }] },
        { title: 'Div2', children: [{ title: 'Div2.1' },{ title: 'Div2.2' },{ title: 'Div2.3' }] },
        { title: 'Div3', children: [{ title: 'Div3.1', children:[{ title: 'Div3.1.1'}] }] }
      ],
    }
  }
  render() {
    return (
      <div style={{ height: 1000 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          // theme={FileExplorerTheme}
        />
      </div>
    );
  }
}
