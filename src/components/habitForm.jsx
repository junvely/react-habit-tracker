import React, { Component } from "react";

class HabitForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
    this.inputRef.current.focus();
  };

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" placeholder="Habit" required />
        <button type="submit" className="submitBtn">
          Add
        </button>
      </form>
    );
  }
}

export default HabitForm;
