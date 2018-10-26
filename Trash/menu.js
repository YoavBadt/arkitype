import React, { Component } from 'react';
import InfinityMenu from "react-infinity-menu";
import "react-infinity-menu/src/infinity-menu.css";
import data from '../data/data.json'

const tree = data

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {tree:[]};
  }

	onNodeMouseClick(event, tree, node, level, keyPath) {
		this.setState({
			tree: tree
		});
	}

	onLeafMouseClick(event, leaf) {
		console.log( leaf.id ); // Prints the leaf id
		console.log( leaf.name ); // Prints the leaf name
	}

	onLeafMouseUp(event, leaf) {
		console.log( leaf.id ); // Prints the leaf id
		console.log( leaf.name ); // Prints the leaf name
	}

	onLeafMouseDown(event, leaf) {
		console.log( leaf.id ); // Prints the leaf id
		console.log( leaf.name ); // Prints the leaf name
	}

	render() {
		return (
			<InfinityMenu
				tree={this.state.tree}
				onNodeMouseClick={this.onNodeMouseClick}
				onLeafMouseClick={this.onLeafMouseClick}/*optional*/
				onLeafMouseDown={this.onLeafMouseDown}/*optional*/
				onLeafMouseUp={this.onLeafMouseUp}/*optional*/
				maxLeaves={5}/*optional*/
			/>
		);
	}
}

// class Menu1 extends Component {
//   render() {
//     return (
//       <InfinityMenu />
//     );
//   }
// }

export default Menu;
