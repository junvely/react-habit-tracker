import React, { Component } from "react";
import Habit from "./habit";
import Form from "./form";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrease(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrease(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    const habitObj = this.props.habits;
    return (
      <>
        <Form></Form>
        <ul>
          {habitObj.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrease={this.handleIncrement}
              onDecrease={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="reset">Reset All</button>
      </>
    );
  }
}

export default Habits;
