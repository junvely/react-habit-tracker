import React, { Component } from "react";

class HabitForm extends Component {
  handleHabitAdd = (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    this.props.onAdd(input.value);
  };
  render() {
    return (
      <form onSubmit={this.handleHabitAdd}>
        <input type="text" placeholder="Habit" />
        <button type="submit" className="submitBtn">
          Add
        </button>
      </form>
    );
  }
}

export default HabitForm;
