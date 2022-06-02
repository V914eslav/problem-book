import React, { Component } from "react";

class RandomTaskgenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0,
      showTask: false,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  taskList = [
    "созадть кликер(сложение, вычитание, сборс, запись числа в localStorage)",
    "созадть таймер(с кнопкамими старт, стоп, сброс, запись времени в localStorage)",
    "вывести массив(удалять элементы)",
    "создать все поля input (сделать их управляемыми)",
  ];

  generateTask = () => {
    this.setState({
      showTask: !this.state.showTask,
    });
  };

  render() {
    const { randomNumber } = this.state;
    return (
      <div>
        <button onClick={this.generateTask}>Generate task</button>
        {this.state.showTask && <div>{this.taskList[randomNumber]}</div>}
      </div>
    );
  }
}

export default RandomTaskgenerator;
