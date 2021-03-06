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
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(
      (newHabit) => newHabit.id !== habit.id
    );
    this.setState({ habits });
  };
  handleHabitAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
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
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
