import React, { Component } from "react";
import { Tabs,Tab } from 'react-bootstrap';
import StyleGuide from './StyleGuide.js';
import DOM from './DOM';
import CMS from './CMS';

class MainTabs extends Component {
  render() {
    return (
      <div>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" animation={false}>
            <Tab eventKey={1} title="SG">
              <StyleGuide/>
            </Tab>
            <Tab eventKey={2} title="DOM">
              <DOM/>
            </Tab>
            <Tab eventKey={3} title="CMS">
              <CMS/>
            </Tab>
          </Tabs>
        </div>
    );
  }
}

export default MainTabs;
