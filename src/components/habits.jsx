import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "reading", count: 0 },
      { id: 2, name: "running", count: 0 },
      { id: 3, name: "coding", count: 0 },
    ],
  };
  handleIncrement = (event) => {
    console.log("increase");
  };
  handleDecrement = (event) => {
    console.log("decrease");
  };
  handleDelete = (event) => {
    console.log("delete");
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrease={this.handleIncrement}
            onDecrease={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
