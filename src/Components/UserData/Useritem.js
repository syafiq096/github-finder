import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../Layout/Spinner";

function Useritem({ userData, loading, getUser, getUserRepo }) {
  const { login, avatar_url } = userData;
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
                <button onClick={() => { getUser(login); getUserRepo(login)}} className='btn btn-dark btn-sm my-1'>
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
