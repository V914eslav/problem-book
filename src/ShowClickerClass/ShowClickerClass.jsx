import React, { Component } from "react";
import Clicker from "./Clicker";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isCounting: false,
    };
  }

  toggleClicker = () => {
    this.setState({
      isCounting: !this.state.isCounting,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleClicker}>Toggle clicker</button>
        {this.state.isCounting && <Clicker />}
      </div>
    );
  }
}

import React, { Component } from "react";

class Clicker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  decriment = () => {
    this.setState({ count: this.state.count - 1 });
  };
  incriment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  componentDidMount() {
    const userCount = localStorage.getItem("count");
    console.log(userCount);
    if (userCount) {
      this.setState({ count: +userCount });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("count", this.state.count);
  }
  // componentWillUnmount() {

  // }

  render() {
    return (
      <div className="clicker">
        <button onClick={this.decriment} className="decrement">
          -
        </button>
        <span
          className="count"
          style={{ display: "inline-block", margin: " 0.5rem   0.5rem" }}
        >
          {this.state.count}
        </span>
        <button onClick={this.incriment} className="increment">
          +
        </button>
        <button onClick={this.reset} className="reset">
          reset
        </button>
      </div>
    );
  }
}

export default Clicker;
