import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Layout/NavBar';
class App extends Component {

  render() {
    return (
      <div className='App'>
        <NavBar title='Github Finder'/>
      </div>
    );
  }

}

export default App;
