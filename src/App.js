import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import NavBar from "./Components/Layout/NavBar";
import User from "./Components/UserData/Users";
import Search from './Components/UserData/Search';

function App() {

  const [user, setUser] = useState([{}]);
  const [loading, setLoading] = useState(true);

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
    console.log(`value`, value)
  }

    return (
      <div className='App'>
        <NavBar title='Github Finder' />
        <div className='container'>
          <Search searchValue={onSearch} />
          <User user={user} loading={loading} />
        </div>
      </div>
    );

}

export default App;
