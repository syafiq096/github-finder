import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Layout/NavBar';
import UserItem from './Components/UserData/Useritem';
class App extends Component {

  render() {
    return (
      <div className='App'>
        <NavBar title='Github Finder' />
        <UserItem />
      </div>
    );
  }

}

export default App;
