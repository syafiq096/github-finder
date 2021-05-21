import React, { useContext, useEffect } from "react";
import GithubContext from '../../Context/github/githubContext';

import UserItem from "./Useritem";

function Users() {
  const context = useContext(GithubContext);
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  useEffect(() => {
    context.getUserList()
  }, [])

  return (
    <div style={userStyle}>
      {context?.userList?.map((user) => {
        return (
          <UserItem
            key={user.id}
            userData={user}
            loading={context.loading}
          />
        );
      })}
    </div>
  );
}

export default Users;
