import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/Layout/NavBar";
import User from "./Components/UserData/Users";
class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar title='Github Finder' />
        <div className='container'>
          <User />
        </div>
      </div>
    );
  }
}

export default App;
