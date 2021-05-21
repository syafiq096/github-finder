import React, { Fragment, useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GithubState from './Context/github/GithubState';

import "./App.css";
import NavBar from "./Components/Layout/NavBar";
import User from "./Components/UserData/Users";
import Search from "./Components/UserData/Search";
import Alert from "./Components/Layout/Alert";
import About from "./Pages/About";
import UserPage from "./Pages/UserInfo";

function App() {
  const [alert, setAlert] = useState({
    text: "",
    type: "",
    show: false,
  });

  const onAlert = (msg, type, show) => {
    setAlert({
      text: msg,
      type: type,
      show: show,
    });
    setTimeout(() => {
      setAlert({
        text: "",
        type: "",
        show: false,
      });
    }, 3000);
  };

  return (
    <GithubState>
    <BrowserRouter>
      <div className='App'>
        <NavBar title='Github Finder' />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route path='/User/:login'>
              <UserPage />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/'>
              <Fragment>
                <Search
                  setAlert={(msg, type, show) => onAlert(msg, type, show)}
                />
                <User />
              </Fragment>
            </Route>
          </Switch>
        </div>
      </div>
      </BrowserRouter>
      </GithubState>
  );
}

export default App;
