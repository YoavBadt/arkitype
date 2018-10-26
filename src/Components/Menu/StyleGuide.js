import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import { Accordion, AccordionItem } from 'react-sanfona';

class StyleGuide extends Component {
  render() {
    return (
      <div>
        <h5 className="TabHeader">Style Guide</h5>
        <Accordion allowMultiple={1}>
          <AccordionItem title={<h6 className="MenuHeader">Layout</h6>} expanded={0}>
            <ul className="SubMenu">
              <li className="NavLink"><NavLink to="/BreakPoints">Break Points</NavLink></li>
              <li className="NavLink"><NavLink to="/BuildUnits">Build Units</NavLink></li>
              <li className="NavLink"><NavLink to="/LayoutGrids">Layout Grids</NavLink></li>
            </ul>
          </AccordionItem>
          <AccordionItem title={<h6 className="MenuHeader">Typography</h6>} expanded={1}>
            <ul className="SubMenu">
              <li className="NavLink"><NavLink to="/BaseFont">Base Font</NavLink></li>
              <li className="NavLink"><NavLink to="/TypeStyles">Type Styles</NavLink></li>
              <li className="NavLink"><NavLink to="/TypeGrids">Type Grids</NavLink></li>
            </ul>
          </AccordionItem>
          <AccordionItem title={<h6 className="MenuHeader">Basics</h6>} expanded={0}>
            <ul className="SubMenu">
              <li className="NavLink"><NavLink to="/Colors">Colors</NavLink></li>
              <li className="NavLink"><NavLink to="/Borders">Borders</NavLink></li>
              <li className="NavLink"><NavLink to="/Corners">Corners</NavLink></li>
              <li className="NavLink"><NavLink to="/Icons">Icons</NavLink></li>
              <li className="NavLink"><NavLink to="/Illustrations">Illustrations</NavLink></li>
              <li className="NavLink"><NavLink to="/Backgrounds">Backgrounds</NavLink></li>
            </ul>
          </AccordionItem>
          <AccordionItem title={<h6 className="MenuHeader">Components</h6>} expanded={0}>
            <ul className="SubMenu">
              <li className="NavLink"><NavLink to="/Links">Links</NavLink></li>
              <li className="NavLink"><NavLink to="/Lists">Lists</NavLink></li>
              <li className="NavLink"><NavLink to="/Quotes">Quotes</NavLink></li>
              <li className="NavLink"><NavLink to="/Buttons">Buttons</NavLink></li>
              <li className="NavLink"><NavLink to="/Tables">Tables</NavLink></li>
              <li className="NavLink"><NavLink to="/Forms">Forms</NavLink></li>
            </ul>
          </AccordionItem>
          <AccordionItem title={<h6 className="MenuHeader">Boxes</h6>} expanded={0}>
            <ul className="SubMenu">
              <li className="NavLink"><NavLink to="/Box 1">Box 1</NavLink></li>
            </ul>
          </AccordionItem>
          <AccordionItem title={<h6 className="MenuHeader">Code Settings</h6>} expanded={0}>
            <ul className="SubMenu">
              <li className="NavLink"><NavLink to="Codesettings">Code Settings</NavLink></li>
            </ul>
          </AccordionItem>
        </Accordion>
    </div>
    );
  }
}

export default StyleGuide;
