import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import NavBar from "./Components/Layout/NavBar";
import User from "./Components/UserData/Users";
import Search from './Components/UserData/Search';

function App() {

  const [user, setUser] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (user.length > 1) {
      console.log(`fire`);
      setShowBtn(true)
    } else {
      setShowBtn(false);
    }
    
  }, [user])

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
      console.log(`res`, res)
      setUser(res.data.items);
      setLoading(false);
    });
  }

  const handleClear = () => {
    setUser([{}])
  }

    return (
      <div className='App'>
        <NavBar title='Github Finder' />
        <div className='container'>
          <Search searchValue={onSearch} handleClear={handleClear} showBtn={showBtn}/>
          <User user={user} loading={loading} />
        </div>
      </div>
    );

}

export default App;
