import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import MainTabs from './MainTabs';


class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="ProjectHeader">
          <li className="NavLink"><NavLink to="/">Main</NavLink></li>
        </div>
        <MainTabs/>

      </div>
    );
  }
}

export default Menu;
