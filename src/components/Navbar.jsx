import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <nav>
        <h1>❤️‍🔥Habit Tracker</h1>
        <span className="count">{this.props.countHabit}</span>
      </nav>
    );
  }
}

export default Navbar;
