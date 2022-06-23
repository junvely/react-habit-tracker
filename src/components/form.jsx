import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Habit" />
        <button type="submit" className="submitBtn">
          Add
        </button>
      </form>
    );
  }
}

export default Form;
