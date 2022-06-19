import React, { Component } from "react";
import ClickeClass from "./CllckerClass/CllckerClass";

class ShowClickerClass extends Component {
  state = {
    isShowing: false,
  };

  toggleShow = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };
  render() {
    return (
      <div>
        {!this.state.isShowing ? (
          <div>
            <div>Нажми чтобы показать кликер</div>
            <button onClick={this.toggleShow}>ToggleClicker</button>
          </div>
        ) : (
          <div>
            <div>Нажми чтобы скрыть кликер</div>

            <button onClick={this.toggleShow}>ToggleClicker</button>
            <ClickeClass />
          </div>
        )}
      </div>
    );
  }
}
export default ShowClickerClass;

// class ShowClickerClass extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isCounting: false,
//     };
//   }

//   toggleClicker = () => {
//     this.setState({
//       isCounting: !this.state.isCounting,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.toggleClicker}>Toggle clicker</button>
//         {this.state.isCounting && <ClickeClass />}
//       </div>
//     );
//   }
// }

// export default ShowClickerClass;
