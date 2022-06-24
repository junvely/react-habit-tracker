import React, { Component } from "react";
import Habits from "./components/habits";
import Navbar from "./components/Navbar";
import "./app.css";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "reading", count: 0 },
      { id: 2, name: "running", count: 0 },
      { id: 3, name: "coding", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
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
  handleHabitAdd = (input) => {
    const habit = { id: Date.now(), name: input, count: 0 };
    this.state.habits.push(habit);
    const habits = this.state.habits;
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar
          countHabit={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        ></Navbar>
        <Habits
          habits={this.state.habits}
          onIncrease={this.handleIncrement}
          onDecrease={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleHabitAdd}
        />
      </>
    );
  }
}

export default App;
