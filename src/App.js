import React, { Component } from 'react';
import p5 from 'p5';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = (p) => {
    p.setup = () => {
      p.createCanvas(window.innerWidth - 100, window.innerHeight - 150);
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

  render() {
    return (
      <div>
        <h1>Sketching App</h1>
        <div ref={this.myRef} class="sketch">

        </div>
      </div>
    )
  }
}

export default App;
