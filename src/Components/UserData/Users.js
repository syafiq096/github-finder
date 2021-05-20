import React from "react";
import UserItem from "./Useritem";


function Users({user, loading}) {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  return (
    <div style={userStyle}>
      {user?.map((user) => {
        return <UserItem key={user.id} userData={user} loading={loading} />;
      })}
    </div>
  );
}

export default Users;
