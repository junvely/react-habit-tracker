import React, { memo } from "react";

const HabitForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
    inputRef.current.focus();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input ref={inputRef} type="text" placeholder="Habit" required />
      <button type="submit" className="submitBtn">
        Add
      </button>
    </form>
  );
});

export default HabitForm;
