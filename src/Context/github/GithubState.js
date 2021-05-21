import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import Reducer from "./Reducer";
import {
  SEARCH_USER,
  GET_USER,
  GET_USER_INFO,
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

  // get userList
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

  // get user info
  const getUser = async (username) => {
    setLoading();
    await axios
      .get(
        `https://api.github.com/users/${username}?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        dispatch({ type: GET_USER_INFO, payload: res.data });
      });
  };

  // get repositories
  const getUserRepo = async (username) => {
    await axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        dispatch({type:GET_REPOS, payload: res.data});
      });
  };

  // clear user list
  const clearUserList = () => {
    dispatch({ type: GET_USER, payload: initialState.userList });
  };

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
        clearUserList,
        getUser,
        getUserRepo,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubState;
