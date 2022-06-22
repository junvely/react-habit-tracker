import React, { Component } from "react";
import Habits from "./components/habits";
import Nav from "./components/Navbar";
import "./app.css";

class App extends Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <Habits />
      </>
    );
  }
}

export default App;
