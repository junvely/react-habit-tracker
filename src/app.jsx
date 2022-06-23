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
    const items = [...this.state.habits];
    const index = items.indexOf(habit);
    items[index].count++;
    this.setState({ habits: items });
  };
  handleDecrement = (habit) => {
    const items = [...this.state.habits];
    const index = items.indexOf(habit);
    const count = items[index].count - 1;
    items[index].count = count < 0 ? 0 : count;
    this.setState({ habits: items });
  };
  handleDelete = (habit) => {
    const items = this.state.habits.filter(
      (newHabit) => newHabit.id !== habit.id
    );
    this.setState({ habits: items });
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
        />
      </>
    );
  }
}

export default App;
