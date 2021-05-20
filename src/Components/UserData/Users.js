import React, { useState, useEffect } from "react";
import UserItem from "./Useritem";
import axios from "axios";

function Users() {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users=?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      });
  }, []);

  const [user, setUser] = useState([{}]);
  const [loading, setLoading] = useState(true);

  return (
    <div style={userStyle}>
      {user?.map((user) => {
        return <UserItem key={user.id} userData={user} loading={loading} />;
      })}
    </div>
  );
}

export default Users;
