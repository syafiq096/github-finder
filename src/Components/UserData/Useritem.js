import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from '../../Context/github/githubContext'
import Spinner from "../Layout/Spinner";

function Useritem({ userData, loading }) {
  const context = useContext(GithubContext);
  const { login, avatar_url } = userData;
  const { getUser, getUserRepo } = context;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='card text-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: "60px" }}
          />
          <h3>{login}</h3>
            <div>
            <Link to={`/User/${login}`}>
                <button onClick={() => {
                  getUser(login);
                  getUserRepo(login);
                }} className='btn btn-dark btn-sm my-1'>
                  More
            </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Useritem;
