import React, { Component } from "react";
class ShowTimerHook extends Component {
  constructor() {
    super();
    this.state = {
      isCounting: false,
      count: 0,
    };
  }

  componentDidMount() {
    const userTimer = localStorage.getItem("timer");

    if (userTimer) {
      this.setState({
        count: +userTimer,
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("timer", this.state.count);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleStart = () => {
    this.setState({
      isCounting: true,
    });
    this.timerId = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  };
  handleStop = () => {
    this.setState({
      isCounting: false,
    });
    clearInterval(this.timerId);
  };
  handleReset = () => {
    this.setState({
      isCounting: false,
      count: 0,
    });
    clearInterval(this.timerId);
  };
  render() {
    return (
      <>
        <div>Reat Timer</div>
        <div>{this.state.count}</div>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}
export default ShowTimerHook;