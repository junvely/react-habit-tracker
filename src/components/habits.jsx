import React, { Component } from "react";
import Habit from "./habit";
import HabitForm from "./habitForm";

class Habits extends Component {
  render() {
    return (
      <>
        <HabitForm onAdd={this.props.onAdd}></HabitForm>
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrease={this.props.onIncrease}
              onDecrease={this.props.onDecrease}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
