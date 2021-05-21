import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import Reducer from "./Reducer";
import {
  SEARCH_USER,
  GET_USER,
  GET_REPOS,
  SET_ALERT,
  SET_LOADING,
  REMOVE_ALERT,
} from "../types";

function GithubState({ children }) {
  const initialState = {
    userList: [],
    repos: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // search users
  const searchUsers = async (value) => {
    setLoading();
    await axios
      .get(
        `https://api.github.com/search/users?q=${value}&client_id=
            ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        dispatch({ type: SEARCH_USER, payload: res.data.items });
      });
  };

  // get user
  const getUserList = () => {
    setLoading();
    axios
      .get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      });
  };

  // get repositories

  // clear user list

  // loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        userList: state.userList,
        repos: state.repos,
        user: state.user,
        loading: state.loading,
        searchUsers,
        getUserList,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubState;
