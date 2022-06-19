import React, { Component } from "react";

class ClickerClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }
  componentDidMount() {
    const userCount = localStorage.getItem("count");
    this.setState({
      count: +userCount,
    });
  }
  componentDidUpdate() {
    localStorage.setItem("count", this.state.count);
  }

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <button onClick={this.decrement}>-</button>
        <button style={{ margin: "5px" }}>{this.state.count}</button>
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
export default ClickerClass;

// export default class ClickeClass extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   decriment = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   incriment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   reset = () => {
//     this.setState({ count: 0 });
//   };

//   componentDidMount() {
//     const userCount = localStorage.getItem("count");
//     console.log(userCount);
//     if (userCount) {
//       this.setState({ count: +userCount });
//     }
//   }
//   componentDidUpdate() {
//     localStorage.setItem("count", this.state.count);
//   }
//   // componentWillUnmount() {

//   // }

//   render() {
//     return (
//       <div className="clicker">
//         <button onClick={this.decriment} className="decrement">
//           -
//         </button>
//         <span
//           className="count"
//           style={{ display: "inline-block", margin: " 0.5rem   0.5rem" }}
//         >
//           {this.state.count}
//         </span>
//         <button onClick={this.incriment} className="increment">
//           +
//         </button>
//         <button onClick={this.reset} className="reset">
//           reset
//         </button>
//       </div>
//     );
//   }
// }
