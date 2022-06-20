import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = (event) => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = (event) => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Habit1</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i class="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i class="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i class="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
