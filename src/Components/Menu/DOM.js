import React, { Component } from "react";
import DOMtree from './DOMtree'

class DOM extends Component {
  render() {
    return (
      <div>
        <h5 className="TabHeader">DOM</h5>
        <DOMtree/>
      </div>
    );
  }
}

export default DOM;
