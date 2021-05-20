import React, { Fragment } from "react";
import { useHistory } from "react-router";
import Spinner from "../Components/Layout/Spinner";

function UserInfo({ userInfo, loading, userRepo }) {
  const history = useHistory();
  const {
    avatar_url,
    login,
    location,
    bio,
    html_url,
    company,
    website,
    followers,
    following,
    public_repos,
    public_gists,
  } = userInfo;

  console.log(`userRepo`, userRepo);

  const userCard = () => {
    return (
      <Fragment>
        <button
          onClick={() => history.goBack()}
          className='btn btn-dark btn-sm my-1'
        >
          Back to Home
        </button>
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt=''
              className='round-img'
              style={{ width: "200px" }}
            />
            <h3>{login}</h3>
            <p>Location: {location}</p>
          </div>

          <div>
            <div style={{ marginTop: "20px" }}>
              <h3>Bio</h3>
              <p>{bio ? bio : "User got no bio to display"}</p>
            </div>

            <div style={{ marginTop: "20px" }}>
              <a href={html_url}>Go to github profile</a>
            </div>

            <div style={{ marginTop: "20px" }}>
              <p>Username: {login}</p>
              <p>Company: {company ? company : "-"}</p>
              <p>Website: {website ? website : "-"}</p>
            </div>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-primary'>Following: {following}</div>
          <div className='badge badge-primary'>
            Public Repos: {public_repos}
          </div>
          <div className='badge badge-primary'>
            Public Gist: {public_gists ? public_gists : 0}
          </div>
        </div>
      </Fragment>
    );
  };

  return <>{loading ? <Spinner /> : userCard()}</>;
}

export default UserInfo;
