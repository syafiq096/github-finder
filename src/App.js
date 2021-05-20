import React from "react";
import "./App.css";
import NavBar from "./Components/Layout/NavBar";
import User from "./Components/UserData/Users";
function App() {

    return (
      <div className='App'>
        <NavBar title='Github Finder' />
        <div className='container'>
          <User />
        </div>
      </div>
    );

}

export default App;
