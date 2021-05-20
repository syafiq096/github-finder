import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/Layout/NavBar";
import User from "./Components/UserData/Users";
import Search from "./Components/UserData/Search";
import Alert from "./Components/Layout/Alert";
import About from "./Pages/About";
import UserPage from "./Pages/UserInfo";

function App() {
  const [user, setUser] = useState([{}]);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [showBtn, setShowBtn] = useState(false);
  const [alert, setAlert] = useState({
    text: "",
    type: "",
    show: false,
  });

  useEffect(() => {
    if (user.length > 1) {
      console.log(`fire`);
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, [user]);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      });
  }, []);

  const onSearch = (value) => {
    axios
      .get(
        `https://api.github.com/search/users?q=${value}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        console.log(`res`, res);
        setUserInfo(res.data);
        setLoading(false);
      });
  };

  const getUser = async (username) => {
    setLoading(true);
    await axios
    .get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    .then((res) => {
      console.log(`res`, res)
      setLoading(false);
    });
  }

  const handleClear = () => {
    setUser([{}]);
  };

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
    <BrowserRouter>
      <div className='App'>
        <NavBar title='Github Finder' />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route path='/User'>
              <UserPage />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/'>
              <Fragment>
                <Search
                  searchValue={onSearch}
                  handleClear={handleClear}
                  showBtn={showBtn}
                  setAlert={(msg, type, show) => onAlert(msg, type, show)}
                />
                <User user={user} loading={loading} />
              </Fragment>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
