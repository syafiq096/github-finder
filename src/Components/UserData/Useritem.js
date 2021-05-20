import React from "react";
import Spinner from "../Layout/Spinner";

function Useritem({ userData, loading }) {
  const { login, avatar_url, html_url } = userData;
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
            <a href={html_url} className='btn btn-dark btn-sm my-1'>
              More
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Useritem;
