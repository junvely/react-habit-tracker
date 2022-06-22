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
  handleIncrement = (habit) => {
    console.log(habit);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(
      (newHabit) => newHabit.id !== habit.id
    );
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <input type="text" placeholder="Habit" />
        <button className="submitBtn">Add</button>
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
        <button className="reset">Reset All</button>
      </>
    );
  }
}

export default Habits;
