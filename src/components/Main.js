import React, { Component } from "react";
import Circle from "./Circle";

class Main extends Component {
  state = {
    counter: 0,
  };

  addOneHandler = () => {
    this.setstate = {
      counter: this.state.counter + 1,
    };
  };
  addFiveHandler = () => {
    this.setstate = {
      counter: this.state.counter + 5,
    };
  };
  resetHandler = () => {
    this.setstate = {
      counter: 0,
    };
  };

  removeOneHandler = () => {
    this.setstate = {
      counter: this.state.counter - 1,
    };
  };
  removeFiveHandler = () => {
    this.setstate = {
      counter: this.state.counter - 5,
    };
  };

  render() {
    return (
      <main>
        <div className="circle">
          <h1>{this.state.counter}</h1>
        </div>
        <Circle counter={this.state.counter} />
        <div className="buttons">
          <div id="button">
            <button onClick={this.addFiveHandler}>Add five</button>
          </div>
          <div id="button">
            <button onClick={this.addOneHandler}>Add one</button>
          </div>
          <div id="button">
            <button onClick={this.resetHandler}>Reset</button>
          </div>
          <div id="button">
            <button onClick={this.removeOneHandler}>Remove one</button>
          </div>
          <div id="button">
            <button onClick={this.removeFiveHandler}>Remove five</button>
          </div>
        </div>
      </main>
    );
  }
}

// const clickHandler = () => {
//   console.log("test");
// };

export default Main;
