import React, { Component } from 'react';
import p5 from 'p5';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    this.canvas = null;
  }

  Sketch = (p) => {
    p.setup = () => {
      this.canvas = p.createCanvas(window.innerWidth - 100, window.innerHeight - 150);
      p.background("white");
      p.strokeWeight(10);
      p.stroke('black');
    }

    p.draw = () => {
      if (p.mouseIsPressed) {
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
      } else if (p.touchMoved) {
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
      }
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  handleNewSketch = () => {
    if (this.canvas) {
      this.myP5.clear();
      this.myP5.background("white");
      this.myP5.strokeWeight(10);
      this.myP5.stroke('black');
    }
  }

  handleSaveSketch = () => {
    if (this.canvas) {
      this.myP5.saveCanvas(this.canvas, `My Sketch - ${uuidv4().substring(0, 6)}.jpg`);
    }
  }

  render() {
    return (
      <div>
        <h1>Sketching App</h1>
        <button type="button" onClick={this.handleNewSketch}>New Sketch</button>
        <button type="button" onClick={this.handleSaveSketch}>Save Sketch</button>
        <div ref={this.myRef} class="sketch">

        </div>
      </div>
    )
  }
}

export default App;
