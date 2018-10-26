import React, { Component } from 'react';
import {
  HashRouter
} from "react-router-dom";

import Menu from "./Components/Menu/Menu"
import Content from "./Components/Content"

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="Frame" id="Frame">
          <Menu />
          <Content />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
