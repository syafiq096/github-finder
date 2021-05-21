import React, { Fragment, useContext, useEffect, useState } from "react";
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
  const [userRepo, setUserRepo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({
    text: "",
    type: "",
    show: false,
  });

  const getUserRepo = async (username) => {
    setLoading(true);
    await axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        setUserRepo(res.data);
        setLoading(false);
      });
  };

  // const handleClear = () => {
  //   setUser([{}]);
  // };

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
              <UserPage
                userRepo={userRepo}
              />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/'>
              <Fragment>
                <Search
                  setAlert={(msg, type, show) => onAlert(msg, type, show)}
                />
                <User
                  getUserRepo={getUserRepo}
                />
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
