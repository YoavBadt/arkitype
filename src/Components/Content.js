import React, { Component } from 'react';
import {
  Route,
} from "react-router-dom";

import Home from "./Home";

import Breakpoints from "./Pages/Breakpoints";
import Buildunits from "./Pages/Buildunits";
import Colors from "./Pages/Colors";
import Typefaces from "./Pages/Typefaces";
import Basefont from "./Pages/Basefont";
import TypeStyles from "./Pages/TypeStyles";
import Typegrids from "./Pages/Typegrids";
import Borders from "./Pages/Borders";
import Corners from "./Pages/Corners";
import Icons from "./Pages/Icons";
import Illustrations from "./Pages/Illustrations";
import Backgrounds from "./Pages/Backgrounds";
import Links from "./Pages/Links";
import Lists from "./Pages/Lists";
import Quotes from "./Pages/Quotes";
import Buttons from "./Pages/Buttons";
import Tables from "./Pages/Tables";
import Forms from "./Pages/Forms";
import Codesettings from "./Pages/Codesettings";


class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Route exact path="/" component={Home}/>
        <Route path="/Breakpoints" component={Breakpoints}/>
        <Route path="/Buildunits" component={Buildunits}/>
        <Route path="/Colors" component={Colors}/>
        <Route path="/Typefaces" component={Typefaces}/>
        <Route path="/Basefont" component={Basefont}/>
        <Route path="/TypeStyles" component={TypeStyles}/>
        <Route path="/Typegrids" component={Typegrids}/>
        <Route path="/Borders" component={Borders}/>
        <Route path="/Corners" component={Corners}/>
        <Route path="/Icons" component={Icons}/>
        <Route path="/Illustrations" component={Illustrations}/>
        <Route path="/Backgrounds" component={Backgrounds}/>
        <Route path="/Links" component={Links}/>
        <Route path="/Lists" component={Lists}/>
        <Route path="/Quotes" component={Quotes}/>
        <Route path="/Buttons" component={Buttons}/>
        <Route path="/Tables" component={Tables}/>
        <Route path="/Forms" component={Forms}/>
        <Route path="/Codesettings" component={Codesettings}/>
      </div>
    );
  }
}

export default Content;
