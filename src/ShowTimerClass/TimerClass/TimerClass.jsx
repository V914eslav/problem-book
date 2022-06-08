import React, { Component } from "react";

class TimerClass extends Component {
  state = {
    count: 0,
    isCounting: false,
  };

  handleStart = () => {
    this.setState({
      isCounting: true,
    });
    this.conuterId = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  };
  handleStop = () => {
    clearInterval(this.conuterId);
    this.setState({
      isCounting: false,
    });
  };
  handleReset = () => {
    this.setState({
      count: 0,
      isCounting: false,
    });
  };

  componentDidMount() {
    const userCount = localStorage.getItem("count");
    if (userCount) this.setState({ count: +userCount });
  }

  componentDidUpdate() {
    localStorage.setItem("count", this.state.count);
  }

  componentWillUnmount() {
    this.handleStop();
  }

  // useEffect(() => {
  //   localStorage.setItem("count", count);
  // }, [count]);

  // useEffect(() => {
  //   if (isCounting) {
  //     timerIdRef.current = setInterval(() => {
  //       setCount((prevCount) => {
  //         return prevCount + 1;
  //       });
  //     }, 1000);
  //   }

  //   return () => {
  //     timerIdRef.current && clearInterval(timerIdRef.current);
  //     timerIdRef.current = 0;
  //   };
  // }, [isCounting]);
  render() {
    return (
      <div>
        <div>React Timer</div>
        <div>{this.state.count}</div>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
export default TimerClass;
