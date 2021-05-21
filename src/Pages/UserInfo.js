import React, { Fragment, useContext } from "react";
import GithubContext from '../Context/github/githubContext'
import { useHistory } from "react-router";
import Spinner from "../Components/Layout/Spinner";
import Repos from '../Components/Repos/Repos'

function UserInfo() {
  const context = useContext(GithubContext);
  const { user, loading, repos } = context;
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
  } = user;

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
            <div style={{ marginTop: "40px" }}>
                <h3>Latest 5 Repositories</h3>
            <Repos repo={ repos }/>
            </div>
            
      </Fragment>
    );
    };

  return <>{loading ? <Spinner /> : userCard()}</>;
}

export default UserInfo;
