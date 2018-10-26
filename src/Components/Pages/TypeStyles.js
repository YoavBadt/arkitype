import React, { Component } from "react";
import { FormGroup,Radio } from 'react-bootstrap';
// var TypeObject = {
//   cssClassName: 'paragrpah-1',
//   htmlSelector: '<p>',
//   fontSize : 10,
//   lineHeight : 24,
//   color: 'blue',
//   fontFamily: 'Helvetica',
//   fontWeight: 0,
//   letterSpacing: 0,
//   direction: 'ltr',
//   textTransform: 'none',
//   textAlign: 'auto',
//   textJustify: 'auto',
// }




class Setter extends Component {

  createLines = () => {
    let lines = []
    const setterStyle = {
      borderTop : '1px solid pink',
      boxSizing: 'border-box',
      height : this.props.height
    };
    for (let i = 0; i < 2; i++) {
      lines.push(<div style={setterStyle} key={i}></div>)
    }
    return lines
  }
  render() {
    return (
      <div>
        {this.createLines()}
      </div>
    );
  }
}


class TypeBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
        cssClassName: 'paragrpah-1',
        htmlSelector: '<p>',
        fontSize : 36 + 'px',
        lineHeight : 60 + 'px',
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        letterSpacing: '0',
        direction: 'ltr',
        textTransform: 'none',
        textAlign: 'left',
        textJustify: 'auto',
    }
  }
  handleChange(event) {
    var a = event.target.name
    if(a === 'fontSize' || a === 'lineHeight'){
        this.setState({[event.target.name] : event.target.value  + 'px'});
    }else{
      this.setState({[event.target.name] : event.target.value});
    }
    console.log(event.target.value)
  }
  render() {
    return (
      <div className="TypeBox">

        <div className="innerTextBox">
          <h1 style={this.state}>Ag Lorem Ipsum<br/> Lorem Ipsum</h1>
        </div>
        <div className="LineBox">
          <Setter height={this.state.lineHeight}/>
        </div>

      <div className="Metrics">
        <input type="text" defaultValue={this.state.cssClassName} onChange={this.handleChange2} />
      </div>

      <div className="TypeBoxControlls">

        <div className="ControllBox">
          <label>font size</label>
          <input name="fontSize" type="number" defaultValue={parseInt(this.state.fontSize)} onChange={this.handleChange.bind(this)}/>
        </div>

        <div className="ControllBox">
          <label>lineheight</label>
          <input name="lineHeight" type="number" defaultValue={parseInt(this.state.lineHeight)} onChange={this.handleChange.bind(this)}/>
        </div>

        <div className="ControllBox">
          <label>color</label>
          <input name="color" type="color" defaultValue={this.state.color} onChange={this.handleChange.bind(this)} onKeyUp={this.handleChange.bind(this)}/>
        </div>

        <div className="ControllBox">
          <label>typeface</label>
          <select name="fontFamily" defaultValue={this.state.fontFamily} onChange={this.handleChange.bind(this)}>
            <option value='Roboto'>Roboto</option>
            <option value='Merriweather'>Merriweather</option>
          </select>
        </div>

        <div className="ControllBox">
          <label>wheight</label>
          <select name="fontWeight" defaultValue={this.state.fontWeight} onChange={this.handleChange.bind(this)}>
            <option value='100'>100</option>
            <option value='200'>200</option>
            <option value='300'>300</option>
            <option value='400'>400</option>
            <option value='500'>500</option>
            <option value='500'>600</option>
            <option value='700'>700</option>
            <option value='700'>800</option>
            <option value='900'>900</option>
          </select>
        </div>

        <div className="ControllBox">
          <label>Text Align</label>
          <FormGroup  className="textAlign">
            <Radio name="textAlign" value="left" onChange={this.handleChange.bind(this)} defaultChecked ></Radio>
            <Radio name="textAlign" value="center" onChange={this.handleChange.bind(this)}></Radio>
            <Radio name="textAlign" value="right" onChange={this.handleChange.bind(this)}></Radio>
          </FormGroup>
        </div>

        </div>
      </div>
    );
  }
}

class TypeStyles extends Component {
  render() {
    return (
      <div>
        <h2>Type Styles</h2>
        <TypeBox/>

      </div>
    );
  }
}

export default TypeStyles;
